import {
    ADD_CONTACT,
    GET_CONTACTS,
    CONTACTS_ERROR,
    UPDATE_CONTACT,
    DELETE_CONTACT,
} from "../types";
import contactsHttp from "../../api/contactsHttp";
import { Contact } from "../../data/types";
import { AppThunk } from "../store";

// Mock value for total contacts to fetch
const TOTAL_CONTACTS = 100;

export const fetchContacts = (): AppThunk => async (dispatch) => {
    try {
        const response = await contactsHttp.get(`&results=${TOTAL_CONTACTS}`);
        dispatch({
            type: GET_CONTACTS,
            payload: response.data.results,
        });
    } catch (error) {
        dispatch({
            type: CONTACTS_ERROR,
            payload: error as string,
        });
    }
};

export const addContact = (contact: Contact) => ({
    type: ADD_CONTACT,
    payload: contact,
});

export const updateContact = (contact: Contact) => ({
    type: UPDATE_CONTACT,
    payload: contact,
});

export const deleteContact = (id: Pick<Contact, "id">) => ({
    type: DELETE_CONTACT,
    payload: id,
});
