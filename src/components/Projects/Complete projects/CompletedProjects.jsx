import React from 'react'
import { Link } from "react-router-dom";
import { Button } from "../../Button/Button";
import { Project } from "../../Project/Project";
import { Header } from "../../Header/header";
import Image1 from "../../../assets/images/IMG-20230915-WA0007.jpg";
import Image2 from "../../../assets/images/IMG-20230915-WA0009.jpg";
import Image3 from "../../../assets/images/IMG-20230822-WA0016.jpg";
import Image4 from "../../../assets/images/IMG-20230822-WA0017.jpg";



export const CompletedProjects = () => {
  return (
  
    <section className="w-full flex flex-col items-center mt-16  lg:px-0">
      <Header style="text-6xl mb-10 w-full">
        Completed Projects
      </Header>
  
      <div className="w-full flex flex-col lg:flex-row lg:flex-wrap lg:justify-center lg:items-start mb-8 items-center gap-20">
        <Project
          imageSrc={Image1}
          propertyDetails="Plot 198 Cadastral Zone B07 Katampe District, Abuja"
          sitePlan="A block of 4nos five bedrooms terrace apartment & 3nos two bedroom flats"
          link="/seeMore"
        />
  
        <Project
          imageSrc={Image3}
          propertyDetails="The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja"
          sitePlan="The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style"
          link="/seeMore"
        />
  
        <Project
          imageSrc={Image1}
          propertyDetails="Plot 198 Cadastral Zone B07 Katampe District, Abuja"
          sitePlan="A block of 4nos five bedrooms terrace apartment & 3nos two bedroom flats"
          link="/seeMore"
        />
  
        <Project
          imageSrc={Image3}
          propertyDetails="The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja"
          sitePlan="The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style"
          link="/seeMore"
        />
  
        <Project
          imageSrc={Image3}
          propertyDetails="The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja"
          sitePlan="The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style"
          link="/seeMore"
        />
  
        <Project
          imageSrc={Image3}
          propertyDetails="The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja"
          sitePlan="The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style"
          link="/seeMore"
        />
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
  
      <div className="w-full flex flex-col lg:flex-row lg:flex-wrap lg:justify-center lg:items-start mb-8 items-center gap-20">
        <Project
          imageSrc={Image1}
          propertyDetails="Plot 198 Cadastral Zone B07 Katampe District, Abuja"
          sitePlan="A block of 4nos five bedrooms terrace apartment & 3nos two bedroom flats"
          link="/seeMore"
        />
  
        <Project
          imageSrc={Image3}
          propertyDetails="The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja"
          sitePlan="The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style"
          link="/seeMore"
        />
  
        <Project
          imageSrc={Image1}
          propertyDetails="Plot 198 Cadastral Zone B07 Katampe District, Abuja"
          sitePlan="A block of 4nos five bedrooms terrace apartment & 3nos two bedroom flats"
          link="/seeMore"
        />
  
        <Project
          imageSrc={Image3}
          propertyDetails="The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja"
          sitePlan="The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style"
          link="/seeMore"
        />
  
        <Project
          imageSrc={Image3}
          propertyDetails="The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja"
          sitePlan="The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style"
          link="/seeMore"
        />
  
        <Project
          imageSrc={Image3}
          propertyDetails="The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja"
          sitePlan="The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style"
          link="/seeMore"
        />
      </div>
    </section>
 
  
  )
}
