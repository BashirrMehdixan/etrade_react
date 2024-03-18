import { Helmet } from "react-helmet";
import Breadcrumb from "layouts/Breadcrumb.jsx";
import AboutCompany from "./AboutCompany.jsx";
import OurTeam from "./OurTeam.jsx";
import AboutFeatures from "./AboutFeatures.jsx";

const About = () => {
    return (
        <>
            <Helmet>
                <title>eTrade | About us</title>
            </Helmet>
            <Breadcrumb />
            <AboutCompany />
            <OurTeam />
            <AboutFeatures />
        </>
    )
}

export default About;