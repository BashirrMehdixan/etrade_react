import { useContext } from "react";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


// Actions
import { addToCart } from "features/cart.js";
import { addToWishlist } from "features/wishlist";

// Context
import { ProductContext } from "context/Products/ProductContext.jsx";

// Components
import { ArrivalCard } from "components/ProductCards.jsx";

// Icons
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { FaShoppingBasket } from "react-icons/fa";

// Css
import 'swiper/css';
import 'swiper/css/navigation';

const NewArrivals = () => {
    const { products } = useContext(ProductContext);
    const dispatch = useDispatch();
    const addCart = (product) => {
        dispatch(addToCart(product));
    }
    const addWish = (product) => {
        dispatch(addToWishlist(product));
    }
    return (
        <section className="home-arrival">
            <div className="container relative">
                <div className="head-box products-head" data-aos="fade-down">
                    <p className="best-deal">
                        <span>
                            <FaShoppingBasket />
                        </span>
                        This week's
                    </p>
                    <p className="uni-head head1">
                        New Arrivals
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
                        768: {
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
                    spaceBetween={30}
                    loop={true}
                    navigation={{
                        nextEl: ".image-swiper-button-next",
                        prevEl: ".image-swiper-button-prev",
                    }}
                    modules={[Navigation]}
                    className="new-arrival-swiper"
                >
                    {products.map((product, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <ArrivalCard product={product} addCart={addCart} addWish={addWish} />
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </div>
        </section>
    )
}
export default NewArrivals;