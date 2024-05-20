import React from "react";
import Style from "./home.module.css";
import { boxSizing, padding, style, useMediaQuery } from '@mui/system';
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
      <OngoingProjects />
      <UpcomingProjects />
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


