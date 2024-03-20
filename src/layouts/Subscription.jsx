import { FaEnvelopeOpen, FaEnvelope } from "react-icons/fa";

const Subscription = () => {
    return (
        <section className="subscription-section">
            <div className="container">
                <div className="subscription-block">
                    <div className="head-box">
                        <p className="best-deal">
                            <span>
                                <FaEnvelopeOpen />
                            </span>
                            newsletter
                        </p>
                        <p className="uni-head head1">
                            Get weekly update
                        </p>
                    </div>
                    <form action="">
                        <div className="subscription-form">
                            <div className="form-group">
                                <input type="email" placeholder="example@gmail.com" className="form-item" />
                                <FaEnvelope className="absolute form-icon" />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-black">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Subscription;