import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaRegEdit } from "react-icons/fa";

const Addresses = () => {
    return (
        <>
            <Helmet>
                <title>eTrade | Addresses</title>
            </Helmet>
            <p className="dashboard-inner">
                The following addresses will be used on the checkout page by default
            </p>
            <div className="addresses-container">
                <div className="address-block">
                    <div className="address-title">
                        <p className="title">Shipping Address</p>
                        <Link to={""}>
                            <FaRegEdit />
                        </Link>
                    </div>
                    <div className="address-inner">
                        <p>Name: Annie Mario</p>
                        <p>Email: annie@example.com</p>
                        <p>Phone: 1234 567890</p>
                        <p>
                            7398 Smoke Ranch Road
                            Las Vegas, Nevada 89128
                        </p>
                    </div>
                </div>
                <div className="address-block">
                    <div className="address-title">
                        <p className="title">Billiing Address</p>
                        <Link to={""}>
                            <FaRegEdit />
                        </Link>
                    </div>
                    <div className="address-inner">
                        <p>Name: Annie Mario</p>
                        <p>Email: annie@example.com</p>
                        <p>Phone: 1234 567890</p>
                        <p>
                            7398 Smoke Ranch Road
                            Las Vegas, Nevada 89128
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addresses;