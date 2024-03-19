import React from "react";
import Style from "./herosection.module.css";
import Bgvideo from "../../assets/video/VID-20230922-WA0001.mp4";

export const HeroSection = () => {
  return (
    <>
      <div className={Style.herocontainer}>
        <video src={Bgvideo} autoPlay muted loop />
        <div className={Style.bgoverlay}></div>
        <div className={Style.herotextcontainer}>
          <h1>Welcome  <br />To <br />Raayin'Kayadede <br /> Nigeria Limited </h1>
        </div>
      </div>
    </>
  );
};

export const HeroMobile = () => {
  return (
    <>
      <div className={'lg:hidden herocontainer mb-4 md:mb-32'}>
        <video src={Bgvideo} autoPlay muted loop className="object-cover w-full h-1/4  md:h-[110vh] absolute z-[-1]"/>
        <div className={"bgoverlay  md:h-[110vh] w-full bg-black bg-opacity-50 absolute flex items-center justify-center flex-col"}></div>
        <div className={"herotextcontainer z-2 relative flex items-center justify-center flex-col"}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white text-center">Welcome  <br />To <br />Raayin'Kayadede <br /> Nigeria Limited </h1>
        </div>
      </div>
    </>
  );
}
