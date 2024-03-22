import React ,{useEffect}from "react";
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
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
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
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
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