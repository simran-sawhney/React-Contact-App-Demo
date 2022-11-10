import { Contact } from "../../data/types";
import formatDate from "../formatDate";
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    GET_CONTACTS,
    UPDATE_CONTACT,
} from "../types";

export type ContactsState = {
    contacts: Contact[];
    loading: boolean;
};

const initialState: ContactsState = {
    contacts: [],
    loading: true,
};

// eslint-disable-next-line default-param-last
const contactsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_CONTACTS: {
            const contacts: Contact[] = action.payload.map((entry: any) => ({
                id: entry.login.uuid,
                name: `${entry.name.first} ${entry.name.last}`,
                avatar: entry.picture,
                email: entry.email,
                cell: entry.cell,
                nat: entry.nat,
                gender: entry.gender,
                dob: formatDate(entry.dob.date),
            }));
            return {
                ...state,
                contacts,
                loading: false,
            };
        }
        case ADD_CONTACT:
            return {
                contacts: [action.payload, ...state.contacts],
                loading: false,
            };
        case UPDATE_CONTACT: {
            const newContacts = [...state.contacts];
            const oldIndex = newContacts.findIndex(
                (current) => current.id === action.payload.id
            );
            newContacts.splice(oldIndex, 1);
            return {
                contacts: [action.payload, ...newContacts],
                loading: false,
            };
        }
        case DELETE_CONTACT: {
            const newContacts = [...state.contacts];
            const oldIndex = newContacts.findIndex(
                (current) => current.id === action.payload
            );
            newContacts.splice(oldIndex, 1);
            return {
                contacts: newContacts,
                loading: false,
            };
        }
        default:
            return state;
    }
};

export default contactsReducer;
