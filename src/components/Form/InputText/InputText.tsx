import React from "react";
import { TextField } from "@mui/material";
import { useController } from "react-hook-form";
import { GenericInputProps } from "../types";
import generateErrorMsg from "../generateErrorMsg";

export function InputText({
    name,
    control,
    label,
    rules,
    defaultValue,
}: GenericInputProps) {
    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
    } = useController({
        name,
        control,
        rules,
        defaultValue,
    });

    return (
        <TextField
            name={name}
            label={label}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            inputRef={ref}
            helperText={error ? generateErrorMsg(error, label, rules) : null}
            error={!!error}
            fullWidth
            variant="outlined"
        />
    );
}

export default InputText;
