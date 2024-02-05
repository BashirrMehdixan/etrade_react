import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

// Layouts
import Breadcrumb from "../../layout/Breadcrumb";

// Icons
import { FaRegEye, FaRegHeart } from "react-icons/fa";

// Actions
import { addToWishlist } from "../../../features/wishlist";
import { addToCart } from "../../../features/cart";

// CSS
import "./css/AllProducts.css";

const AllProducts = () => {
    const { id } = useParams();
    const [openCategories, setOpenCategories] = useState({});
    const dispatch = useDispatch();
    const products = useLoaderData();
    const catSlide = (category) => {
        setOpenCategories(prevState => ({
            ...prevState,
            [category]: !prevState[category]
        }));
    };

    const uniqueStorages = Array.from(new Set(products.map(product => product.storage)));
    const uniqueModels = Array.from(new Set(products.map(product => product.brand)));
    const uniqueRams = Array.from(new Set(products.map(product => product.ram)));
    const uniqueColors = Array.from(new Set(products.map(product => product.colors)));
    const addToWish = (product) => {
        dispatch(addToWishlist(product))
        toast.success(`${product.name} added to wishlist!`);
    }
    const addCart = (product) => {
        dispatch(addToCart(product));
        toast.success(`${product.name} added to cart!`);
    }
    return (
        <>
            <Helmet>
                <title>All Products | eTrade</title>
            </Helmet>
            <Breadcrumb products={products} />
            <section className="products-section">
                <div className="container">
                    <div className="products-block">
                        <div className="products-left products-item">
                            <div className="product-category">
                                <div className={`category-title ${openCategories['Model'] ? 'active' : ''}`}
                                    onClick={() => catSlide('Model')}>
                                    <span>Model</span>
                                </div>
                                <ul className={`category-list ${openCategories['Model'] ? 'open' : ''}`}>
                                    {uniqueModels.map((model, index) => (
                                        <li key={index}>
                                            <label className="custom-radio">
                                                <input type="radio" name="brand" />
                                                <span className="checkmark"></span>
                                                <span className="cat-name">{model}</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="product-category">
                                <div className={`category-title ${openCategories['Storage'] ? 'active' : ''}`}
                                    onClick={() => catSlide('Storage')}>
                                    <span>Storage</span>
                                </div>
                                <ul className={`category-list ${openCategories['Storage'] ? 'open' : ''}`}>
                                    {uniqueStorages.map((storage, index) => (
                                        <li key={index}>
                                            <label className="custom-radio">
                                                <input type="radio" name="storage" />
                                                <span className="checkmark"></span>
                                                <span className="cat-name">{storage}</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="product-category">
                                <div className={`category-title ${openCategories['RAM'] ? 'active' : ''}`}
                                    onClick={() => catSlide('RAM')}>
                                    <span>RAM</span>
                                </div>
                                <ul className={`category-list ${openCategories['RAM'] ? 'open' : ''}`}>
                                    {uniqueRams.map((ram, index) => (
                                        <li key={index}>
                                            <label className="custom-radio">
                                                <input type="radio" name="ram" />
                                                <span className="checkmark"></span>
                                                <span className="cat-name">{ram}</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="product-category">
                                <div className={`category-title ${openCategories['Colors'] ? 'active' : ''}`}
                                    onClick={() => catSlide('Colors')}>
                                    <span>Colors</span>
                                </div>
                                <ul className={`category-list ${openCategories['Colors'] ? 'open' : ''}`}>
                                    {uniqueColors.map((color, index) => (
                                        <li key={index}>
                                            <label className="custom-radio">
                                                <input type="radio" name="color" />
                                                <span className="checkmark"></span>
                                                <span className="cat-name">{color}</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button className="btn btn-blue btn-reset">All reset</button>
                        </div>
                        <div className="products-right products-item">
                            <div className="sort-box">
                                <p className="showing">
                                    Showing 1-12 of {products.length} results
                                </p>
                                <div className="filter-box">
                                    <select name="" id="" className="product-filter">
                                        <option value="latest">Short by Latest</option>
                                        <option value="oldest">Short by Oldest</option>
                                        <option value="name">Short by Name</option>
                                        <option value="price">Short by Price</option>
                                    </select>
                                </div>
                            </div>
                            <div className="all-products">
                                {products.map((product, index) => (
                                    <div className="product-item hover-product" key={index}
                                        id={`product-${product.id}`} data-aos="flip-right">
                                        <Link to={product.id.toString()} className="product-img">
                                            <img src={product.image} alt={product.name} />
                                        </Link>
                                        <p className={product.discount === 0 ? "none" : "discount"}>{product.discount}%
                                            Off</p>
                                        <div className="product-info">
                                            <Link to={product.id.toString()}
                                                className="product-name">{product.name}
                                            </Link>
                                            <div className="product-prices">
                                                <p className={product.salePrice === 0 ? "none" : "price"}>${product.salePrice}</p>
                                                <p className={product.salePrice === 0 ? "price" : "price product-price"}>${product.price}</p>
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
                                                onClick={() => addToWish(product)}>
                                                <FaRegHeart />
                                            </button>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            <div className="btn-more">
                                <Link to="/products" className="btn btn-more">Load more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export const Products = async () => {
    const res = await fetch('https://databases-0ekr.onrender.com/smartphone');
    return res.json();
}
export default AllProducts;