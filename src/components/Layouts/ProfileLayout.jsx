import { Outlet, NavLink, useNavigate } from "react-router-dom";

// Icons
import { MdDashboard, MdOutlineShoppingBasket } from "react-icons/md";
import { FaFileDownload, FaHome } from "react-icons/fa";
import { IoIosPerson, IoIosLogOut } from "react-icons/io";


// Breadcrumb
import Breadcrumb from "./Breadcrumb";

const ProfileLayout = () => {
    const user = true;
    const navigate = useNavigate();

    const handleVerification = e => {
        e.preventDefault();
    }

    const handleLogout = async () => {
        navigate('/login', {
            replace: true
        })
    }
    return (
        <>
            <Breadcrumb />
            {user &&
                <div className="container">
                    <div className="profile-detail">
                        <div className="profile-img">
                            <img src={user.photoURL ? user.photoURL : './assets/images/users/author-1.png'}
                                alt="Profile" />
                        </div>
                        <p className="user-name">Hello {user.displayName}</p>
                        <p className="active-user">eTrade Member Since Jun 2023</p>
                        {
                            !user.emailVerified &&
                            <button onClick={handleVerification} className={'btn btn-blue'}>Verify email</button>
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