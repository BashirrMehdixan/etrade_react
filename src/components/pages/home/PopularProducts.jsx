import {Link, useParams, useLoaderData} from "react-router-dom";
import {useDispatch} from "react-redux";
import toast from "react-hot-toast";

// Icons
import {FaStar} from "react-icons/fa";
import {CiShoppingCart, CiHeart} from "react-icons/ci";


// Actions 
import {addToCart} from "../../../features/cart";
import {addToWishlist} from "../../../features/wishlist";

// CSS
import "./css/PopularProducts.css";

const PopularProducts = ({products}) => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const addCart = (product) => {
        dispatch(addToCart(product));
    }
    const addWish = (product) => {
        dispatch(addToWishlist(product));
    }
    return (
        <section className="popular-products">
            <div className="container">
                <div className="head-box products-head centered-head" data-aos="fade-down">
                    <p className="best-deal">
                        <span>
                            <FaStar/>
                        </span>
                        most sold
                    </p>
                    <p className="uni-head head1">
                        Most Sold in a eTrade Store
                    </p>
                </div>
                <div className="popular-products-block">
                    {products.map((product, index) => {
                        return (
                            <div className="popular-product-item" key={index}>
                                <div className="product-info-block">
                                    <div className="product-img">
                                        <img src={product.image} alt={product.name}/>
                                    </div>
                                    <div className="info-item">
                                        <div className="top-info">
                                            <ul className="product-rate">
                                                <li className="rate-item">
                                                    <FaStar/>
                                                </li>
                                                <li className="rate-item">
                                                    <FaStar/>
                                                </li>
                                                <li className="rate-item">
                                                    <FaStar/>
                                                </li>
                                                <li className="rate-item">
                                                    <FaStar/>
                                                </li>
                                                <li className="rate-item">
                                                    <FaStar/>
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
                                            {product.name}
                                        </Link>
                                        <div className="prices">
                                            <span className={product.salePrice === 0 ? "none" : "price"}>
                                                ${product.salePrice}
                                            </span>
                                            <span className={product.salePrice === 0 ? "price" : "price old-price"}>
                                                ${product.price}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-action">
                                    <div className="p-action">
                                        <button className="btn action-btn btn-cart"
                                                onClick={() => addCart(product)}>
                                            <CiShoppingCart/>
                                        </button>
                                        <button className="btn action-btn wish-btn"
                                                onClick={() => addWish(product)}>
                                            <CiHeart/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default PopularProducts;