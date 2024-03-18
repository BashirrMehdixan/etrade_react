import { useContext } from "react";
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Context
import { UsersContext } from "context/Users/UsersContext.jsx";
// Components
import TeamCard from 'components/TeamCard';

// Icons
import { RiTeamFill } from "react-icons/ri";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

// CSS
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import "./css/OurTeam.css";

const OurTeam = () => {
    const { users } = useContext(UsersContext);
    return (
        <>
            <section className="our-team-section bg-gray">
                <div className="container">
                    <div className="head-box purple-head">
                        <h6 className="best-deal">
                            <span>
                                <RiTeamFill />
                            </span>
                            Our Team
                        </h6>
                        <h5 className="uni-head head1">
                            Expart Management Team
                        </h5>
                    </div>
                    <div className="swiper-team-btn image-swiper-button-prev">
                        <IoIosArrowRoundBack />
                    </div>
                    <div className="swiper-team-btn image-swiper-button-next">
                        <IoIosArrowRoundForward />
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
                        modules={[Navigation]}
                        className="our-team-slide"
                    >
                        {users.length && users.map((user, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <TeamCard {...user} />
                                </SwiperSlide>

                            )
                        })}
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default OurTeam