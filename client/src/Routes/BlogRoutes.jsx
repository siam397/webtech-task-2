import React from "react";
import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Blogs from "Pages/Blogs";
import NewBlog from "Pages/EditBlog";
import BlogDetails from "Pages/BlogDetails";
import EditBlog from "Pages/EditBlog";
const BlogRoutes = () => {
    return (
        <Routes>
            <Route path="/blogs" >
                <Route path=":type" element={<Blogs />}></Route>
            </Route>
            <Route path="/blog/:id" element={<BlogDetails />}></Route>

            <Route path="blogEdit">
                <Route path=":id" element={<EditBlog />}></Route>
            </Route>
        </Routes>
    )
}

export default BlogRoutes