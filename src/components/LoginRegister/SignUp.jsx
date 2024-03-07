import React from "react";
function SignUpForm() {

    return (
        <div className="form-container sign-up-container">
            <form className="form" data-testid="signup-form">
                <h1 className="h1">New User</h1>
                <input
                    className="input"
                    type="text"
                    placeholder="Name"
                    name="name"
                />
                <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    name="password"
                />
                <button className="button">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;