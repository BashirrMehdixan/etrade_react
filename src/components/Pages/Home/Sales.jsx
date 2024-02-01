import { Link } from "react-router-dom";
// Icons

import { CiHeadphones } from "react-icons/ci";

// CSS
import "./css/Sales.css"

const Sales = () => {
    return (
        <section className="sales-section">
            <div className="container">
                <div className="bg-light">
                    <div className="sales-box">
                        <div className="sales-time">
                            <div className="sales-left">
                                <div className="head-box">
                                    <p className="best-deal">
                                        <span>
                                            <CiHeadphones />
                                        </span>
                                        don't miss!!
                                    </p>
                                    <div className="uni-head head1">
                                        Enhance Your Music Experience
                                    </div>
                                </div>
                                <div className="countdown-box">
                                    <p className="countdown-item">
                                        <span>0</span>
                                        <span>day</span>
                                    </p>
                                    <p className="countdown-item">
                                        <span>00</span>
                                        <span>hrs</span>
                                    </p>
                                    <p className="countdown-item">
                                        <span>00</span>
                                        <span>min</span>
                                    </p>
                                    <p className="countdown-item">
                                        <span>00</span>
                                        <span>sec</span>
                                    </p>
                                </div>
                                <Link to="/products" className="btn btn-blue">Check it Out!</Link>
                            </div>
                            <div className="sales-right">
                                <img src={"../assets//images/posters/poster-03.png"} alt="" />
                                <div className="wave-box">
                                    <div className="wave-item wave-1"></div>
                                    <div className="wave-item wave-2"></div>
                                    <div className="wave-item wave-3"></div>
                                    <div className="wave-item wave-4"></div>
                                    <div className="wave-item wave-5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Sales;