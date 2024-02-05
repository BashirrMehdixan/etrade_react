import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";
import "./css/Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-block">
                    <ul className="footer-list support-list">
                        <h6 className="footer-title">Support</h6>
                        <li className="footer-item">
                            685 Market Street, <br />Las Vegas, <br />LA 95820, United States.
                        </li>
                        <li className="footer-item">
                            <Link to="mailto:example@domain.com">example@domain.com</Link>
                        </li>
                        <li className="footer-item">
                            <Link to="tel:(+01) 850-315-5862">(+01) 850-315-5862</Link>
                        </li>
                    </ul>
                    <ul className="footer-list">
                        <h6 className="footer-title">Account</h6>
                        <li className="footer-item">
                            <Link to="/profile">My Account</Link>
                        </li>
                        <li className="footer-item">
                            <Link to="login">Login / Register</Link>
                        </li>
                        <li className="footer-item">
                            <Link to="/cart">Cart</Link>
                        </li>
                        <li className="footer-item">
                            <Link to="/wishlist">Wishlist</Link>
                        </li>
                        <li className="footer-item">
                            <Link to="/products">Shop</Link>
                        </li>
                    </ul>
                    <ul className="footer-list">
                        <h6 className="footer-title">Quick Link</h6>
                        <li className="footer-item">
                            <Link to="/">Privacy Policy</Link>
                        </li>
                        <li className="footer-item">
                            <Link to="/">Terms Of Use</Link>
                        </li>
                        <li className="footer-item">
                            <Link to="/">FAQ</Link>
                        </li>
                        <li className="footer-item">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="footer-item">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <ul className="footer-list">
                        <h6 className="footer-title">Download App</h6>
                        <li className="footer-item">
                            Save $3 With App & New User only
                        </li>
                        <li className="footer-item">
                            <div className="right-section">
                                <div className="qr-block">
                                    <img src={"../assets//images/icons/qr.png"} alt="" />
                                </div>
                                <div className="app-block">
                                    <Link>
                                        <img src={"../assets//images/icons/app-store.png"} alt="" />
                                    </Link>
                                    <Link>
                                        <img src={"../assets//images/icons/play-store.png"} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="copyright">
                    <ul className="copy-item social-network">
                        <li>
                            <Link>
                                <FaFacebookF />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <FaInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <FaTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <FaLinkedin />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <FaDiscord />
                            </Link>
                        </li>
                    </ul>
                    <p className="copy-item">
                        © 2023. All rights reserved by <Link to="https://bashirr.netlify.app">Bashirr.</Link>
                    </p>
                    <ul className="copy-item">
                        <li>Accept For</li>
                        <li>
                            <img src={"../assets//images/icons/cart-1.png"} alt="" />
                        </li>
                        <li>
                            <img src={"../assets//images/icons/cart-2.png"} alt="" />
                        </li>
                        <li>
                            <img src={"../assets//images/icons/cart-5.png"} alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer;