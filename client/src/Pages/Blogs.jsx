import axios from "../Helper/axios";
import React, { useEffect, useState } from "react";
import Blog from "Components/Blog";
import Topbar from "Components/Topbar";

const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get("blogs").then(res => {
            console.log(res.data.data.blogs);
            setBlogs([...res.data.data.blogs])
        }).catch(err => {
            console.log(err);
        })
    }, [])



    return (
        <>
            <Topbar />
            <h1 className="text-center font-bold text-4xl mt-10">Blogs</h1>

            {/* <div className="flex flex-row flex-wrap-reverse gap-6 w-4/5 m-auto mt-20"> */}
            {
                blogs?.length > 0 ?
                    <div className="flex flex-row flex-wrap-reverse gap-6 w-4/5 m-auto mt-20">
                        {blogs?.map((blog, index) => {
                            return <Blog key={index} title={blog.title} username={blog.username} content={blog.content} />
                        })}
                    </div> :
                    <h1 className="text-3xl font-medium text-center mt-12">No Blogs :( </h1>
            }
        </>
    )
}

export default Blogs;