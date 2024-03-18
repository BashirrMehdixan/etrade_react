import { Link } from "react-router-dom";

const AboutFeatures = () => {
    return (
        <>
            <div className="about-features-section">
                <div className="container">
                    <div className="about-features-box">
                        <div className="features-block">
                            <div className="left-side">
                                <div className="features-img">
                                    <img src="./assets/images/about/about-02.png" alt="" />
                                </div>
                            </div>
                            <div className="right-side">
                                <div className="features-content">
                                    <h5 className="mid-title">Feaures #01</h5>
                                    <h3 className="main-title">
                                        Solutions that work together
                                    </h3>
                                    <p className="inner-text">
                                        Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.
                                    </p>
                                </div>
                                <Link to="/contact">Get in touch</Link>
                            </div>
                        </div>
                        <div className="features-block">
                            <div className="left-side">
                                <div className="features-img">
                                    <img src="./assets/images/about/about-03.png" alt="" />
                                </div>
                            </div>
                            <div className="right-side">
                                <div className="features-content">
                                    <h5 className="mid-title">Feaures #02</h5>
                                    <h3 className="main-title">
                                        Solutions that work together
                                    </h3>
                                    <p className="inner-text">
                                        Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.
                                    </p>
                                </div>
                                <Link to="/contact">Get in touch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutFeatures;