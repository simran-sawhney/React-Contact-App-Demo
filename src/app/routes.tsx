import React from "react";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import FormPage from "../pages/FormPage/FormPage";
import ListPage from "../pages/ListPage/ListPage";

type Routes = {
    [key: string]: {
        label: string;
        path: string;
        // eslint-disable-next-line no-undef
        page: JSX.Element;
        showInHeader: boolean;
    };
};

const ROUTES: Routes = {
    LIST: {
        label: "Contact List",
        path: "/",
        page: <ListPage />,
        showInHeader: true,
    },
    FORM: {
        label: "Add New Contact",
        path: "/form",
        page: <FormPage />,
        showInHeader: true,
    },
    FORM_EDIT: {
        label: "Update Contact Detail",
        path: "/form/:contactId",
        page: <FormPage />,
        showInHeader: false,
    },
    DETAILS: {
        label: "Contact Details",
        path: "/:contactId",
        page: <DetailsPage />,
        showInHeader: false,
    },
};

export default ROUTES;
