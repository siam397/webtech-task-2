import Alert from "Components/Alert";
import Input from "Components/FormInput";
import React, { useState } from "react";
import Cookie from 'universal-cookie'
import axios from '../Helper/axios'
const cookie = new Cookie()

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState()
    const submitLoginForm = (event) => {
        event.preventDefault()
        const body = {
            email,
            password
        }
        axios.post('login', body).then(res => {
            let responseData = res['data']
            let accessToken = responseData.accessToken
            console.log(accessToken);
            cookie.set("accessToken", accessToken, { sameSite: true })
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

    return (
        <>
            {error ? <Alert type="error" message={error} /> : null}
            <form onSubmit={submitLoginForm} className="min-h-screen flex flex-col justify-center items-center m-auto w-4/6 md:w-4/12 gap-8">
                <h1 className=" font-bold text-4xl mb-8">Login</h1>
                <Input change={(event) => { setEmail(event.target.value) }} type="email" required placeholder="Email" />
                <Input change={(event) => { setPassword(event.target.value) }} type="password" required placeholder="Password" />

                <button className="font-semibold text-lg bg-indigo-500 text-white rounded-lg px-8 py-2 mt-8" type="submit" >Login</button>
                <span>Don't have an account? <a className=" text-blue-400" href="signup">Signup</a></span>
            </form>
        </>
    )
}

export default Login;