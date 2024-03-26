import {useContext} from "react";
import {Link, useParams} from "react-router-dom";
// Context
import {PostsContext} from "context/Posts/PostsContext";
import {UsersContext} from "context/Users/UsersContext";
// Swiper
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
// Icons
import {FaFacebookF, FaTwitter, FaInstagram, FaDiscord, FaLinkedinIn, FaBell} from "react-icons/fa";
import {IoIosArrowRoundBack, IoIosArrowRoundForward} from "react-icons/io";
// Components
import {RelatedPostCard} from "components/BlogCards";

const BlogDetail = () => {
    const {id} = useParams();
    const {posts} = useContext(PostsContext);
    const post = posts.find(post => post.id === parseInt(id));

    const {users} = useContext(UsersContext);
    const authUser = users.find(user => user.id === post.userId);
    return (
        post && authUser &&
        <>
            <section id="blog-detail " className='blog-detail-section'>
                <div className="container">
                    <div className="post-img">
                        <img src={'../assets/images/blog/blog-single.jpg'} alt=""/>
                    </div>
                    <div className="blog-detail-container">
                        <div className="left-side">
                            <h6 className="small-head">
                                Share on:
                            </h6>
                            <ul className="social-link">
                                <li>
                                    <Link to={"https://facebook.com"} target="_blank">
                                        <FaFacebookF/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"https://instagram.com"} target="_blank">
                                        <FaInstagram/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"https://twitter.com"} target="_blank">
                                        <FaTwitter/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"https://linkedin.com"} target="_blank">
                                        <FaLinkedinIn/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"https://discord.com"} target="_blank">
                                        <FaDiscord/>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="middle-side">
                            <h3 className="blog-title">
                                {post.title}
                            </h3>
                            <div className="post-auth">
                                <div className="auth-img">
                                    <img src={authUser.image} alt={authUser.name}/>
                                </div>
                                <div className="post-info">
                                    <h5 className="auth-name">
                                        {authUser.firstName} {authUser.lastName}
                                    </h5>
                                    <div className="post-date">
                                        Mar 25, 2022
                                    </div>
                                </div>
                            </div>

                            <div className="post-body">
                                <p>
                                    Habitasse per feugiat aliquam luctus accumsan curae, suspendisse aliquam taciti eros
                                    neque, aenean sit iaculis risus commodo ut sociosqu rhoncus potenti tristique
                                    placerat sit tempus, duis erat feugiat cras sociosqu porta ut praesent, fermentum
                                    donec convallis tellus vulputate duis nibh rhoncus phasellus dui massa nisl.
                                </p>
                                <p>

                                    Whether you’re kicking off a new campaign or looking to revamp your strategy, the
                                    lessons you’ll learn will be universal to all small business email marketing.
                                </p>
                                <p>
                                    MailChimp is an email marketing service provider founded in 2001. It has 9 million
                                    users that collectively send over 15 billion emails through the service each month.
                                </p>
                                <p>
                                    Email is a crucial channel in any marketing mix, and never has this been truer than
                                    for today’s entrepreneur. Curious what to say? How to say it? How often to hit
                                    “send”? Each bite-sized lesson delivers core concepts, guiding questions, and
                                    tactical how-to resources.
                                </p>
                                <p>
                                    Whether you’re kicking off a new campaign or looking to revamp your strategy, the
                                    lessons you’ll learn will be universal to all small business email marketing
                                </p>
                                <div className="blog-list-item">
                                    <h3 className="blog-title">
                                        <Link to={post.id.toString()}>
                                            “An oral history of the AIM away message (by the people who were there)”
                                        </Link>
                                    </h3>
                                    <div className="post-auth">
                                        <div className="auth-img">
                                            <img src={authUser.image} alt={authUser.name}/>
                                        </div>
                                        <div className="post-info">
                                            <h5 className="auth-name">
                                                {authUser.firstName} {authUser.lastName}
                                            </h5>
                                            <div className="post-date">
                                                Mar 25, 2022
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={post.id.toString()} className={'btn btn-blue'}>Read more</Link>
                                </div>

                                <h3 className="blog-title">
                                    Habitasse per feugiat aliquam luctus accumsan curae
                                </h3>
                                <p>
                                    Email is a crucial channel in any marketing mix, and never has this been truer than
                                    for today’s entrepreneur. Curious what to say? How to say it? How often to hit
                                    “send”? Each bite-sized lesson delivers core concepts, guiding questions, and
                                    tactical how-to resources.
                                </p>
                                <div className="img-box">
                                    <div className="single-img">
                                        <img src={"../assets/images/blog/blog-img.png"} alt=""/>
                                    </div>
                                    <div className="single-img">
                                        <img src={"../assets/images/blog/blog-02.png"} alt=""/>
                                    </div>
                                </div>
                                <p>
                                    December 03, 2020 - The Nike Air Zoom SuperRep 2 is designed for high-intensity
                                    interval training (HIIT) in group classes or solo sessions. This second version
                                    comes with two updated features for a better fit: a fully adjustable, burrito-style
                                    tongue and a roomier forefoot.
                                </p>
                                <p>
                                    The SuperRep 2 evolves an important facet of modern fitness — training as sport —
                                    and the idea that it's deserving of footwear designed to support the performance
                                    needs specific to these movements. That’s why the shoe keeps the tech from the
                                    original SuperRep, like the forefoot Zoom Air units for pop on jumps, a reinforced
                                    rand to brace against lateral bounds and a flexible “burpee break” for everyone’s
                                    favorite total-body punisher.
                                </p>
                                <p>
                                    The Nike Air Zoom SuperRep 2 releases December 10 in China, December 26 throughout
                                    EMEA and January 4 globally.
                                </p>
                                <p>
                                    To download hi-res images, <Link to={"/"}>click here.</Link>
                                </p>
                            </div>
                        </div>
                        <div className="right-side">

                        </div>

                    </div>

                    <div className="related-container">
                        <div className="head-box products-head">
                            <p className="best-deal purple-head">
                        <span>
                            <FaBell/>
                        </span>
                                Hot News
                            </p>
                            <p className="uni-head head1">
                                Related Blog
                            </p>
                        </div>
                        <div className="swiper-product-btn image-swiper-button-next">
                            <IoIosArrowRoundForward/>
                        </div>
                        <div className="swiper-product-btn image-swiper-button-prev">
                            <IoIosArrowRoundBack/>
                        </div>
                        <Swiper
                            slidesPerView={3}
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
                            spaceBetween={30}
                            navigation={{
                                nextEl: ".image-swiper-button-next",
                                prevEl: ".image-swiper-button-prev",
                            }}
                            loop={true}
                            modules={[Navigation]}
                            className="related-slide"
                        >
                            {posts.map((post, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <RelatedPostCard post={post}/>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogDetail;