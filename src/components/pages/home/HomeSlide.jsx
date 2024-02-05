import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Icons
import { CiShoppingCart } from "react-icons/ci";
import { FaFire, FaStar, FaRegStar } from "react-icons/fa";

// CSS
import 'swiper/css';
import 'swiper/css/pagination';
import "./css/HomeSlide.css";


const HomeSlide = () => {
    let products = [
        {
            name: "Roco wireless headphone",
            image: "../assets//images/products/product-38.png",
            price: "49.00",
        },
        {
            name: "Smart digital watch",
            image: "../assets//images/products/product-39.png",
            price: "49.00",
        },
        {
            name: "3D™ wireless headset",
            image: "../assets//images/products/product-01.png",
            price: "30"
        },
    ]
    return (
        <section className="home-slide-section bg-gray">
            <img src={"../assets//images/backgrounds/shape-1.png"} className="shapes" alt="" />
            <img src={"../assets//images/backgrounds/shape-2.png"} className="shapes" alt="" />
            <div className="container">
                <Swiper
                    pagination={{
                        clickable: true
                    }}
                    loop={true}
                    modules={[Pagination]}
                    className="home-slider">
                    {products.map((product, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="slide-block">
                                    <div className="product-detail" data-aos="fade-up">
                                        <p className="best-deal">
                                            <span>
                                                <FaFire />
                                            </span>
                                            hot deal in this week
                                        </p>
                                        <p className="product-name">
                                            {product.name}
                                        </p>
                                        <div className="product-actions">
                                            <Link to="/products" className="btn btn-white">
                                                <CiShoppingCart />
                                                Shop now
                                            </Link>
                                            <div className="reviews">
                                                <div className="img-box">
                                                    <img src={"../assets//images/users/author-1.png"} alt="" />
                                                    <img src={"../assets//images/users/author-2.png"} alt="" />
                                                    <img src={"../assets//images/users/author-3.png"} alt="" />
                                                    <img src={"../assets//images/users/author-4.png"} alt="" />
                                                </div>
                                                <div className="review-block">
                                                    <div className="ratings">
                                                        <button className="btn btn-rating">
                                                            <FaStar />
                                                        </button>
                                                        <button className="btn btn-rating">
                                                            <FaStar />
                                                        </button>
                                                        <button className="btn btn-rating">
                                                            <FaStar />
                                                        </button>
                                                        <button className="btn btn-rating">
                                                            <FaStar />
                                                        </button>
                                                        <button className="btn btn-rating">
                                                            <FaRegStar />
                                                        </button>
                                                    </div>
                                                    <div className="review-count">
                                                        <strong>100+</strong> Review
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-img" data-aos="fade-down">
                                        <img src={product.image} alt={product.name} />
                                        <p className="product-price">
                                            <span>From</span>
                                            <span>${product.price}</span>
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper >
            </div>
        </section>
    )
}
export default HomeSlide;