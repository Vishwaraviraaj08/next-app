'use client';
import React from 'react';
import './login.css'
import {useState} from "react";

function Form({ option }) {

    return (
        <form method="POST" action={"/" + (option === 1 ? "sign-in" : "sign-up")} className="account-form" onSubmit={(evt) => evt.preventDefault()}>
            <div
                className={
                    "account-form-fields " +
                    (option === 1 ? "sign-in" : "sign-up" )
                }
            >
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    required
                />
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    required={option === 1 || option === 2}
                />
                <input
                    id="repeat-password"
                    name="repeat-password"
                    type="password"
                    placeholder="Repeat password"
                    required={option === 2}
                    disabled={option === 1}
                />
            </div>
            <button className="btn-submit-form" type="submit">
                {option === 1 ? "Sign in" : "Sign up" }
            </button>
        </form>
    );
}

function LoginPage() {
    const [option, setOption] = useState(1);

    return (
        <div className="container bg-black">
            <header className="text-center mt-5">
                <div
                    className={
                        "header-headings " +
                        (option === 1 ? "sign-in" : option === 2 ? "sign-up" : "forgot")
                    }
                >
                    <span>Sign in to your account</span>
                    <span>Create an account</span>
                </div>
            </header>
            <ul className="options d-flex justify-content-center">
                <li className={option === 1 ? "active" : ""} onClick={() => setOption(1)}>
                    Sign in
                </li>
                <li className={option === 2 ? "active" : ""} onClick={() => setOption(2)}>
                    Sign up
                </li>
            </ul>
            <Form option={option} />
        </div>
    );
}


export default LoginPage;

