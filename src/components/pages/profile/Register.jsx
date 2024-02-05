import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { doc, collection, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { signup, db } from "../../../firebase";
import { AuthContext } from "../../../context/AuthContext";

// CSS
import "./css/SignUp.css";

const Register = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext)
    const [data, setData] = useState({});

    const handleInput = e => {
        const id = e.target.id;
        const value = e.target.value;
        setData({ ...data, [id]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await signup(data.email, data.password);
        const userDocRef = doc(collection(db, 'users'), user.uid);

        await setDoc(userDocRef, {
            ...data,
            uid: user.uid,
            firstname: null,
            lastname: null,
            img: "./assets/images/users/author-1.png",
            country: null,
            timeStamp: serverTimestamp()
        });

        if (user) {
            dispatch({ type: "LOGIN", payload: user })
            navigate("/profile",
                {
                    replace: true
                })
        }
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
                                        id="username"
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="absolute-item">
                                        Email
                                        <span className="req">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-item"
                                        onChange={handleInput}
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
                                        id="password"
                                        onChange={handleInput}
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