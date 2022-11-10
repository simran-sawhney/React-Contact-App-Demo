import { Control } from "react-hook-form";

export type Rules = Partial<{
    required: boolean;
}>;

export type GenericInputProps = {
    name: string;
    label: string;
    control: Control<any>;
    rules?: Rules;
    defaultValue?: string;
};
