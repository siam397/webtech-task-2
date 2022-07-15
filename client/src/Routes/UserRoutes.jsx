import React from "react";
import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import UserInfo from "Pages/UserInfo";
import ProtectedRoute from "./ProtectedRoute";
const UserRoutes = () => {
    return (
        <Routes>
            <Route element={<ProtectedRoute />}>
                <Route path="/account" element={<UserInfo />}></Route>
            </Route>
        </Routes>
    )
}

export default UserRoutes