import React from "react";
import Style from "./chooseus.module.css";
import Worker from "../../assets/images/figmapic 1 1.png";
export const ChooseUs = () => {
  return (
    <>
     <div className={Style.section}>
     <div className={Style.container}>
        <div className={Style.content1}>
          <img src={Worker} alt="nophoto" className={Style.worker} />
          <div className={Style.quote}>
            <h1>
              <span>"</span>Building with passion, precision, and pride.
              <span>"</span>
            </h1>
          </div>
        </div>
        <div className={Style.content2}>
        <h1 className={Style.headertext}>Why Choose Us</h1>
        <p> We implore you to Choose us as your construction company for your projects  because we offer extensive experience, <br/>top-notch quality, reliable project management, innovative techniques, clear communication, unwavering safety standards, a client-centric approach, and a commitment to community engagement, ensuring your project's success and making a positive impact.</p>
        </div>
      </div>
     </div>
    </>
  );
};


export const ChooseUsMobile = () => {
  return (
    <>
      <div className="w-full h-90vh bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center py-12">
          <div className="w-full md:w-1/2 mx-4 mb-8 md:mb-0">
            <img src={Worker} alt="nophoto" className="w-full h-full md:h-64 object-cover rounded-lg shadow-md" />
            <div className="mt-4 bg-white rounded-lg shadow-md p-4">
              <h1 className="text-2xl md:text-3xl text-center">
                <span className="text-red-500">"Building with passion, precision, and pride."</span>
              </h1>
            </div>
          </div>
          <div className="w-full md:w-1/2 mx-4">
            <h1 className="text-3xl md:text-5xl text-red-500 font-bold text-center mb-6">Why Choose Us</h1>
            <p className="text-lg md:text-2xl text-center text-gray-800">
              We implore you to choose us as your construction company for your projects because we offer extensive experience,
              top-notch quality, reliable project management, innovative techniques, clear communication, unwavering safety standards,
              a client-centric approach, and a commitment to community engagement, ensuring your project's success and making a positive impact.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
