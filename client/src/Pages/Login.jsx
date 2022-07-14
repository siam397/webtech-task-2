import Input from "Components/FormInput";
import React, { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const loginUser = () => {
        const body = {
            username,
            password
        }
        console.log(body);
    }
    return (
        <>
            <form onSubmit={loginUser} className="min-h-screen flex flex-col justify-center items-center m-auto w-4/6 md:w-4/12 gap-8">
                <h1 className=" font-bold text-4xl mb-8">Login</h1>
                <Input change={(event) => { setUsername(event.target.value) }} type="username" required placeholder="Username" />
                <Input change={(event) => { setPassword(event.target.value) }} type="password" required placeholder="Password" />

                <button className="font-semibold text-lg bg-indigo-500 text-white rounded-lg px-8 py-2 mt-8" type="submit" >Login</button>
                <span>Don't have an account? <a className=" text-blue-400" href="signup">Signup</a></span>
            </form>
        </>
    )
}

export default Login;