import React from "react";
import Style from "./herosection.module.css";
import Bgvideo from "../../assets/video/raayin.mp4";

export const HeroSection = () => {
  return (
    <>
      <div className={Style.herocontainer}>
        <video src={Bgvideo} autoPlay muted loop />
        
      </div>
    </>
  );
};

export const HeroMobile = () => {
  return (
    <>
      <div className={'lg:hidden herocontainer h-50vh md:mb-32'}>
        <video src={Bgvideo} autoPlay muted loop className="object-cover w-full h-full  md:h-[110vh] "/>
      </div>
    </>
  );
}
