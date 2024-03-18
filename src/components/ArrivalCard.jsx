import { Link } from "react-router-dom";
import { FaRegEye, FaRegHeart } from "react-icons/fa";

const ArrivalCard = ({ product, addCart, addWish }) => {
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

export default ArrivalCard;