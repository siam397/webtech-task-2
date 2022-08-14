import React from "react";
import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Blogs from "Pages/Blogs";
import BlogDetails from "Pages/BlogDetails";
import EditBlog from "Pages/EditBlog";
import ProtectedRoute from "./ProtectedRoute";
const BlogRoutes = () => {
    return (
        <Routes>
            <Route element={<ProtectedRoute />}>
                <Route path='/' element={<Navigate to="/blogs/all" />} />
                <Route path="/blogs" >
                    <Route path=":type" element={<Blogs />}></Route>
                </Route>
                <Route path="/blog/:id" element={<BlogDetails />}></Route>

                <Route path="blogEdit">
                    <Route path=":id" element={<EditBlog />}></Route>
                </Route>
            </Route>
        </Routes>
    )
}

export default BlogRoutes