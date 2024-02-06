import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoPerson } from "react-icons/go";
import "./css/Navbar.css";

const Navbar = () => {
    const cartCount = useSelector((state) => state.cart.count);
    const [isActive, setActive] = useState(false);

    useEffect(() => {
        const navbar = document.querySelector('.navbar');
        const overlay = document.querySelector('.overlay');
        if (navbar && overlay) {
            if (isActive) {
                navbar.classList.add('transform');
                overlay.classList.add('transform');
            } else {
                navbar.classList.remove('transform');
                overlay.classList.remove('transform');
            }
        }
    }, [isActive]);

    const drpaction = () => {
        setActive(!isActive);
    };
    const closeMenu = () => {
        setActive(false);
    };
    return (
        <>
            <header className="main-header">
                <div className="top-header">
                    Open Doors To A World Of Fashion <Link to="/">Discover More</Link>
                </div>
                <div className="bg-gray">
                    <div className="container">
                        <div className="middle-nav">
                            <div className="middle-left">
                                <div className="lang-box">
                                    <span className="active-lang">
                                        English
                                        <IoIosArrowDown />
                                    </span>
                                    <ul className="lang-section">
                                        <li>
                                            <Link to="/">English</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Arabic</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Spanish</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="lang-box">
                                    <span className="active-lang">
                                        USD
                                        <IoIosArrowDown />
                                    </span>
                                    <ul className="lang-section">
                                        <li>
                                            <Link to="/">USD</Link>
                                        </li>
                                        <li>
                                            <Link to="/">AUD</Link>
                                        </li>
                                        <li>
                                            <Link to="/">EUR</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="middle-right">
                                <Link to="/">Help</Link>
                                <Link to="signup">Join us</Link>
                                <Link to="login">sign in</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="main-nav">
                        <div className="overlay" onClick={closeMenu}></div>
                        <NavLink to="/" className="navbar-brand">
                            <img src={'../assets//images/logo/logo.png'} alt="Logo" />
                        </NavLink>
                        <ul className="navbar">
                            <li className="nav-item">
                                <Link to="/" className="navbar-brand">
                                    <img src={'../assets//images/logo/logo.png'} alt="Logo" />
                                </Link>
                                <button className="btn btn-close" onClick={closeMenu}>
                                    <IoClose />
                                </button>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="products">Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages">Pages</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about-us">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="right-nav">
                            <button className="btn">
                                <CiSearch />
                            </button>
                            <Link to="/wishlist">
                                <CiHeart />
                            </Link>
                            <Link to="/cart">
                                <CiShoppingCart />
                                <span className="item-count">{cartCount}</span>
                            </Link>
                            <Link to={"/profile"}>
                                <GoPerson />
                            </Link>
                            <button className="btn drp-btn" onClick={drpaction}>
                                <RxHamburgerMenu />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Navbar;