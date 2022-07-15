import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import Cookies from 'universal-cookie';
function ProtectedRoute() {
    const cookies = new Cookies();
    return (
        cookies.get("accessToken") ? <Outlet /> : <Navigate to={"/login"} />
    )
}

export default ProtectedRoute