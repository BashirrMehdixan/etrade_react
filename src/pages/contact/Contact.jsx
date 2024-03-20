import {Helmet} from "react-helmet";
import Breadcrumb from "../../layouts/Breadcrumb";

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>eTrade | Contact With Us</title>
            </Helmet>
            <Breadcrumb/>
            <div className="container">
                <div className="contact-box">
                    <h4 className="main-head">
                        We would love to hear from you.
                    </h4>
                </div>
            </div>
        </>
    )
}

export default Contact;