import { Link } from "react-router-dom";
import { FaRegEye, FaRegHeart, FaStar } from "react-icons/fa";
import { CiHeart, CiShoppingCart } from "react-icons/ci";

export const ArrivalCard = ({ product, addCart, addWish }) => {
    return (
        <>
            <div className="product-item">
                <Link to={`/products/${product.id}`} className="product-img">
                    <img src={product.thumbnail} alt={product.title} />
                </Link>
                <p className={product.discountPercentage === 0 ? "none" : "discount"}>
                    {product.discountPercentage.toFixed(0)}% Off
                </p>
                <div className="product-info">
                    <Link to={`/products/${product.id}`}
                        className="product-name">{product.title}</Link>
                    <div className="product-prices">
                        <p className={"price sale-price"}>
                            ${product.discountPercentage ?
                                (product.price - (product.price * (product.discountPercentage) / 100)).toFixed(2) :
                                product.price.toFixed(2)
                            }
                        </p>
                        <p className={product.discountPercentage === 0 ? 'none' : 'price product-price'}>
                            ${(product.price - (product.price * (product.discountPercentage) / 100)).toFixed(2)}
                        </p>
                    </div>
                </div>
                <div className="cart-action">
                    <button className="btn action-btn look-btn">
                        <FaRegEye />
                    </button>
                    <button className="btn cart-btn" onClick={() => addCart(product)}>
                        Add to Cart
                    </button>
                    <button className="btn action-btn wish-btn" onClick={() => addWish(product)}>
                        <FaRegHeart />
                    </button>
                </div>
            </div>
        </>
    )
}

export const HomeProductCard = ({ product, addWish, addCart }) => {
    return (
        <>
            <div className="product-item hover-product" data-aos="flip-up">
                <Link to={`products/${product.id}`} className="product-img">
                    <img src={product.thumbnail} alt={product.title} />
                </Link>
                <p className={product.discountPercentage === 0 ? "none" : "discount"}>
                    {product.discountPercentage.toFixed(0)}%
                    Off</p>
                <div className="product-info">
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
                    <Link to={`/products/${product.id}`} className="product-name">
                        {product.title}
                    </Link>
                    <div className="product-prices">
                        <p className={product.discountPercentage === 0 ? "none" : "price sale-price"}>
                            ${(product.price - (product.price * (product.discountPercentage) / 100)).toFixed(2)}
                        </p>
                        <p className={product.discountPercentage === 0 ? "price" : "price product-price"}>
                            ${product.price.toFixed(2)}
                        </p>
                    </div>
                </div>
                <div className="cart-action">
                    <button className="btn action-btn look-btn">
                        <FaRegEye />
                    </button>
                    <button className="btn cart-btn" onClick={() => addCart(product)}>
                        Add to Cart
                    </button>
                    <button className="btn action-btn wish-btn"
                        onClick={() => addWish(product)}>
                        <FaRegHeart />
                    </button>
                </div>
            </div>
        </>
    )
}

export const PopularCard = ({ product, addWish, addCart }) => {
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

export const ProductCard = ({ product, addWish, addCart }) => {
    return (
        <>
            <div className="product-item hover-product"
                id={`product-${product.id}`} data-aos="flip-right">
                <Link to={product.id.toString()} className="product-img">
                    <img src={product.thumbnail} alt={product.title} />
                </Link>
                <p className={product.discountPercentage === 0 ? "none" : "discount"}>{product.discountPercentage.toFixed(0)}%
                    Off</p>
                <div className="product-info">
                    <Link to={product.id.toString()}
                        className="product-name">{product.title}
                    </Link>
                    <div className="product-prices">
                        <p className={product.discountPercentage === 0 ? "none" : "price"}>${(product.price - (product.price * (product.discountPercentage) / 100)).toFixed(2)}</p>
                        <p className={product.salePrice === 0 ? "price" : "price product-price"}>${product.price.toFixed(2)}</p>
                    </div>
                </div>
                <div className="cart-action">
                    <button className="btn action-btn look-btn">
                        <FaRegEye />
                    </button>
                    <button className="btn cart-btn" onClick={() => addCart(product)}>
                        Add to Cart
                    </button>
                    <button className="btn action-btn wish-btn"
                        onClick={() => addWish(product)}>
                        <FaRegHeart />
                    </button>
                </div>
            </div>
        </>
    )
}