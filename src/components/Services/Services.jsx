import React from "react";
import Style from "./services.module.css";
import Icon1 from "../../assets/icons/pngicons/builddark.png";
import Icon2 from "../../assets/icons/pngicons/chart_dark.png";
import Icon3 from "../../assets/icons/pngicons/layers_dark.png";
import Icon4 from "../../assets/icons/pngicons/checklist_dark.png";
import Illustration from "../../assets/illustrations/undraw_under_construction_-46-pa.svg";
export const Services = () => {
  return (
    <section id="services">
      <section className={Style.section}>
        <h1 className={Style.headertext}>Our Services</h1>
        <div className={Style.cardcontainer}>
          <div className={Style.card1}>
            <div className={Style.cardcontent1}>
              <div className={Style.content1}>
                <img src={Icon1} alt="" className={Style.icon} />
                <div className={Style.writeup}>
                  <h3 className={Style.header}>Build and Design</h3>
                  <p className={Style.text}>
                    As a construction company, combining architectural design
                    and construction services is what we do. It streamlines
                    projects, reduces costs, enhances quality, and fosters
                    client collaboration, making it a highly efficient and
                    effective.
                  </p>
                </div>
              </div>
              <div className={Style.content2}>
                <img src={Icon2} alt="" className={Style.icon} />
                <div className={Style.writeup}>
                  <h3 className={Style.header}>Project Management</h3>
                  <p className={Style.text}>
                    We ensure timely completion, cost control, quality
                    assurance, and effective communication, allowing
                    construction firms to focus on their core competencies while
                    leaving project management in expert hands.
                  </p>
                </div>
              </div>
            </div>
            <div className={Style.cardcontent2}>
              <div className={Style.content1}>
                <img src={Icon3} alt="" className={Style.icon} />
                <div className={Style.writeup}>
                  <h3 className={Style.header}>Construction Management</h3>
                  <p className={Style.text}>
                    This is a comprehensive solution we make use of as a
                    construction company. It combines engineering expertise with
                    project management, ensuring efficient project execution.
                  </p>
                </div>
              </div>
              <div className={Style.content2}>
                <img src={Icon4} alt="" className={Style.icon} />
                <div className={Style.writeup}>
                  <h3 className={Style.header}>Supply of Building Materials</h3>
                  <p className={Style.text}>
                    A convenient offering we render to our clients as a
                    construction company. It provides a one-stop solution for
                    sourcing high-quality construction materials, saving time
                    and effort.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={Style.card2}>
            <img
              src={Illustration}
              alt="no photo"
              className={Style.illustration}
            />
          </div>
        </div>
      </section>
    </section>
  );
};
export const ServicesMobile = () => {
  return (
    <section id="services">
      <section className="mt-10">
        <h1 className="text-5xl text-left text-red-500 mb-2">Our Services</h1>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="flex flex-col">
              <div className="flex items-center mb-6">
                <img src={Icon1} alt="" className="h-20 w-20" />
                <div className="ml-4">
                  <h3 className="text-xl font-bold">Build and Design</h3>
                  <p className="text-lg">
                    As a construction company, combining architectural design
                    and construction services is what we do. It streamlines
                    projects, reduces costs, enhances quality, and fosters
                    client collaboration, making it a highly efficient and
                    effective.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img src={Icon2} alt="" className="h-20 w-20" />
                <div className="ml-4">
                  <h3 className="text-xl font-bold">Project Management</h3>
                  <p className="text-lg">
                    We ensure timely completion, cost control, quality
                    assurance, and effective communication, allowing
                    construction firms to focus on their core competencies while
                    leaving project management in expert hands.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col items-center">
              <img src={Illustration} alt="no photo" className="w-full md:w-2/3 mb-6" />
              <div className="flex flex-col items-center">
                <div className="flex items-center mb-6">
                  <img src={Icon3} alt="" className="h-20 w-20" />
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">Construction Management</h3>
                    <p className="text-lg">
                      This is a comprehensive solution we make use of as a
                      construction company. It combines engineering expertise with
                      project management, ensuring efficient project execution.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src={Icon4} alt="" className="h-20 w-20" />
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">Supply of Building Materials</h3>
                    <p className="text-lg">
                      A convenient offering we render to our clients as a
                      construction company. It provides a one-stop solution for
                      sourcing high-quality construction materials, saving time
                      and effort.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
