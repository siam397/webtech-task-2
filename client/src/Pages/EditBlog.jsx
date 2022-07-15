import axios from "../Helper/axios";
import Input from "Components/FormInput";
import React, { useEffect, useState } from "react";
import Alert from "Components/Alert";
import { useParams } from "react-router-dom";
import jwt from 'jwt-decode'
import Cookie from "universal-cookie"

const EditBlog = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [blog, setBlog] = useState()
    const [error, setError] = useState()
    const [success, setSuccess] = useState()
    const { id } = useParams()

    useEffect(() => {
        if (id !== 'new') {
            getBlogById()
        }
    }, [id])

    const getBlogById = () => {
        axios.get(`blogs/${id}`).then(res => {
            let blog = res.data.data.blog
            setTitle(blog.title)
            setContent(blog.content)
            setBlog(blog)
        }).catch(err => {
            console.log(err);
        })
    }

    const saveBlogChanges = (event) => {
        event.preventDefault();
        if (id === "new") {
            createBlog()
            return;
        }
        updateBlog()
    }


    const createBlog = () => {
        const body = {
            title, content,
        }
        axios.post("/blogs", body).then(res => {
            showSuccess("Blog created")
        }).catch(err => {
            if (err.response.status === 400 && err.response.data.errors.length > 0) {
                let error = err.response.data.errors[0]
                showError(error.msg);
                return;
            }
            showError("Something went wrong")
        })
    }

    const updateBlog = () => {
        const body = {
            title, content,
        }
        axios.put(`/blogs/${id}`, body).then(res => {
            showSuccess("Blog Updated")
        }).catch(err => {
            if (err.response.status === 400 && err.response.data.errors.length > 0) {
                let error = err.response.data.errors[0]
                showError(error.msg);
                return;
            }
            showError("Something went wrong")
        })
    }

    const showError = (errorMessage) => {
        setTimeout(() => {
            setError(null)
        }, 3000);
        setError(errorMessage)
    }

    const showSuccess = (successMessage) => {
        setTimeout(() => {
            setSuccess(null)
        }, 3000);
        setSuccess(successMessage)
    }

    return (
        <>
            {error ? <Alert type="error" message={error} /> : null}
            {success ? <Alert type="success" message={success} /> : null}

            <h1 className="text-4xl font-bold text-center mt-10">Write Your Own Blog</h1>

            <form onSubmit={saveBlogChanges} className="w-3/5 flex flex-col gap-6 m-auto mt-20">
                <Input
                    change={(event) => { setTitle(event.target.value) }}
                    placeholder="Title"
                    defaultValue={title}
                    type="text"
                    required />
                <textarea
                    defaultValue={content}
                    className="w-full py-2 placeholder:font-bold placeholder:text-xl px-2 outline-none rounded-lg bg-gray-100"
                    onChange={(event) => { setContent(event.target.value) }}
                    rows={6}
                    placeholder="Content" />
                <button
                    type="submit"
                    className=" px-10 py-4 m-auto text-lg text-black font-semibold transition bg-green-300 rounded hover:scale-110 hover:shadow-xl active:bg-green-200 focus:outline-none focus:ring">
                    {blog ? "Update" : "Create"}
                </button>
            </form>

        </>
    )
}

export default EditBlog;