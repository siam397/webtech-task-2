import React from "react";
import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import UserInfo from "Pages/UserInfo";
const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/user" >
                <Route path=":id" element={<UserInfo />}></Route>
            </Route>
        </Routes>
    )
}

export default UserRoutes