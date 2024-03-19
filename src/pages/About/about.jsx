import React from "react";
import Style from "./about.module.css"
import {Navigation, AboutHero, AboutSection, AboutTeam, Footer, NavMobile, AboutHeroMobile, AboutSectionMobile, AboutTeamMobile, FooterMobile} from "../../components"
import { useMediaQuery } from '@mui/system';
export const About = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return(
        <>
        {isMobile ? <AboutMobile/> : <AboutDesktop/>}

    </>
    )
}

const AboutDesktop = () => {
    return(
        <div>
            <Navigation/>
            <AboutHero/>
            <AboutSection/>
            <AboutTeam/>
            <Footer/>
        </div>
    )
}
const AboutMobile = () => {
    return(
        <div>
            <NavMobile/>
            <AboutHeroMobile/>
            <AboutSectionMobile/>
            <AboutTeamMobile/>
            <FooterMobile/>
        </div>
    )
}