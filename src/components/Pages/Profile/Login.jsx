import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

// CSS
import "./css/SignUp.css";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                navigate("/profile");
            })
            .catch(e => {
                toast.error(e)
            })
    }
    return (
        <>
            <Helmet>
                <title>eTrade | Sign in</title>
            </Helmet>
            <div className="signup-block">
                <div className="left-item bg-image"></div>
                <div className="right-item">
                    <div className="head-box flex-head">
                        <span>Not a member?</span>
                        <Link to={"/signup"} className="btn cart-btn">Sign up now</Link>
                    </div>
                    <div className="container">
                        <div className="head-box">
                            <p className="head2">
                                Sign in to eTrade.
                            </p>
                            <div className="subhead">Enter your detail below</div>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="signup-form">
                                <div className="form-group">
                                    <label className="absolute-item">
                                        Email
                                        <span className="req">*</span>
                                    </label>
                                    <input
                                        type="mail"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-item"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="absolute-item">
                                        Password
                                        <span className="req">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="form-item"
                                    />
                                </div>
                                <button type="submit" className="btn btn-blue">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login;