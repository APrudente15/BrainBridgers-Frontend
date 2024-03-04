import React from "react";
function SignUpForm() {
    const [state, setState] = React.useState({
        name: "",
        email: "",
        password: ""
    });
    const handleChange = evt => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    };

    const handleOnSubmit = evt => {
        evt.preventDefault();
    };

    return (
        <div className="form-container sign-up-container">
            <form onSubmit={handleOnSubmit}>
                <h1>Create Account</h1>
                <span>New User</span>
                <input
                    type="text"
                    placeholder="Name"
                />
                <input
                    type="password"
                    placeholder="Password"
                />
                <button>Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;