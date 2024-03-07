import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignInForm({ logged, setLogged }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleOnSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/students/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            if (!response.ok) {
                throw new Error("Invalid credentials");
            }

            const data = await response.json();
            localStorage.setItem("token", data.token);
            console.log("Sign-in successful!");
            setLogged(true)
            navigate('/discover')
        } catch (error) {
            console.error("Error signing in:", error.message);
            window.alert('Invalid user credentials. Try again...')
        }
    };

    return (
        <div className="form-container sign-in-container">
            <form className="form" onSubmit={handleOnSubmit} data-testid="signin-form">
                <h1 className="h1">Existing User</h1>
                <input
                    className="input"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="button">
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default SignInForm;