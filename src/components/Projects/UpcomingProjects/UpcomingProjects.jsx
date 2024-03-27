import React from "react";
import Style from "./upcomingproject.module.css";
import Image1 from "../../../assets/images/IMG-20230915-WA0007.jpg";
import Image2 from "../../../assets/images/IMG-20230915-WA0009.jpg";
import Image3 from "../../../assets/images/IMG-20230822-WA0016.jpg";
import Image4 from "../../../assets/images/IMG-20230822-WA0017.jpg";
import { Link } from "react-router-dom";
import { Button } from "../../Button/Button";
import { Project } from "../../Project/Project";



export const UpcomingProjects = () => {
  return (
    <>
      <div className={Style.upcoming}>
        <h1 className={Style.headertext}>Upcoming Projects</h1>
        <div className={Style.container}>
          <div className={Style.maincontainer}>
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
        </div>
      </div>
    </>
  );
}


export const UpcomingProjectsMobile = () => {
  return (
    <>
      <section className="w-full flex flex-col items-center mt-16">
        <h1 className="text-3xl text-red-500 mb-10 w-full">
          Upcoming Projects
        </h1>

        <div className="w-full flex flex-col md:flex-row mb-8 items-center gap-5">
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
    </>
  );
};
