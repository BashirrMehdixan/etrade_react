import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";

import { removeFromCart, increment, decrement } from "../../../features/cart";
import { IoCloseOutline } from "react-icons/io5";

import "./css/Wishlist.css"

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const rmvCart = (itemId) => {
        dispatch(removeFromCart(itemId));
    };
    return (
        <>
            <Helmet>
                <title>eTrade | Cart</title>
            </Helmet>
            <div className="wishlist-page">
                <div className="container">
                    {cartItems.length !== 0 ? (
                        <>
                            <div className="head-box flex-head">
                                <p className="uni-head head2">Your Cart</p>
                                <button className="btn clear-btn">Clear Shopping Cart</button>
                            </div>
                            <table className="wishlist-table">
                                <thead>
                                    <tr>
                                        <th className="product-remove"></th>
                                        <th className="product-img">Product</th>
                                        <th className="product-name"></th>
                                        <th className="price">Price</th>
                                        <th className="stock-status">Quantity</th>
                                        <th className="add-cart">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item, index) => (
                                        <tr key={index} className={cartItems.length !== 0 ? "border-bottom" : ""}>
                                            <td className="product-remove">
                                                <button className="btn btn-rmv" onClick={() => rmvCart(item.id)}>
                                                    <IoCloseOutline />
                                                </button>
                                            </td>
                                            <td className="product-img">
                                                <Link to={`/products/${item.id}`}>
                                                    <img src={item.thumbnail} alt={item.name} />
                                                </Link>
                                            </td>
                                            <td className="product-name">
                                                <Link to={`/products/${item.id}`}>{item.name}</Link>
                                            </td>
                                            <td className="price">${item.price}</td>
                                            <td className="product-quantity">
                                                <button className="btn btn-dec" onClick={() => dispatch(decrement({ id: item.id }))}>
                                                    -
                                                </button>
                                                <span className="count">{item.quantity}</span>
                                                <button className="btn btn-inc" onClick={() => dispatch(increment({ id: item.id }))}>
                                                    +
                                                </button>
                                            </td>
                                            <td className="total-price">
                                                ${item.total}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    ) :
                        <div className="center">
                            Your cart is empty
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
export default Cart;