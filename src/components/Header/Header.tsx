import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import ContactsIcon from "@mui/icons-material/Contacts";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <ContactsIcon
                    sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                />
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                        mr: 2,
                        display: { xs: "none", md: "flex" },
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: "0.15rem",
                        color: "inherit",
                        textDecoration: "none",
                    }}
                >
                    CONTACTSAPP
                </Typography>
                <Box
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    {Object.keys(ROUTES).map((key) => {
                        const { showInHeader, path, label } = ROUTES[key];
                        if (!showInHeader) return null;
                        return (
                            <Link
                                key={key}
                                to={path}
                                style={{ textDecoration: "none" }}
                            >
                                <Button
                                    key={key}
                                    sx={{
                                        my: 2,
                                        color: "white",
                                        display: "block",
                                    }}
                                >
                                    {label}
                                </Button>
                            </Link>
                        );
                    })}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
