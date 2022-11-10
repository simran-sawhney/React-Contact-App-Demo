import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Box } from "@mui/material";
import { Contact } from "../../app/data/types";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import {
    addContact,
    updateContact,
} from "../../app/store/actions/contactsActions";
import ContactDetailsForm from "../../components/ContactDetailsForm/ContactDetailsForm";

function FormPage() {
    const navigate = useNavigate();
    const { contactId } = useParams();
    const contact = useAppSelector((state) =>
        state.contacts.contacts.find((current) => current.id === contactId)
    );
    const dispatch = useAppDispatch();

    const title = contact ? "Update Contact Detail" : "Add New Contact";
    const defaultValues: Contact = useMemo(() => {
        if (contact) {
            return contact;
        }
        return {
            id: uuidv4(),
            name: "",
            email: "",
            cell: "",
            nat: "",
            // mock values
            avatar: {
                large: "https://place-hold.it/128x128.jpg",
                medium: "https://place-hold.it/72x72.jpg",
                thumbnail: "https://place-hold.it/48x48.jpg",
            },
            gender: "male",
            dob: "12-09-1969",
        };
    }, [contact]);

    const handleOnSubmit = (data: Contact) => {
        if (contact) dispatch(updateContact(data));
        else dispatch(addContact(data));
        navigate("/");
    };

    return (
        <Box>
            <ContactDetailsForm
                title={title}
                defaultValues={defaultValues}
                onSubmit={handleOnSubmit}
            />
        </Box>
    );
}

export default FormPage;
