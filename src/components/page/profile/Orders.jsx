import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Orders = () => {
    return (
        <>
            <Helmet>
                <title>eTrade | Orders</title>
            </Helmet>
            <div className="table-container">
                <table className="orders-table">
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#6523</td>
                            <td>September 10, 2020</td>
                            <td>Processing</td>
                            <td>$326.63 for 3 items</td>
                            <td>
                                <Link className="btn btn-white">View</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>#6523</td>
                            <td>September 10, 2020</td>
                            <td>Processing</td>
                            <td>$326.63 for 3 items</td>
                            <td>
                                <Link className="btn btn-white">View</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>#6523</td>
                            <td>September 10, 2020</td>
                            <td>Processing</td>
                            <td>$326.63 for 3 items</td>
                            <td>
                                <Link className="btn btn-white">View</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>#6523</td>
                            <td>September 10, 2020</td>
                            <td>Processing</td>
                            <td>$326.63 for 3 items</td>
                            <td>
                                <Link className="btn btn-white">View</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>#6523</td>
                            <td>September 10, 2020</td>
                            <td>Processing</td>
                            <td>$326.63 for 3 items</td>
                            <td>
                                <Link className="btn btn-white">View</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Orders;