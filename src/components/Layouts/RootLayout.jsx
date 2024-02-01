import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Subscription from "./Subscription";
import Offers from "./Offers";
import Footer from "./Footer";
import Preferences from "./Preferences";

const RootLayout = () => {
    const location = useLocation();
    useEffect
    (() => {
        const url = location.pathname;
        const middleNav = document.querySelector('.middle-nav');
        const topHeader = document.querySelector(".top-header");
        const campaignBlock = document.querySelector('.campaign-bg');
        if (url === "/") {
            campaignBlock.classList.add('none');
            topHeader.classList.remove("none");
            middleNav.classList.remove("bg-dark");
        } else {
            campaignBlock.classList.remove('none');
            topHeader.classList.add("none");
            middleNav.classList.add("bg-dark");
        }
    }, [location]);
    return (
        <>
            <Navbar />
            <Offers />
            <Outlet />
            <Subscription />
            <Preferences />
            <Footer />
        </>
    )
}
export default RootLayout;