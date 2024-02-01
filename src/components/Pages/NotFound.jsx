import { Link } from "react-router-dom";
import { PiWarningCircleLight } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";

const NotFound = () => {
    return (
        <div>
            <div className="container">
                <div className="founding-box">
                    <div className="found-item">
                        <div className="head-box">
                            <div className="head-box">
                                <p className="best-deal">
                                    <span>
                                        <PiWarningCircleLight />
                                    </span>
                                    Oops! Somthing's missing.
                                </p>
                                <p className="uni-head head1">
                                    Page not found
                                </p>
                            </div>
                        </div>
                        <p className={'inner-text'}>
                            It seems like we dont find what you searched. The page you were looking for doesn't exist,
                            isn't available loading incorrectly.
                        </p>
                        <Link to={'/'} className={'btn btn-md cart-btn'}>
                            Back to home
                            <BsArrowRight />
                        </Link>
                    </div>
                    <div className="found-item">
                        <img src={"./assets/images/404.png"} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
