import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";

// Layouts
import Breadcrumb from "layouts/Breadcrumb";
import { ProductContext } from "context/Products/ProductContext.jsx";

// Actions
import { addToWishlist } from "features/wishlist";
import { addToCart } from "features/cart";

// CSS
import "./css/Products.css";

//Components
import ProductCard from "components/ProductCard.jsx";

const Products = () => {
    const { products, categories, brands } = useContext(ProductContext);
    const [select, setSelect] = useState("");
    const [brand, setBrand] = useState("");
    const { id } = useParams();
    const dispatch = useDispatch();
    const addWish = (product) => {
        dispatch(addToWishlist(product))
    }
    const addCart = (product) => {
        dispatch(addToCart(product));
    }

    const filterCat = (cat) => {
        setSelect(cat);
    }
    const filterBrand = (br) => {
        setBrand(br);
    }
    const resetFilter = () => {
        setBrand("");
        setSelect("");
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
                                <div className={`category-title`}
                                >
                                    <span>Category</span>
                                </div>
                                <ul className={`category-list`}>
                                    {categories.map((category, index) => {
                                        return (
                                            <li key={index}>
                                                <label className="custom-radio">
                                                    <input type="radio" name={'category'}
                                                        onChange={() => filterCat(category)} />
                                                    <span className="checkmark"></span>
                                                    <span className="cat-name">{category}</span>
                                                </label>
                                            </li>
                                        )
                                    }
                                    )}
                                </ul>
                            </div>
                            <div className="product-category">
                                <div className={`category-title`}>
                                    <span>Brands</span>
                                </div>
                                <ul className={`category-list`}>
                                    {brands.map((brand, index) => {
                                        return (
                                            <li key={index}>
                                                <label className="custom-radio">
                                                    <input type="radio" name={'brand'}
                                                        onChange={() => filterBrand(brand)} />
                                                    <span className="checkmark"></span>
                                                    <span className="cat-name">{brand}</span>
                                                </label>
                                            </li>
                                        )
                                    }
                                    )}
                                </ul>
                            </div>
                            <button onClick={resetFilter} className="btn btn-blue btn-reset">All reset</button>
                        </div>
                        <div className="products-right products-item">
                            <div className="sort-box">
                                <p className="showing">
                                    Showing 1-12 of {products.length} results
                                </p>
                                <div className="filter-box">
                                    <select name="" id="" className="product-filter">
                                        <option value="latest">Sort by Latest</option>
                                        <option value="oldest">Sort by Oldest</option>
                                        <option value="name">Sort by Name</option>
                                        <option value="price">Sort by Price</option>
                                    </select>
                                </div>
                            </div>
                            <div className="all-products">
                                {products.filter(product => brand === "" ? true : brand === product.brand).filter(product => select === "" ? true : select === product.category).map((product, index) => (
                                    <ProductCard key={index} product={product} addWish={addWish} addCart={addCart} />
                                ))
                                }

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
export default Products;