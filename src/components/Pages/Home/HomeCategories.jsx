import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

// Icons
import { IoPricetagsOutline } from "react-icons/io5";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

// CSS
import 'swiper/css';
import "./css/HomeCategories.css"

const HomeCategories = () => {
    let categories = [
        {
            name: "Phones",
            image: "../assets//images/products/categories/phones.png"
        },
        {
            name: "Computers",
            image: "../assets//images/products/categories/computers.png"
        },
        {
            name: "Accessories",
            image: "../assets//images/products/categories/accessories.png"
        },
        {
            name: "Laptops",
            image: "../assets//images/products/categories/laptops.png"
        },
        {
            name: "Monitors",
            image: "../assets//images/products/categories/monitors.png"
        },
        {
            name: "Networking",
            image: "../assets//images/products/categories/network.png"
        },
        {
            name: "PC Gaming",
            image: "../assets//images/products/categories/games.png"
        },
        {
            name: "Smart watches",
            image: "../assets//images/products/categories/smart-watches.png"
        },
        {
            name: "Camera & Photo",
            image: "../assets//images/products/categories/camera.png"
        },
        {
            name: "Video games",
            image: "../assets//images/products/categories/video-games.png"
        },
        {
            name: "Sports",
            image: "../assets//images/products/categories/smart-watches.png"
        },
    ]
    return (
        <section className="categories">
            <div className="container relative">
                <div className="head-box" data-aos="fade-down">
                    <p className="best-deal">
                        <span>
                            <IoPricetagsOutline />
                        </span>
                        categories
                    </p>
                    <p className="uni-head head1">
                        Browse by Category
                    </p>
                </div>
                <div className="image-swiper-button-next">
                    <IoIosArrowRoundForward />
                </div>
                <div className="image-swiper-button-prev">
                    <IoIosArrowRoundBack />
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    breakpoints={{
                        400: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        800: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                        1000: {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },
                    }}
                    navigation={{
                        nextEl: ".image-swiper-button-next",
                        prevEl: ".image-swiper-button-prev",
                    }}
                    modules={[Navigation]}
                    className="categories-slide"
                >
                    {categories.map((category, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="category-block" data-aos="fade-down">
                                    <Link to="/products">
                                        <img src={category.image} alt={category.name} />
                                        {category.name}
                                    </Link>
                                </div>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </div>
        </section>
    )
}
export default HomeCategories;