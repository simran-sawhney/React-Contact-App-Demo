import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ROUTES from "./app/routes";
import { useAppDispatch } from "./app/store/hooks";
import { fetchContacts } from "./app/store/actions/contactsActions";
import "./App.css";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchContacts() as any);
    }, [dispatch]);

    return (
        <Router>
            <Header />
            <Routes>
                {Object.keys(ROUTES).map((key) => (
                    <Route
                        path={ROUTES[key].path}
                        key={key}
                        element={ROUTES[key].page}
                    />
                ))}
            </Routes>
        </Router>
    );
}

export default App;
