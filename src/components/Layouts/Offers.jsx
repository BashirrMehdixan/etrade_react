import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import "./css/Offers.css";

export const Offers = () => {
    const offers = [
        {
            name: "students now get ",
            discount: 10,
        },
        {
            name: "teachers now get ",
            discount: 20,
        },
    ]
    return (
        <div className="campaign-bg relative">
            <button className="image-swiper-button-next offer-btn">
                <IoIosArrowRoundForward />
            </button>
            <button className="image-swiper-button-prev offer-btn">
                <IoIosArrowRoundBack />
            </button>
            <Swiper
                navigation={{
                    nextEl: ".image-swiper-button-next",
                    prevEl: ".image-swiper-button-prev",
                }}
                loop={true}
                modules={[Navigation]}
                className="campaign-swiper">
                {offers.map((offer, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="offer-block">
                                <p className="offer-title">
                                    {offer.name} <span>{offer.discount}</span>% off:
                                    <Link to="/products">get offer</Link>
                                </p>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Offers;