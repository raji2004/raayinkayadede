import React from "react";
import Style from "./home.module.css";
import { useMediaQuery } from '@mui/system';
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
  FooterMobile
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
  return (
    <div>
      <Navigation />
      <HeroSection />
      <HomeSection />
      <Services />
      <Advert />
      <ChooseUs />
      <OngoingProjects />
      <UpcomingProjects />
      <Footer />
    </div>
  );

}
const HomeMobile = () => {
  return (
    <div>
      <NavMobile />
      <HeroMobile />
      <HomeSectionMobile />
      <ServicesMobile />
      <AdvertMobile />
      <ChooseUsMobile />
      <OngoingProjectsMobile />
      <UpcomingProjectsMobile />
      <FooterMobile />
    </div>
  );
}


