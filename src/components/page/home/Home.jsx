import HomeSlide from "./HomeSlide";
import HomeCategories from "./HomeCategories";
import HomeProducts from "./HomeProducts";
import Sales from "./Sales";
import Feedbacks from "./Feedbacks";
import NewArrivals from "./NewArrivals";
import PopularProducts from "./PopularProducts";
import HomeServices from "./HomeServices";

const Home = () => {
    return (
        <>
            <HomeSlide />
            <HomeCategories />
            <Sales />
            <HomeProducts />
            <Feedbacks />
            <NewArrivals />
            <PopularProducts />
            <HomeServices />
        </>
    )
}

export default Home;