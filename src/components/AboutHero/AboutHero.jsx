import React from "react";
import Style from "./abouthero.module.css";
import Image from "../../assets/images/pexels-diego-pontes-2314021.jpg"
export const AboutHero = () => {
  return (
    <>
      <div className={Style.abouthero}>
        <img className={Style.image} src={Image} alt="" />
        <div className={Style.bgoverlay}></div>
        <div className={Style.abouttextcontainer}>
            <h1 className={Style.header}>ABOUT <span className={Style.span}>US</span></h1>
            <p className={Style.text}>Raayin'Kayadede Nigerian Limited is a construction company that specializes in building projects, from homes to infrastructure. They handle design, permits, materials, and project management. Safety, sustainability, and a solid reputation are essential.</p>
        </div>
      </div>
    </>
  );
};


export const AboutHeroMobile = () => {
  return (
      <>
          <div className="relative w-full h-100vh" style={{ height: "60vh" }}>
              <img className="object-cover w-full h-full" src={Image} alt="" />
              <div className="absolute inset-0 bg-black opacity-75"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <h1 className="text-white text-5xl font-bold mb-4">ABOUT <span className="text-red-500">US</span></h1>
                  <p className="text-white text-lg text-center">Raayin'Kayadede Nigerian Limited is a construction company that specializes in building projects, from homes to infrastructure. They handle design, permits, materials, and project management. Safety, sustainability, and a solid reputation are essential.</p>
              </div>
          </div>
      </>
  );
};
