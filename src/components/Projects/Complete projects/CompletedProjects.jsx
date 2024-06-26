import React from 'react'
import { Link } from "react-router-dom";
import { Button } from "../../Button/Button";
import Style from "../UpcomingProjects/upcomingproject.module.css";
// /Users/davydking/Documents/Raj/raayinkayadede/src/components/Projects/UpcomingProjects/upcomingproject.module.css
import  ProjectCard  from "../../Project/ProjectCard";
import { Header } from "../../Header/header";
import Image1 from "../../../assets/images/IMG-20230915-WA0007.jpg";
import Image2 from "../../../assets/images/IMG-20230915-WA0009.jpg";
import Image3 from "../../../assets/images/IMG-20230822-WA0016.jpg";
import Image4 from "../../../assets/images/IMG-20230822-WA0017.jpg";




import FinishedProjectIcon from '../../../assets/icons/CreatedIcons/fence_2960394.png'



// this array should be edited to fit the correct information
const projects = [
  {
    imageSrc: FinishedProjectIcon,
    propertyDetails: "The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja",
    sitePlan: "The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style",
    link: "/completedProject1",
  },
  // {
  //   imageSrc: Image3,
  //   propertyDetails: "The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja",
  //   sitePlan: "The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style",
  //   link: "/completedProject2",
  // },
  // {
  //   imageSrc: Image1,
  //   propertyDetails: "Plot 198 Cadastral Zone B07 Katampe District, Abuja",
  //   sitePlan: "A block of 4nos five bedrooms terrace apartment & 3nos two bedroom flats",
  //   link: "/completedProject3",
  // },
  // {
  //   imageSrc: Image3,
  //   propertyDetails: "The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja",
  //   sitePlan: "The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style",
  //   link: "/completedProject4",
  // },
  // {
  //   imageSrc: Image2,
  //   propertyDetails: "The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja",
  //   sitePlan: "The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style",
  //   link: "/completedProject5",
  // },
  // {
  //   imageSrc: Image3,
  //   propertyDetails: "The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja",
  //   sitePlan: "The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style",
  //   link: "/completedProject6",
  // },
];



export const CompletedProjects = () => {
  return (
    <section className="w-full flex flex-col items-center mt-16  lg:px-0">
      <Header style="text-6xl mb-10 w-full">
        Completed Projects
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
  
  )
}
export const CompletedProjectsMobile = () => {
  return (
    <section className="w-full flex flex-col items-center mt-16  lg:px-0">
    <Header style="text-4xl mb-10 w-full ">
      Completed Projects
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

  
  )
}
