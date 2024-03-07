import React, { useState } from "react"
import SignInForm from "./SignIn.jsx"
import SignUpForm from "./SignUp"

const LoginRegister = ({ logged, setLogged }) => {
    const [type, setType] = useState("signIn")

    const handleOnClick = text => {
        if (text !== type) {
            setType(text)
            return
        }
    };
    const containerClass =
        "container " + (type === "signUp" ? "right-panel-active" : "")
    return (
        <div className={containerClass} id="container">
            <SignUpForm />
            <SignInForm logged={logged} setLogged={setLogged} />
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1 className="h1">Welcome Back!</h1>
                        <p className="p">
                            Please login with your personal info
                        </p>
                        <button
                            className="button ghost"
                            id="signIn"
                            onClick={() => handleOnClick("signIn")}
                        >
                            Sign In
                        </button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1 className="h1 hf">Hello, Friend!</h1>
                        <p className="pr">Enter your personal details and start journey with us</p>
                        <br />
                        <button
                            className="button ghost "
                            id="signUp"
                            onClick={() => handleOnClick("signUp")}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginRegister