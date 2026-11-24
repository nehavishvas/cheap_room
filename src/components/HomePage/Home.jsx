import React from "react";
import Header from "../Header";
import FooterCopyRight from "../FooterCopyRight";
import Footer from "../Footer";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import RoomRecommendation from "./TopRecommend";
import AccommodationPromotions from "./AccomodationPromotion";
import TopDestinations from "./TopDestination";

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <AboutSection />
            <RoomRecommendation />
            <AccommodationPromotions />
            <TopDestinations />
            <Footer />
            <FooterCopyRight />

        </>
    )
}
export default Home;