import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useController } from "react-hook-form";
import { AutocompleteInputProps } from "./InputAutocomplete.props";
import generateErrorMsg from "../generateErrorMsg";

export function InputAutocomplete({
    name,
    control,
    label,
    rules,
    defaultValue,
    options,
}: AutocompleteInputProps) {
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
        <Autocomplete
            disablePortal
            options={options}
            value={value}
            onChange={(event: any, newValue: string | null) =>
                onChange(newValue)
            }
            onInputChange={(event, newInputValue) => onChange(newInputValue)}
            onBlur={onBlur}
            renderInput={(params) => (
                <TextField
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...params}
                    name={name}
                    label={label}
                    inputRef={ref}
                    helperText={
                        error ? generateErrorMsg(error, label, rules) : null
                    }
                    error={!!error}
                    variant="outlined"
                    fullWidth
                    value={value}
                />
            )}
        />
    );
}

export default InputAutocomplete;
