import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import React from "react";

export type AlertDialogProps = {
    triggerLabel: string;
    title: string;
    desc: string;
    onConfirm: () => void;
    confirmLabel: string;
};

function AlertDialog({
    triggerLabel,
    title,
    desc,
    onConfirm,
    confirmLabel = "Proceed",
}: AlertDialogProps) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = () => {
        onConfirm();
        handleClose();
    };

    return (
        <div>
            <Button variant="text" onClick={handleClickOpen}>
                {triggerLabel}
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {desc}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleConfirm} autoFocus>
                        {confirmLabel}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AlertDialog;
