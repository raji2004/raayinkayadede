import React from "react";
import Style from "./home.module.css";
import { style, useMediaQuery } from '@mui/system';
import {
  Navigation,
  HeroSection,
  HomeSection,
  Services,
  Advert,
  ChooseUs,
  OngoingProjects,
  UpcomingProjects,
  Footer,
  NavMobile,
  HeroMobile,
  HomeSectionMobile,
  ServicesMobile,
  AdvertMobile,
  ChooseUsMobile,
  OngoingProjectsMobile,
  UpcomingProjectsMobile,
  FooterMobile,
  CompletedProjects,
  CompletedProjectsMobile
} from "../../components";
export const Home = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <>
      {isMobile ? <HomeMobile /> : <HomeDesktop />}


    </>
  );
};

const HomeDesktop = () => {
  const globalStyles = {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  };
  return (
    <div
    className="h-screen"
    >
      <Navigation />
      <HeroSection />
      <HomeSection />
      <Services />
      <Advert />
      <ChooseUs />
      <CompletedProjects />
      <UpcomingProjects />
      <OngoingProjects />
      <Footer />
    </div>
  );

}
const HomeMobile = () => {
  return (
    <div className="h-screen">
      <NavMobile />
      <HeroMobile />
      <HomeSectionMobile />
      <ServicesMobile />
      <AdvertMobile />
      <ChooseUsMobile />
      <OngoingProjectsMobile />
      <UpcomingProjectsMobile />
      <CompletedProjectsMobile />
      <FooterMobile />
    </div>
  );
}


