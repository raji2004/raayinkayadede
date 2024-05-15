import React from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from '@mui/system';


import { Navigation, NavMobile, Footer, FooterMobile } from "../../components";
// import Style from "./seeMore.module.css";
import Image1 from "../../assets/images/IMG-20230915-WA0007.jpg";
import Image2 from "../../assets/images/IMG-20230915-WA0009.jpg";
import Image3 from "../../assets/images/IMG-20230822-WA0013.jpg";
import Image4 from "../../assets/images/IMG-20230915-WA0010.jpg";
// import { Slide } from 'react-slideshow-image';
import Slideshow from "./Slideshow";

const slideImg1 = [
    Image1,
    Image2,
    Image3,
    Image4
]

const slideImg2 = [
  Image2,
  Image4,
  Image3,
  // Image1,
]



// Parent Component for OngoingProject
const Project = ({ name, id }) => {
  const { id: projectId } = useParams();


  const slideImages = {
    1: slideImg1,
    2: slideImg2,
    // Add more slide images for other projects here
  }[projectId]; 

  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      {isMobile ? <NavMobile /> : <Navigation />}
      {name} {projectId}
      <Slideshow images={slideImages} />
      {
        projectId
      }
      {/* Content can go into this place for pupulation */}
      {isMobile ? <FooterMobile /> : <Footer />}
    </>
  );
};

// Child Components for OngoingProject
export const Project1 = () => {
  return <Project name="Project 1" id="1" />;
};

export const Project2 = () => {
  return <Project name="Project 2" id="2" />;
};

export const Project3 = () => {
  return <Project name="Project 3" id="3" />;
};

export const Project4 = () => {
  return <Project name="Project 4" id="4" />;
}
export const Project5 = () => {
  return <Project name="Project 5" id="5" />;
};

export const Project6 = () => {
  return <Project name="Project 6" id="6" />;
};






// Parent Component for CompletedProject
const CompletedProject = ({ name, id }) => {
  const { id: completedProjectId } = useParams();

  const slideImages = {
    1: slideImg1,
    2: slideImg2,
    // Add more slide images for other projects here
  }[completedProjectId]; 

  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      {isMobile ? <NavMobile /> : <Navigation />}
      {name} {completedProjectId}
      <Slideshow images={slideImages} />
      {/* Content can go into this place for pupulation */}
      {isMobile ? <FooterMobile /> : <Footer />}
    </>
  );
};

// Child Components for CompletedProject
export const CompletedProject1 = () => {
  return <CompletedProject name="CompletedProject 1" id="1" />;
};

export const CompletedProject2 = () => {
  return <CompletedProject name="CompletedProject 2" id="2" />;
};

export const CompletedProject3 = () => {
  return <CompletedProject name="CompletedProject 3" id="3" />;
};

export const CompletedProject4 = () => {
  return <CompletedProject name="CompletedProject 4" id="4" />;
}
export const CompletedProject5 = () => {
  return <CompletedProject name="PCompletedProject 5"  id="5"/>;

}

export const CompletedProject6 = () => {
  return <CompletedProject name=" CompletedProject 6" id="6" />;
};






// Parent Component for UpcomingProject
const UpcomingProject= ({ name, id }) => {
  const { id: upcomingProjectId } = useParams();

  const slideImages = {
    1: slideImg1,
    2: slideImg2,
    // Add more slide images for other projects here
  }[upcomingProjectId]; 

  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      {isMobile ? <NavMobile /> : <Navigation />}
      {name} {upcomingProjectId}
      <Slideshow images={slideImages} />
      {/* Content can go into this place for pupulation */}
      {isMobile ? <FooterMobile /> : <Footer />}
    </>
  );
};

// Child Components for UpcomingProject
export const UpcomingProject1 = () => {
  return <UpcomingProject name="UpcomingProject1" id="1" />;
};

export const UpcomingProject2 = () => {
  return <UpcomingProject name="UpcomingProject2" id="2" />;
};

export const UpcomingProject3 = () => {
  return <UpcomingProject name="UpcomingProject3" id="3" />;
};

export const UpcomingProject4 = () => {
  return <UpcomingProject name="UpcomingProject4" id="4" />;
}
export const UpcomingProject5 = () => {
  return <UpcomingProject name="UpcomingProject5" id="5" />;
};

export const UpcomingProject6 = () => {
  return <UpcomingProject name="UpcomingProject6" id="6" />;
};


  

