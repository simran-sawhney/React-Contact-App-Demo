import React from "react";
import { Typography } from "@mui/material";
import { NormalTextProps } from "./SubheaderText.props";

function NormalText({ text }: NormalTextProps) {
    return (
        <Typography
            variant="subtitle1"
            noWrap
            component="div"
            sx={{
                fontSize: "1.25rem",
                margin: "0.5rem 0 0",
            }}
        >
            {text}
        </Typography>
    );
}

export default NormalText;
