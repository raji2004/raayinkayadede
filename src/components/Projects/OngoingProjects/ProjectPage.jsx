import React from "react";
import { useParams } from "react-router-dom";


// import Image1 from "../../assets/images/IMG-20230915-WA0007.jpg";
// import Image2 from "../../assets/images/IMG-20230915-WA0009.jpg";
// import Image3 from "../../assets/images/IMG-20230822-WA0013.jpg";
// import Image4 from "../../assets/images/IMG-20230915-WA0010.jpg";

import { Navigation } from "../../Navigation/Navigation";

const ProjectPage = () => {
  const { id } = useParams();
  const projects = [
    {
      id: 1,
      // imageSrc: Image2,
      propertyDetails:
        "The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja",
      sitePlan:
        "The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style",
      link: `/project/1`
    },
    {
      id: 2,
      // imageSrc: Image3,
      propertyDetails:
        "The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja",
      sitePlan:
        "The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style",
      link: `/project/2`
    },
    {
      id: 3,
      // imageSrc: Image1,
      propertyDetails: "Plot 198 Cadastral Zone B07 Katampe District, Abuja",
      sitePlan:
        "A block of 4nos five bedrooms terrace apartment & 3nos two bedroom flats",
      link: `/project/3`
    },
    {
      id: 4,
      // imageSrc: Image3,
      propertyDetails:
        "The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja",
      sitePlan:
        "The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style",
      link: `/project/4`
    },
    {
      id: 5,
      // imageSrc: Image2,
      propertyDetails:
        "The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja",
      sitePlan:
        "The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style",
      link: `/project/5`
    },
    {
      id: 6,
      // imageSrc: Image3,
      propertyDetails:
        "The Marriot 1, Plot 198 Cadastral Zone B07 Katampe District, Abuja",
      sitePlan:
        "The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style",
      link: `/project/6`
    }
  ];

  const project = projects.find((p) => p.id.toString() === id);

  return (
    <>
    <Navigation />
    Project {id}
    <div className="project-page">
      <button onClick={() => history.goBack()}>Back</button>
      <h1>{project.propertyDetails}</h1>
      {/* <img src={project.imageSrc} alt={project.propertyDetails} /> */}
      <p>{project.sitePlan}</p>
    </div>
    </>
  );
};

export default ProjectPage;