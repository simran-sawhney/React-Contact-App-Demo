import { FieldError } from "react-hook-form";
import { Rules } from "./types";

const generateErrorMsg = (
    error: FieldError | undefined,
    // eslint-disable-next-line default-param-last
    label = "field",
    rules?: Rules
) => {
    if (rules && error) {
        switch (error.type) {
            case "required":
                return `${label} is required`;
            default:
                return `${label} is invalid`;
        }
    }
    return "";
};

export default generateErrorMsg;
