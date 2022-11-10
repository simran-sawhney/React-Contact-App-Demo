import React from "react";
import { Button, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import NATIONALITIES from "../../app/data/nationalities";
import InputAutocomplete from "../Form/InputAutocomplete/InputAutocomplete";
import InputText from "../Form/InputText/InputText";
import { ContactDetailsFormProps } from "./ContactDetailsForm.props";
import { Contact } from "../../app/data/types";

function ContactDetailsForm({
    title,
    defaultValues,
    onSubmit,
}: ContactDetailsFormProps) {
    const { handleSubmit, control } = useForm<Contact>({
        defaultValues,
    });
    return (
        <Paper
            style={{
                display: "grid",
                gridRowGap: "20px",
                padding: "20px",
                margin: "10px 300px",
            }}
        >
            <Typography
                variant="h3"
                noWrap
                component="div"
                sx={{
                    fontWeight: 700,
                    marginTop: "2rem",
                }}
            >
                {title}
            </Typography>

            <InputText
                name="name"
                control={control}
                rules={{ required: true }}
                label="Name"
            />

            <InputText
                name="email"
                control={control}
                rules={{ required: true }}
                label="Email"
            />
            <InputText
                name="cell"
                control={control}
                rules={{ required: true }}
                label="Cellphone Number"
            />

            <InputAutocomplete
                name="nat"
                control={control}
                rules={{ required: true }}
                label="Nationality"
                options={NATIONALITIES}
            />

            <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
        </Paper>
    );
}

export default ContactDetailsForm;
