import { FaShoppingBasket } from "react-icons/fa"

const AboutCompany = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="about-box">
                        <div className="left-side">
                            <div className="features-img">
                                <img src={'assets/images/about/about-01.png'} alt="" />
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="head-box blue-head">
                                <h6 className="best-deal">
                                    <span>
                                        <FaShoppingBasket />
                                    </span>
                                    About store
                                </h6>
                                <h5 className="uni-head head1">
                                    Online shopping includes both buying things online.
                                </h5>
                            </div>
                            <div className="inner">
                                <p className={'inner-content'}>
                                    Salesforce B2C Commerce can help you create unified, intelligent digital commerce
                                    experiences — both online and in the store.
                                </p>
                                <div className="inner-block">
                                    <p>
                                        Empower your sales teams with industry tailored solutions that support
                                        manufacturers as they go digital, and adapt to changing markets & customers
                                        faster by creating new business.
                                    </p>
                                    <p>
                                        Salesforce B2B Commerce offers buyers the seamless, self-service experience of
                                        online shopping with all the B2B
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-preferencess">
                        <div className="about-block">
                            <div className="block-img">
                                <img src={'./assets/images/about/shape-01.png'} alt="About" />
                            </div>
                            <div className="block-content">
                                <h6 className={'block-head'}>
                                    40,000+ Happy Customer
                                </h6>
                                <p className="block-inner">
                                    Empower your sales teams with industry tailored solutions that support.
                                </p>
                            </div>
                        </div>
                        <div className="about-block">
                            <div className="block-img">
                                <img src={'./assets/images/about/shape-02.png'} alt="About" />
                            </div>
                            <div className="block-content">
                                <h6 className={'block-head'}>
                                    16 Years of Experiences
                                </h6>
                                <p className="block-inner">
                                    Empower your sales teams with industry tailored solutions that support.
                                </p>
                            </div>
                        </div>
                        <div className="about-block">
                            <div className="block-img">
                                <img src={'./assets/images/about/shape-03.png'} alt="About" />
                            </div>
                            <div className="block-content">
                                <h6 className={'block-head'}>
                                    12 Awards Won
                                </h6>
                                <p className="block-inner">
                                    Empower your sales teams with industry tailored solutions that support.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutCompany;