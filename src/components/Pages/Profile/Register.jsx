import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

// CSS
import "./css/SignUp.css";

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate("/profile",
            {
                replace: true
            }
        )
    }
    return (
        <>
            <Helmet>
                <title>eTrade | Sign up</title>
            </Helmet>
            <div className="signup-block">
                <div className="left-item bg-image">
                </div>
                <div className="right-item">
                    <div className="head-box flex-head">
                        <span>Already a member?</span>
                        <Link to={"/login"} className="btn cart-btn">Sign in</Link>
                    </div>
                    <div className="container">
                        <div className="head-box">
                            <p className="head2">
                                I'm New Here
                            </p>
                            <div className="subhead">Enter your detail below</div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="signup-form">
                                <div className="form-group">
                                    <label className="absolute-item">
                                        Username
                                        <span className="req">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-item"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="absolute-item">
                                        Email
                                        <span className="req">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="form-item"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="absolute-item">
                                        Password
                                        <span className="req">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        className="form-item"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-blue">
                                    Create account
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;