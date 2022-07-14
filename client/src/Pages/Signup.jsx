import Input from "Components/FormInput"
import React, { useState } from "react"

const Signup = () => {

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const signupUser = (event) => {
        event.preventDefault()
        const body = {
            email,
            username,
            password,
            confirmPassword
        }
        console.log(body);
    }
    return (
        <>
            <form onSubmit={signupUser} className="min-h-screen flex flex-col justify-center items-center m-auto w-4/6 md:w-4/12 gap-8">
                <h1 className=" font-bold text-4xl mt-8">Signup</h1>
                <Input change={(event) => { setUsername(event.target.value) }} type="username" required placeholder="Username" />
                <Input change={(event) => { setEmail(event.target.value) }} type="email" required placeholder="Email" />
                <Input change={(event) => { setPassword(event.target.value) }} type="password" required placeholder="Password" />
                <Input change={(event) => { setConfirmPassword(event.target.value) }} type="password" required placeholder="Confirm Password" />

                <button className="font-semibold text-lg bg-indigo-500 text-white rounded-lg px-8 py-2 mt-8" type="submit" >Signup</button>
                <span>Already have an account? <a className=" text-blue-400" href="login">Login</a></span>
            </form>

        </>
    )
}



export default Signup