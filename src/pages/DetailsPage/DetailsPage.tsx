import React from "react";
import {
    Avatar,
    Box,
    Button,
    Divider,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import SubheaderText from "../../components/SubheaderText/SubheaderText";
import { deleteContact } from "../../app/store/actions/contactsActions";
import AlertDialog from "../../components/AlertDialog/AlertDialog";

function DetailsPage() {
    const navigate = useNavigate();
    const { contactId } = useParams();
    const dispatch = useAppDispatch();
    const contact = useAppSelector((state) =>
        state.contacts.contacts.find((current) => current.id === contactId)
    );

    if (!contact) {
        return (
            <Box
                sx={{
                    marginTop: "3rem",
                    width: "100%",
                    textAlign: "center",
                }}
            >
                <h3>Contact not found</h3>
            </Box>
        );
    }

    const handleEditClick = () => {
        navigate(`/form/${contact.id}`);
    };

    const handleDeleteClick = () => {
        dispatch(deleteContact(contact.id));
        navigate(`/`);
    };

    return (
        <Paper
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "3rem 5rem 5rem",
                margin: "1rem 20rem",
            }}
        >
            <Stack
                spacing={2}
                direction="row"
                sx={{
                    width: "100%",
                    justifyContent: "flex-end",
                    marginBottom: "3rem",
                }}
            >
                <Button variant="outlined" onClick={handleEditClick}>
                    Edit
                </Button>
                <AlertDialog
                    triggerLabel="Delete"
                    title="Are you sure you want to delete this contact?"
                    desc="This action cannot be reverted."
                    confirmLabel="Delete"
                    onConfirm={handleDeleteClick}
                />
            </Stack>
            <Avatar
                alt={`${contact.name} Avatar`}
                src={contact.avatar.large}
                sx={{ width: 128, height: 128 }}
            />
            <Typography
                variant="h3"
                noWrap
                component="div"
                sx={{
                    fontWeight: 700,
                    marginTop: "2rem",
                }}
            >
                {contact.name}
            </Typography>
            <SubheaderText text={contact.email} />
            <SubheaderText text={contact.cell} />
            <Divider
                variant="middle"
                sx={{ width: "100%", margin: "1rem 0 0" }}
            />
            <Box
                sx={{
                    width: "calc(100% -  2rem)",
                    margin: "1rem",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}
            >
                <SubheaderText text={contact.nat} />
                <SubheaderText text={contact.gender} />
                <SubheaderText text={contact.dob} />
            </Box>
        </Paper>
    );
}

export default DetailsPage;
