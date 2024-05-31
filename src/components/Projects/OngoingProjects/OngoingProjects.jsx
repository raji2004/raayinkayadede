import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";

import Style from "./ongoingprojects.module.css";
import Image1 from "../../../assets/images/IMG-20230915-WA0007.jpg";
import Image2 from "../../../assets/images/IMG-20230915-WA0009.jpg";
import Image3 from "../../../assets/images/IMG-20230822-WA0013.jpg";
// import Image4 from "../../../assets/images/IMG-20230915-WA0010.jpg";
// import { Button } from "../../Button/Button";
import  ProjectCard  from "../../Project/ProjectCard";
import { Project1 } from "../../../pages";
import { Header } from "../../Header/header";
// import ProjectPage from './ProjectPage'




import onGoingProjectIcon from '../../../assets/icons/CreatedIcons/renewable_9202449.png'



const projects = [
  {
    imageSrc: onGoingProjectIcon,
    propertyDetails: "The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja",
    sitePlan: "The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style",
    link: "/project1",
  },
  // { 
  //   imageSrc: Image3,
  //   propertyDetails: "The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja",
  //   sitePlan: "The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style",
  //   link: "/project2",
  // },
  // {
  //   imageSrc: Image1,
  //   propertyDetails: "Plot 198 Cadastral Zone B07 Katampe District, Abuja",
  //   sitePlan: "A block of 4nos five bedrooms terrace apartment & 3nos two bedroom flats",
  //   link: "/project3",
  // },
  // {
  //   imageSrc: Image3,
  //   propertyDetails: "The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja",
  //   sitePlan: "The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style",
  //   link: "/project4",
  // },
  // {
  //   imageSrc: Image2,
  //   propertyDetails: "The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja",
  //   sitePlan: "The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style",
  //   link: "/project5",
  // },
  // {
  //   imageSrc: Image3,
  //   propertyDetails: "The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja",
  //   sitePlan: "The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style",
  //   link: "/project6",
  // },
];

export const OngoingProjects = () => {
  return (
    <>
      <section id="projects">
        <div>
          <Header style={' text-7xl'}>Ongoing Projects</Header>
  
          <div className={Style.container}>
            <div className={Style.maincontainer}>
              
            {projects.map((project) => (
              <Link key={project.propertyDetails} to={project.link}>
          <ProjectCard
            key={project.propertyDetails} // Adds a unique key for each project
            imageSrc={project.imageSrc}
            propertyDetails={project.propertyDetails}
            sitePlan={project.sitePlan}
            link={project.link} // this link takes you to seeMore component 
          />
          </Link>
        ))}
  
            </div>
            <div className={Style.maincontainer2}></div>
          </div>
        </div>
      </section>
    </>
  );
  };








export const OngoingProjectsMobile = () => {
  return (
    <section id="projects">
      <section className="w-full flex flex-col items-center mt-16">
        <Header style="text-4xl  mb-10">Ongoing Projects</Header>
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-5">
            
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
      </section>
    </section>
  );
};
