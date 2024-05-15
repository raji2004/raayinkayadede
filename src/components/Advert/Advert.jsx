import React from "react";
import Style from "./advert.module.css";
import Bgimage from "../../assets/images/IMG-20230923-WA0024.jpg";
import { Button } from "../../components";
import { Link, useNavigate } from "react-router-dom";


const WorkingHoursComponent = ({ number, description,title }) => {
  return (
    <div className={Style.content}>
      <h3>{number}</h3>
      <div className={Style.rule}></div>
      <h4>{title}</h4>
      <p className='text-center'>{description}</p>
    </div>
  );
};
export const Advert = () => {

  return (
    <>
      <div className={Style.section}>
        <img src={Bgimage} alt="nophoto" className={Style.background} />
        <div className={Style.bgoverlay}></div>
        <div className={Style.container}>
          <div className={Style.imagestyle}>
            {/* <img src={Worker} alt="nophoto" className={Style.image}/> */}
          </div>
          <div className={Style.advertcontainer}>
            <div className={Style.textcontainer}>
              <WorkingHoursComponent
                number="12+"
                title="Completed Projects"
                description="We have completed a lot of projects successfully with our experience."
              />
              <WorkingHoursComponent
                number="100%"
                title="Satisfied Customers"
                description="Every family who live in our buildings are 100% satisfied with our support and construction."
              />
              <WorkingHoursComponent
                number="2648+"
                title="Working Hours"
                description="We have worked a lot in the past 19 years to provide the best apartments to live."
              />
            </div>
            <div className={Style.advertwriteup}>
              <h1>
                We believe that business can be a powerful force for{" "}
                <span>good</span>.
              </h1>

            </div>

            <Button text={"Contact Us"}   href={'/contact'}  style={{marginTop:-220}} />
          </div>
        </div>
      </div>
    </>
  );
};

export const AdvertMobile = () => {
  const navigator = useNavigate();
  const handleClick = () => {
    navigator.push("/contact");
  }
  return (
    <>
      <div className="w-full mt-10">
        <img
          src={Bgimage}
          alt="nophoto"
          className="w-full h-95vh object-cover"
        />
        <div className="h-95vh w-full bg-black bg-opacity-70 flex flex-col items-center justify-center ">
          <div className="w-full flex flex-col md:flex-row justify-center items-center px-4 mb-4">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              {/* <img src={Worker} alt="nophoto" className="w-full h-full object-cover" /> */}
            </div>
            <div className="w-full md:w-3/4 flex flex-col justify-center items-center">
              <div className="flex flex-col items-center  mb-6 gap-5">
                <div className="w-full flex flex-col gap-2 items-center">
                  <h3 className="text-5xl font-bold text-red-500  self-center">
                    12+
                  </h3>
                  <div className="w-20 h-2 bg-white rounded-full self-center"></div>
                  <h4 className="text-2xl text-white font-semibold">
                    Completed Projects
                  </h4>
                  <p className="text-white text-lg text-center ">
                    We have completed a lot of projects successfully with our
                    experience.
                  </p>
                </div>
                <div className="w-full flex flex-col gap-2 items-center">
                  <h3 className="text-5xl font-bold text-red-500 self-center">
                    100%
                  </h3>
                  <div className="w-20 h-2 bg-white rounded-full self-center"></div>
                  <h4 className="text-2xl text-white font-semibold">
                    Satisfied Customers
                  </h4>
                  <p className="text-white text-lg text-center">
                    Every family who live in our buildings are 100% satisfied
                    with our support and construction.
                  </p>
                </div>
                <div className="w-full flex flex-col gap-2 items-center">
                  <h3 className="text-5xl font-bold text-red-500 self-center">
                    2648+
                  </h3>
                  <div className="w-20 h-2 bg-white rounded-full self-center"></div>
                  <h4 className="text-2xl text-white font-semibold">
                    Working Hours
                  </h4>
                  <p className="text-white text-lg text-center">
                    We have worked a lot in the past 19 years to provide the
                    best apartments to live.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center mt-6">
                <h1 className="text-3xl md:text-6xl text-white text-center mb-4">
                  We believe that business can be a powerful force for{" "}
                  <span className="text-red-500">good</span>.
                </h1>
                <Button text={"Contact Us"} style={{ marginTop: 50 }} href={'/contact'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
