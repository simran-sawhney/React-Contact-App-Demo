import { Contact } from "../../app/data/types";

export type ContactDetailsFormProps = {
    title: string;
    defaultValues: Contact;
    // eslint-disable-next-line no-unused-vars
    onSubmit: (data: Contact) => void;
};
