import React from "react";
import { useLoaderData, Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message");
}


export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")

    try {
        const data = await loginUser({ email, password })
        localStorage.setItem("loggedin", true)
        let response = redirect("/host")
        response.body = true
        return response
    } catch (err) {
        return err.message
    }
}

export default function Login() {
    const message = useLoaderData()
    const errorMessage = useActionData()
    const navigation = useNavigation().state



    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h3 className="red">{message}</h3>}
            {errorMessage && <h3 className="red" >{errorMessage}</h3>}

            <Form
                method="post"
                className="login-form"
                replace>
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button
                    disabled={navigation === "submitting"}
                >
                    {navigation === "submitting" ? "Logging in" : "Login"}
                </button>
            </Form>
        </div>
    )
}