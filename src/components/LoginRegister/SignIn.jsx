import React from "react";
function SignInForm() {

    const handleOnSubmit = evt => {
        evt.preventDefault();
    };

    return (
        <div className="form-container sign-in-container">
            <form onSubmit={handleOnSubmit}>
                <h1>Sign in</h1>
                <span>Existing User</span>
                <input
                    type="name"
                    placeholder="name"
                />
                <input
                    type="password"
                    placeholder="Password"
                />
                <button>Sign In</button>
            </form>
        </div>
    );
}

export default SignInForm;