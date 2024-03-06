import React from "react";
function SignInForm() {

    const handleOnSubmit = evt => {
        evt.preventDefault();
    };

    return (
        <div className="form-container sign-in-container">
            <form className="form" onSubmit={handleOnSubmit}>
                <h1 className="h1">Existing User</h1>
                <input
                    className="input"
                    type="name"
                    placeholder="name"
                />
                <input className="input"
                    type="password"
                    placeholder="Password"
                />
                <button className="button">Sign In</button>
            </form>
        </div>
    );
}

export default SignInForm;