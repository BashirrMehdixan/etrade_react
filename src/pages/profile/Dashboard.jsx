import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "context/Auth/AuthContext";
import { Helmet } from "react-helmet";
import { logout } from "store/firebase";

// CSS 
import "./css/Dashboard.css";

const Dashboard = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);
    const handleLogout = async () => {
        if (dispatch) {
            await logout();
            dispatch({ type: "LOGOUT", payload: null });
            navigate('/login', {
                replace: true
            });
        }
    }
    return (
        <>
            <Helmet>
                <title>eTrade | Dashboard </title>
            </Helmet>
            <p className="logout-text">
                Hello Annie (not Annie?
                <button type="submit" onClick={handleLogout} className="btn">Log out</button>)
            </p>
            <p className="dashboard-inner">
                From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
            </p>
        </>
    )
}

export default Dashboard;