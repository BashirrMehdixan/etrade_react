import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";

// Actions
import { removeFromWishlist } from "features/wishlist";
import { addToCart } from "features/cart";

// Icons
import { IoCloseOutline } from "react-icons/io5";

// CSS
import "./css/Wishlist.css"

const Wishlist = () => {
    const dispatch = useDispatch();
    const wishlistItems = useSelector((state) => state.wishlist.items);
    const rmvWishlist = (itemId) => {
        dispatch(removeFromWishlist(itemId));
    };
    const addCart = (product) => {
        dispatch(addToCart(product));
    }
    return (
        <>
            <Helmet>
                <title>eTrade | Wishlist</title>
            </Helmet>
            <div className="wishlist-page">
                <div className="container">
                    {wishlistItems.length !== 0 ? (
                        <>
                            <div className="head-box">
                                <p className="uni-head head2">My wishlist on eTrade</p>
                            </div>
                            <table className="wishlist-table">
                                <thead>
                                    <tr>
                                        <th className="product-remove"></th>
                                        <th className="product-img">Product</th>
                                        <th className="product-name"></th>
                                        <th className="price">Unite price</th>
                                        <th className="stock-status">Stock status</th>
                                        <th className="add-cart"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {wishlistItems.map((item, index) => (
                                        <tr key={index} className={wishlistItems.length !== 0 ? "border-bottom" : ""}>
                                            <td className="product-remove">
                                                <button className="btn btn-rmv" onClick={() => rmvWishlist(item.id)}>
                                                    <IoCloseOutline />
                                                </button>
                                            </td>
                                            <td className="product-img">
                                                <Link to={`/products/${item.id}`}>
                                                    <img src={item.thumbnail} alt={item.title} />
                                                </Link>
                                            </td>
                                            <td className="product-name">
                                                <Link to={`/products/${item.id}`}>{item.title}</Link>
                                            </td>
                                            <td className="price">${item.price}</td>
                                            <td className="stock-status">In stock</td>
                                            <td className="add-cart">
                                                <button className="btn btn-cart" onClick={() => addCart(item)}>
                                                    Add to Cart
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    ) : (
                        <div className="center">Your wishlist is empty</div>
                    )}

                </div>
            </div>
        </>
    )
}
export default Wishlist;