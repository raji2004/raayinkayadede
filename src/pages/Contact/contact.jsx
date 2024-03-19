import React from "react";
import Style from "./contact.module.css";
import { Navigation, ContactHero,Footer, NavMobile, ContactHeroMobile } from "../../components";
import { useMediaQuery } from '@mui/system';

export const Contact = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <>
      {isMobile ? <ContactMobile /> : <ContactDesktop />}
    </>
  );
};

const ContactDesktop = () => {
  return (
    <div>
      <Navigation />
      <ContactHero />
      <Footer />
    </div>
  );
}

const ContactMobile = () => {
  return (
    <div>
      <NavMobile />
      <ContactHeroMobile />
      <Footer />
    </div>
  );
}
