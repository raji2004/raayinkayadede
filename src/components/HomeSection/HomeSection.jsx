import React from "react";
import Style from "./homesection.module.css";
import Image1 from "../../assets/images/IMG-20230915-WA0009.jpg";

export const HomeSection = () => {
  return (
    <section id="about-us">
      <section className={Style.whoweare}>
        <div className={Style.cardcontainer}>
          <div className={Style.card1}>
            <div className={Style.square}></div>
            <img src={Image1} alt="photo" className={Style.cardimg} />
          </div>
          <div className={Style.card2}>
            <h1 className={Style.headertext}>Who We Are</h1>

            <p className={Style.sectiontext}>
              RAAYIN'KAYADEDE is a real estate firm which venture in building &
              civil engineering construction, facility mangement, infrastructure
              development and investments. We have strong commitment to bespoke
              designs and quality workmanship, dedicated to creating intriguing
              interiors witn high quality standards.
            </p>

            <p className={Style.sectiontext}>
              Our Team of multi-disciplined, talented and dedicated design
              experts provide comprehensive range of services which includes
              architectural and engineering designs, interior design, facility
              management, procurement and project management services for
              residential, commercial and hospitality projects. <br />
              At RAAYIN'KAYADEDE, we approach each project with a collaborative
              and honest sensibility as we believe in expressing our client's
              brand identity through design.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};
export const HomeSectionMobile = () => {
  return (
    <>
      <section className={"w-full flex justify-center items-center content-center flex-wrap mb-6"}>
        <div className={"cardcontainer m-4 md:m-12 w-full flex justify-center items-center content-center flex-wrap"}>
          <div className={"card1 h-screen md:h-[80vh] w-full md:w-1/2  flex-col md:flex-row hidden"}>
            <div className={"square h-[400px] md:h-[700px] w-full md:w-[50%] bg-red-700 relative mb-4 md:mb-0"}></div>
            <img src={Image1} alt="photo" className={"cardimg h-[400px] md:h-[700px] w-full md:w-[50%] object-cover absolute shadow-lg mb-4 md:mb-0"} />
          </div>
          <div className={"card2 h-screen md:h-[80vh] w-full flex flex-col justify-center items-center content-center  pt-8 md:pt-0"}>
            <h1 className={"text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-red-700 mb-2 md:mb-4 lg:mb-6 xl:mb-8"}>Who We Are</h1>

            <p className={"text-lg md:text-2xl text-justify text-gray-800"}>
              RAAYIN'KAYADEDE is a real estate firm which venture in building &
              civil engineering construction, facility mangement, infrastructure
              development and investments. We have strong commitment to bespoke
              designs and quality workmanship, dedicated to creating intriguing
              interiors witn high quality standards.
            </p>

            <p className={"text-lg md:text-xl lg:text-2xl xl:text-3xl text-black text-justify"}>
              Our Team of multi-disciplined, talented and dedicated design
              experts provide comprehensive range of services which includes
              architectural and engineering designs, interior design, facility
              management, procurement and project management services for
              residential, commercial and hospitality projects. <br />
              At RAAYIN'KAYADEDE, we approach each project with a collaborative
              and honest sensibility as we believe in expressing our client's
              brand identity through design.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
