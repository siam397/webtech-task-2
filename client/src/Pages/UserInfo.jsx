import axios from "../Helper/axios";
import React, { useEffect, useState } from "react";
import Alert from "Components/Alert";
const UserInfo = () => {

    const [id, setId] = useState()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState()
    const [success, setSuccess] = useState()

    useEffect(() => {
        axios.get("user/currentUser").then(res => {
            let user = res.data.data.user
            updateStateValues(user)
        }).catch(err => {
            console.log(err);
        })
    }, [])

    const updateStateValues = (user) => {
        setId(user.id)
        setEmail(user.email)
        setUsername(user.username)
    }

    const saveChanges = (event) => {
        event.preventDefault()
        const body = {
            username: username.length === 0 ? null : username,
            email: email.length === 0 ? null : email,
            password: password.length === 0 ? null : password
        }

        axios.put(`/user/${id}`, body).then(res => {
            console.log(res);
            showSuccess("User updated")
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
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 ">
                <div className="max-w-lg mx-auto">
                    <h1 className="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">Update Your Account</h1>

                    <p className="max-w-md mx-auto mt-4 text-center text-gray-500">
                        Gave wrong information while creating the account? Or do you just want to update given information? Well this is your place to do it.
                    </p>

                    <form onSubmit={saveChanges} className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">

                        <div>
                            <label className="text-sm font-semibold">Username</label>

                            <div className="relative mt-1">
                                <input
                                    type="text"
                                    onChange={(event) => { setUsername(event.target.value) }}
                                    defaultValue={username}
                                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Update username"
                                />

                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-semibold">Email</label>

                            <div className="relative mt-1">
                                <input
                                    type="email"
                                    onChange={(event) => { setEmail(event.target.value) }}
                                    defaultValue={email}
                                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Update email"
                                />

                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-semibold">Password</label>

                            <div className="relative mt-1">
                                <input
                                    type="password"
                                    onChange={(event) => { setPassword(event.target.value) }}
                                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Update password"

                                />

                            </div>
                        </div>

                        <button type="submit" className="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UserInfo;