import React from "react";
import Style from "./upcomingproject.module.css";
import Image1 from "../../../assets/images/IMG-20230915-WA0007.jpg";
import Image2 from "../../../assets/images/IMG-20230915-WA0009.jpg";
import Image3 from "../../../assets/images/IMG-20230822-WA0016.jpg";
import Image4 from "../../../assets/images/IMG-20230822-WA0017.jpg";
import { Link } from "react-router-dom";
import { Button } from "../../Button/Button";
import  ProjectCard  from "../../Project/ProjectCard";
import { Header } from "../../Header/header";

// this array should be edited to fit the correct information
const projects = [
  {
    imageSrc: Image2,
    propertyDetails: "The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja",
    sitePlan: "The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style",
    link: "/upcomingProject1",
  },
  // {
  //   imageSrc: Image3,
  //   propertyDetails: "The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja",
  //   sitePlan: "The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style",
  //   link: "/upcomingProject2",
  // },
  // {
  //   imageSrc: Image1,
  //   propertyDetails: "Plot 198 Cadastral Zone B07 Katampe District, Abuja",
  //   sitePlan: "A block of 4nos five bedrooms terrace apartment & 3nos two bedroom flats",
  //   link: "/upcomingProject3",
  // },
  // {
  //   imageSrc: Image3,
  //   propertyDetails: "The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja",
  //   sitePlan: "The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style",
  //   link: "/upcomingProject4",
  // },
  // {
  //   imageSrc: Image2,
  //   propertyDetails: "The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja",
  //   sitePlan: "The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style",
  //   link: "/upcomingProject5",
  // },
  // {
  //   imageSrc: Image3,
  //   propertyDetails: "The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja",
  //   sitePlan: "The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style",
  //   link: "/upcomingProject6",
  // },
];



export const UpcomingProjects = () => {
  return (
    <section id="projects">
    <div>
    <Header style={" text-7xl mb-5"}>Upcoming Projects</Header>

      <div className={Style.container}>
        <div className={Style.maincontainer}>
          
        {projects.map((project) => (
          <Link key={project.propertyDetails} to={project.link}>
      <ProjectCard
        key={project.propertyDetails} // Add a unique key for each project
        imageSrc={project.imageSrc}
        propertyDetails={project.propertyDetails}
        sitePlan={project.sitePlan}
        link={project.link}
      />
      </Link>
    ))}

        </div>
        <div className={Style.maincontainer2}></div>
      </div>
    </div>
  </section>
  );
}


export const UpcomingProjectsMobile = () => {
  return (
    <section className="w-full flex flex-col items-center mt-16">
    <Header style="text-3xl mb-10 w-full">
      Upcoming Projects
    </Header>
      <div className={Style.container}>
        <div className={Style.maincontainer}>
          
        {projects.map((project) => (
          <Link key={project.propertyDetails} to={project.link}>
      <ProjectCard
        key={project.propertyDetails} // Add a unique key for each project
        imageSrc={project.imageSrc}
        propertyDetails={project.propertyDetails}
        sitePlan={project.sitePlan}
        link={project.link}
      />
      </Link>
    ))}

        </div>
        <div className={Style.maincontainer2}></div>
      </div>
  </section>

  
  );
};
