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
                    <div className="left-side">
                        <h4 className="main-head">
                            We would love to hear from you.
                        </h4>
                        <p className="contact-text">
                            If you’ve got great products your making or looking to work with us then drop us a line.
                        </p>
                        <form>
                            <div className="contact-form">
                                <div className="form-group">
                                    <label className={'absolute-item'}>
                                        <span>Name</span>
                                        <span>*</span>
                                    </label>
                                    <input type="text" className={'form-control'} name={'firstname'}/>
                                </div>
                                <div className="form-group">
                                    <label className={'absolute-item'}>
                                        <span>Phone</span>
                                        <span>*</span>
                                    </label>
                                    <input type="text" className={'form-control'} name={'phone'}/>
                                </div>
                                <div className="form-group">
                                    <label className={'absolute-item'}>
                                        <span>E-mail</span>
                                        <span>*</span>
                                    </label>
                                    <input type="email" className={'form-control'} name={'email'}/>
                                </div>
                                <div className="form-group form-item">
                                    <label className="absolute-item">
                                        <span>Your message</span>
                                    </label>
                                    <textarea className={'form-control'} name="message" rows="10"></textarea>
                                </div>
                            </div>
                            <button type="submit" className={'btn btn-blue'}>Send message</button>
                        </form>
                    </div>
                    <div className="right-side">
                        <h4 className="main-head">Our Store</h4>
                        <ul className="company-info">
                            <li>
                                8212 E. Glen Creek Street Orchard Park, NY 14127, United States of America
                            </li>
                            <li>
                                Phone: <a href="tel:+123 456 7890">+123 456 7890</a>
                            </li>
                            <li>
                                Email: <a href="mailto:hello@etrade.com">Hello@etrade.com</a>
                            </li>
                        </ul>
                        <h4 className="main-head">Careers</h4>
                        <ul className="company-info">
                            <li>
                                Instead of buying six things, one that you really like.
                            </li>
                        </ul>
                        <h4 className="main-head">Opening Hours</h4>
                        <ul className="company-info">
                            <li>
                                Monday to Saturday: 9am - 10pm
                            </li>
                            <li>
                                Sundays: 10am - 6pm
                            </li>
                        </ul>
                    </div>
                    <div className="company-location">
                        <iframe
                            src="https://maps.google.com/maps?q=melbourne&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;