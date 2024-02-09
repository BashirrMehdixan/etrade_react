import HomeSlide from "./HomeSlide";
import HomeCategories from "./HomeCategories";
import HomeProducts from "./HomeProducts";
import Sales from "./Sales";
import Feedbacks from "./Feedbacks";
import NewArrivals from "./NewArrivals";
import PopularProducts from "./PopularProducts";
import HomeServices from "./HomeServices";
import {Helmet} from "react-helmet";
import {SmartphonesData} from "../../../data/databases";

const Home = ({products}) => {

    return (
        <>
            <Helmet>
                <title>eTrade | Home </title>
            </Helmet>
            <HomeSlide/>
            <HomeCategories/>
            <Sales/>
            <HomeProducts poducts={products}/>
            <Feedbacks/>
            <NewArrivals products={products}/>
            <PopularProducts products={products}/>
            <HomeServices/>
        </>
    )
}

export default Home;