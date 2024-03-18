import { useContext } from "react";
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper/modules';

// Icons
import { FaShoppingBasket } from "react-icons/fa";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

// CSS
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

// Context
import { ProductContext } from "context/Products/ProductContext.jsx";

// Components
import HomeProductCard from "components/HomeProductCard.jsx";

// Actions
import { addToCart } from "features/cart";
import { addToWishlist } from "features/wishlist";

import "./css/HomeProducts.css";

const HomeProducts = () => {
    const { products } = useContext(ProductContext);
    const { id } = useParams();
    const dispatch = useDispatch();
    const addCart = (product) => {
        dispatch(addToCart(product));
    }
    const addWish = (product) => {
        dispatch(addToWishlist(product));
    }
    return (
        products &&
        <>
            <section className="home-products">
                <div className="container relative">
                    <div className="head-box products-head purple-head" data-aos="fade-down">
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
                                    <HomeProductCard product={product} addCart={addCart} addWish={addWish} />
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