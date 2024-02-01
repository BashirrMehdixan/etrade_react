import { Link } from "react-router-dom";

// Icons
import { SlLike } from "react-icons/sl";
import { GoArrowRight } from "react-icons/go";

// CSS
import "./css/HomeServices.css";
const HomeServices = () => {
    return (
        <section className="services-section">
            <div className="container">
                <div className="head-box centered-head" data-aos="fade-down">
                    <p className="best-deal">
                        <span>
                            <SlLike />
                        </span>
                        why us
                    </p>
                    <p className="uni-head head1">
                        Why People Choose Us
                    </p>
                </div>
                <div className="services-block">
                    <div className="service-item" data-aos="fade-down">
                        <div className="service-img">
                            <img src={"../assets//images/icons/service6.png"} alt="Fast & secure delivery" />
                        </div>
                        <p className="service-title">Fast & secure delivery</p>
                    </div>
                    <div className="service-item" data-aos="fade-down" data-aos-duration="1300">
                        <div className="service-img">
                            <img src={"../assets//images/icons/service7.png"} alt="100% Guarantee On Product" />
                        </div>
                        <p className="service-title">100% Guarantee On Product</p>
                    </div>
                    <div className="service-item" data-aos="fade-down" data-aos-duration="1400">
                        <div className="service-img">
                            <img src={"../assets//images/icons/service8.png"} alt="24 Hour Return Policy" />
                        </div>
                        <p className="service-title">24 Hour Return Policy</p>
                    </div>
                    <div className="service-item" data-aos="fade-down" data-aos-duration="1500">
                        <div className="service-img">
                            <img src={"../assets//images/icons/service9.png"} alt="24 Hour Return Policy" />
                        </div>
                        <p className="service-title">24 Hour Return Policy</p>
                    </div>
                    <div className="service-item" data-aos="fade-down" data-aos-duration="1600">
                        <div className="service-img">
                            <img src={"../assets//images/icons/service10.png"} alt="Next Level Pro Quality" />
                        </div>
                        <p className="service-title">Next Level Pro Quality</p>
                    </div>
                </div>
                <div className="best-offers">
                    <Link to="/products" className="best-item left-item" data-aos="fade-down">
                        <img src={"../assets//images/backgrounds/poster-01.png"} alt="" />
                        <div className="offer-content">
                            <p className="offer-head">
                                Rich sound,
                                <br />
                                for less.
                            </p>
                            <p className="subtitle">
                                Collections
                                <GoArrowRight />
                            </p>
                        </div>
                    </Link>
                    <Link to="products" className="best-item right-item" data-aos="fade-down">
                        <img src={"../assets//images/backgrounds/poster-02.png"} alt="" />
                        <div className="offer-content">
                            <p className="subtitle">50% Offer In Winter</p>
                            <p className="offer-head">
                                Get VR
                                <br />
                                reality glass
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HomeServices;