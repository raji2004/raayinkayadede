import React from "react";
import Style from "./services.module.css";
import Icon1 from "../../assets/icons/pngicons/builddark.png";
import Icon2 from "../../assets/icons/pngicons/chart_dark.png";
import Icon3 from "../../assets/icons/pngicons/layers_dark.png";
import Icon4 from "../../assets/icons/pngicons/checklist_dark.png";
import Illustration from "../../assets/illustrations/undraw_under_construction_-46-pa.svg";
import { ConstructionService } from "../ConstructionService/ConstructionService";
import { Header } from "../Header/header";
export const Services = () => {
  return (
    <section id="services">
      <section className={Style.section}>
        <Header style={' text-7xl'}>Our Services</Header>
        <div className={Style.cardcontainer}>

          <ConstructionService
            iconSrc={Icon1}
            header="Build and Design"
            text="As a construction company, combining architectural design and construction services is what we do. It streamlines projects, reduces costs, enhances quality, and fosters client collaboration, making it a highly efficient and effective."
          />
          <ConstructionService
            iconSrc={Icon2}
            header="Project Management"
            text="We ensure timely completion, cost control, quality assurance, and effective communication, allowing construction firms to focus on their core competencies while leaving project management in expert hands."
          />
          <ConstructionService
            iconSrc={Icon3}
            header="Construction Management"
            text="This is a comprehensive solution we make use of as a construction company. It combines engineering expertise with project management, ensuring efficient project execution."
          />
          <ConstructionService
            iconSrc={Icon4}
            header="Supply of Building Materials"
            text="A convenient offering we render to our clients as a construction company. It provides a one-stop solution for sourcing high-quality construction materials, saving time and effort."
          />
        </div>

      </section>
    </section>
  );
};
export const ServicesMobile = () => {
  return (
    <section id="services">
      <section className="mt-10">
        <h1 className="text-5xl text-left text-red-500 mb-12">Our Services</h1>
        <div className="flex flex-wrap">
          <ConstructionService
            iconSrc={Icon1}
            header="Build and Design"
            text="As a construction company, combining architectural design and construction services is what we do. It streamlines projects, reduces costs, enhances quality, and fosters client collaboration, making it a highly efficient and effective."
          />
          <ConstructionService
            iconSrc={Icon2}
            header="Project Management"
            text="We ensure timely completion, cost control, quality assurance, and effective communication, allowing construction firms to focus on their core competencies while leaving project management in expert hands."
          />
          <ConstructionService
            iconSrc={Icon3}
            header="Construction Management"
            text="This is a comprehensive solution we make use of as a construction company. It combines engineering expertise with project management, ensuring efficient project execution."
          />
          <ConstructionService
            iconSrc={Icon4}
            header="Supply of Building Materials"
            text="A convenient offering we render to our clients as a construction company. It provides a one-stop solution for sourcing high-quality construction materials, saving time and effort."
          />
        </div>

      </section>
    </section>
  );
};
