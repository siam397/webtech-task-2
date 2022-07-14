import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import Blogs from "Pages/Blogs";
import NewBlog from "Pages/NewBlog";
const BlogRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Blogs />} />
            <Route path="/newBlog" element={<NewBlog />} />
        </Routes>
    )
}

export default BlogRoutes