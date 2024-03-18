import { Link } from "react-router-dom";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
const ProductCard = ({ product, addWish, addCart }) => {
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

export default ProductCard;