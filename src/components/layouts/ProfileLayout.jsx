import { useContext } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { logout, accountVerify } from "../../firebase";

// Icons
import { MdDashboard, MdOutlineShoppingBasket } from "react-icons/md";
import { FaFileDownload, FaHome } from "react-icons/fa";
import { IoIosPerson, IoIosLogOut } from "react-icons/io";


// Breadcrumb
import Breadcrumb from "./Breadcrumb";

const ProfileLayout = ({ accountData }) => {
    const { dispatch } = useContext(AuthContext);
    const { currentUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = async () => {
        if (currentUser) {
            await logout();
            dispatch({ type: 'LOGOUT', payload: null })
            navigate('/login', {
                replace: true
            })
        }
    }

    const sendMail = async () => {
        await accountVerify()
    }
    return (
        <>
            <Breadcrumb />
            {currentUser &&
                <div className="container">
                    <div className="profile-detail">
                        <div className="profile-img">
                            <img src={accountData.img} alt="Profile" />
                        </div>
                        <p className="user-name">Hello {accountData.firstname ? accountData.firstname : accountData.username}</p>
                        <p className="active-user">eTrade Member Since Jun 2023</p>
                        {
                            !currentUser.emailVerified &&
                            <button

                                onClick={sendMail}
                                className={currentUser.emailVerified ? 'btn btn-blue' : 'none'}>Verify email</button>
                        }
                    </div>
                    <div className="account-container">
                        <div className="left-item">
                            <div className="dashboard-menu">
                                <NavLink to="" className="dashboard-item">
                                    <MdDashboard />
                                    Dashboard
                                </NavLink>

                                <NavLink to="orders" className="dashboard-item">
                                    <MdOutlineShoppingBasket />
                                    Orders
                                </NavLink>

                                <NavLink to="downloads" className="dashboard-item">
                                    <FaFileDownload />
                                    Downloads
                                </NavLink>

                                <NavLink to="addresses" className="dashboard-item">
                                    <FaHome />
                                    Addresses
                                </NavLink>

                                <NavLink to="account-details" className="dashboard-item">
                                    <IoIosPerson />
                                    Account details
                                </NavLink>
                                <p className="dashboard-item" onClick={handleLogout}>
                                    <IoIosLogOut />
                                    Logout
                                </p>
                            </div>
                        </div>
                        <div className="right-item">
                            <Outlet />
                        </div>
                    </div>
                </div>
            }
        </>
    )
};

export default ProfileLayout;
