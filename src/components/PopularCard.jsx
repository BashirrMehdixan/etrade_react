import { Link } from "react-router-dom"
// Icons
import { FaStar } from "react-icons/fa";
import { CiShoppingCart, CiHeart } from "react-icons/ci";

const PopularCard = ({ product, addWish, addCart }) => {
    return (
        <>
            <div className="popular-product-item">
                <div className="product-info-block">
                    <div className="product-img">
                        <img src={product.thumbnail} alt={product.title} />
                    </div>
                    <div className="info-item">
                        <div className="top-info">
                            <ul className="product-rate">
                                <li className="rate-item">
                                    <FaStar />
                                </li>
                                <li className="rate-item">
                                    <FaStar />
                                </li>
                                <li className="rate-item">
                                    <FaStar />
                                </li>
                                <li className="rate-item">
                                    <FaStar />
                                </li>
                                <li className="rate-item">
                                    <FaStar />
                                </li>
                            </ul>
                            <div className="review-item">
                                <span className="review-count">
                                    100+
                                </span>
                                Review
                            </div>
                        </div>
                        <Link to={`products/${product.id}`} className="product-name">
                            {product.title}
                        </Link>
                        <div className="prices">
                            <span className={product.discountPercentage === 0 ? "none" : "price"}>
                                ${(product.price - (product.price * (product.discountPercentage) / 100)).toFixed(2)}
                            </span>
                            <span className={product.discountPercentage === 0 ? "price" : "price old-price"}>
                                ${product.price.toFixed(2)}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="product-action">
                    <div className="p-action">
                        <button className="btn action-btn btn-cart"
                            onClick={() => addCart(product)}>
                            <CiShoppingCart />
                        </button>
                        <button className="btn action-btn wish-btn"
                            onClick={() => addWish(product)}>
                            <CiHeart />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PopularCard;