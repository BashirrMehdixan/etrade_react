import { Link, useParams, useLoaderData } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper/modules';
import toast from "react-hot-toast";
// Icons
import { FaStar } from "react-icons/fa6";
import { FaRegEye, FaRegHeart, FaShoppingBasket } from "react-icons/fa";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

// CSS
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import "./css/HomeProducts.css"

// Actions
import { addToCart } from "../../../features/cart";
import { addToWishlist } from "../../../features/wishlist";

const HomeProducts = () => {
    const { id } = useParams();
    let products = useLoaderData().products;
    const dispatch = useDispatch();
    const addCart = (product) => {
        dispatch(addToCart(product));
    }
    const addWish = (product) => {
        dispatch(addToWishlist(product));
    }
    return (
        <>
            <section className="home-products">
                <div className="container relative">
                    <div className="head-box products-head" data-aos="fade-down">
                        <p className="best-deal">
                            <span>
                                <FaShoppingBasket />
                            </span>
                            Our products
                        </p>
                        <p className="uni-head head1">
                            Explore our Products
                        </p>
                    </div>
                    <div className="swiper-product-btn image-swiper-button-next">
                        <IoIosArrowRoundForward />
                    </div>
                    <div className="swiper-product-btn image-swiper-button-prev">
                        <IoIosArrowRoundBack />
                    </div>
                    <Swiper
                        slidesPerView={1}
                        breakpoints={{
                            767: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            }
                        }}
                        spaceBetween={20}
                        navigation={{
                            nextEl: ".image-swiper-button-next",
                            prevEl: ".image-swiper-button-prev",
                        }}
                        loop={true}
                        modules={[Grid, Navigation]}
                        className="home-product-slide"
                    >
                        {products.map((product, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="product-item hover-product" data-aos="flip-up">
                                        <Link to={`products/${product.id}`} className="product-img">
                                            <img src={product.image} alt={product.name} />
                                        </Link>
                                        <p className={product.discount === 0 ? "none" : "discount"}>{product.discount}%
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
                                                {product.name}
                                            </Link>
                                            <div className="product-prices">
                                                <p className={product.salePrice === 0 ? "none" : "price sale-price"}>
                                                    ${product.salePrice}
                                                </p>
                                                <p className={product.salePrice === 0 ? "price" : "price product-price"}>
                                                    ${product.price}
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
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                    <div className="btn-more">
                        <Link to="/products">view all products</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
export default HomeProducts;