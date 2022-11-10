import React from "react";
import { Avatar, Box } from "@mui/material";
import {
    DataGrid,
    GridCellParams,
    GridColDef,
    GridToolbar,
} from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/store/hooks";

const columns: GridColDef[] = [
    {
        field: "avatar",
        headerName: "Avatar",
        width: 150,
        filterable: false,
        renderCell: (params) => (
            <Avatar alt="Contact Avatar" src={params.value.thumbnail} />
        ),
        cellClassName: "grid-cell--clickable",
    },
    {
        field: "name",
        headerName: "Name",
        width: 250,
        cellClassName: "grid-cell--clickable",
    },
    { field: "email", headerName: "Email", width: 250 },
    { field: "cell", headerName: "Phone Number", width: 150 },
    { field: "nat", headerName: "Nationality", width: 150, filterable: false },
    { field: "gender", headerName: "Gender", width: 150, filterable: false },
    {
        field: "dob",
        headerName: "Date of Birth",
        width: 150,
        filterable: false,
    },
];

function ListPage() {
    const navigate = useNavigate();
    const contacts = useAppSelector((state) => state.contacts);

    const handleCellClick = ({ field, row }: GridCellParams) => {
        if (field === "name" || field === "avatar") {
            navigate(`/${row.id}`);
        }
    };
    if (!contacts) return null;
    return (
        <Box
            sx={{
                marginTop: "1rem",
                height: "calc(100vh - 6rem)",
                width: "100%",
                "& .grid-cell--clickable": {
                    fontWeight: "600",
                    cursor: "pointer",
                },
            }}
        >
            <DataGrid
                initialState={{
                    pagination: {
                        pageSize: 25,
                    },
                }}
                rows={contacts.contacts}
                columns={columns}
                components={{ Toolbar: GridToolbar }}
                onCellClick={handleCellClick}
                loading={contacts.loading}
                disableSelectionOnClick
                disableColumnSelector
                disableDensitySelector
                sx={{
                    border: "none",
                }}
            />
        </Box>
    );
}

export default ListPage;
