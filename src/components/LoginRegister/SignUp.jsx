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
            <form className="form" onSubmit={handleOnSubmit}>
                <h1 className="h1">New User</h1>
                <input
                    className="input"
                    type="text"
                    placeholder="Name"
                />
                <input
                    className="input"
                    type="password"
                    placeholder="Password"
                />
                <button className="button">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;