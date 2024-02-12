import {Link, useLoaderData, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import toast from "react-hot-toast";

// Icons
import {IoIosArrowRoundForward, IoIosArrowRoundBack} from "react-icons/io";
import {FaShoppingBasket, FaRegEye, FaRegHeart} from "react-icons/fa";

// Css
import 'swiper/css';
import 'swiper/css/navigation';
import "./css/Arrivals.css";

// Actions
import {addToCart} from "../../../features/cart";
import {addToWishlist} from "../../../features/wishlist";

const NewArrivals = ({products}) => {
    const {id} = useParams();
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
                            <FaShoppingBasket/>
                        </span>
                        Tihs week's
                    </p>
                    <p className="uni-head head1">
                        New Arrivals
                    </p>
                </div>
                <div className="swiper-product-btn image-swiper-button-next">
                    <IoIosArrowRoundForward/>
                </div>
                <div className="swiper-product-btn image-swiper-button-prev">
                    <IoIosArrowRoundBack/>
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
                                <div className="product-item">
                                    <Link to={`/products/${product.id}`} className="product-img">
                                        <img src={product.image} alt={product.name}/>
                                    </Link>
                                    <p className={product.discount === 0 ? "none" : "discount"}>
                                        {product.discount}% Off
                                    </p>
                                    <div className="product-info">
                                        <Link to={`/products/${product.id}`}
                                              className="product-name">{product.name}</Link>
                                        <div className="product-prices">
                                            <p className={"price sale-price"}>
                                                ${product.salePrice ? product.salePrice : product.price}
                                            </p>
                                            <p className={product.salePrice === 0 ? 'none' : 'price product-price'}>
                                                ${product.salePrice}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="cart-action">
                                        <button className="btn action-btn look-btn">
                                            <FaRegEye/>
                                        </button>
                                        <button className="btn cart-btn" onClick={() => addCart(product)}>
                                            Add to Cart
                                        </button>
                                        <button className="btn action-btn wish-btn" onClick={() => addWish(product)}>
                                            <FaRegHeart/>
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </div>
        </section>
    )
}
export default NewArrivals;