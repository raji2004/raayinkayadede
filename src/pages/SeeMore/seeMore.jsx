import React from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from '@mui/system';


import { Navigation, NavMobile, Footer, FooterMobile } from "../../components";
// import Style from "./seeMore.module.css";
import Image1 from "../../assets/images/IMG-20230915-WA0007.jpg";
import Image2 from "../../assets/images/IMG-20230915-WA0009.jpg";
import Image3 from "../../assets/images/IMG-20230822-WA0013.jpg";
import Image4 from "../../assets/images/IMG-20230915-WA0010.jpg";




import testingImg from "../../assets/work/completed P1.jpeg"
import testingImg2 from "../../assets/work/completed P2.jpeg"
import testingImg3 from "../../assets/work/completed P3.jpeg"
import testingImg4 from "../../assets/work/completed P4.jpeg"
import testingImg5 from "../../assets/work/completed P5.jpeg"
import testingImg6 from "../../assets/work/completed P6.jpeg"
import testingImg7 from "../../assets/work/completed P7.jpeg"
import testingImg8 from "../../assets/work/completed P8.jpeg"
import testingImg9 from "../../assets/work/completed P9.jpeg"
import testingImg10 from "../../assets/work/completed P10.jpeg"
import testingImg11 from "../../assets/work/completed P11.jpeg"
import testingImg13 from "../../assets/work/completed 13.jpeg"
import testingImg14 from "../../assets/work/completed 14.jpeg"
import testingImg15 from "../../assets/work/completed 15.jpeg"
import testingImg16 from "../../assets/work/completed 16.jpeg"
import testingImg17 from "../../assets/work/completed 17.jpeg"
import testingImg18 from "../../assets/work/completed 18.jpeg"
import testingImg19 from "../../assets/work/completed 19.jpeg"





import Slideshow from "./Slideshow";
// import { Swipper } from "../../components/Swiper/Swipper";

const slideImg1 = [
  Image1,
  Image2,
  Image3,
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



const GalaryInfo = [
  {
    Name:"5-BEDROOM DUPLEX  ",
    Location:" ASOKORO ",
    Scope:"CONSTRUCTION WORKS ",
    img:[
      testingImg,
      testingImg2,
    ]
  },
  {
    Name:" 60-NRS OF 3-BEDROOM DUPLEX",
    Location:"MAGODO",
    Scope:"CONSTRUCTION WORKS ",
    img:[
      testingImg3,
      testingImg4,
      testingImg5,
    ]
  },
  {
    Name:"5-BEDROOM BUNGALOW WITH BQ ",
    Location:" GUZAPE, ASOKORO, ABUJA",
    Scope:"CONSTRUCTION WORKS ",
    img:[
      testingImg6,
      testingImg7,
      testingImg8,
      testingImg9,
      testingImg10,
      testingImg11,
    ]
  },
  {
    Name:"OPERATION’S CENTRE  ",
    Location:" HEADQUARTERS, NIGERIAN ARMY, ABUJA",
    Scope:"CONSTRUCTION WORKS ",
    img:[
      testingImg13,
      testingImg14,
      testingImg15,
      testingImg16,
      testingImg17,
      testingImg18,
      testingImg19,
    ]
  }
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
    <div>
      {isMobile ? <NavMobile /> : <Navigation />}
      {
        isMobile ?
        <div className="h-20">
        </div>:
        <div className="h-10">
        </div>
      }
      {/* <Slideshow images={slideImages} /> */}
      <h2 className="md:pt-20 m-3 text-3xl font-bold">Completed Project</h2>
      <div className="">
      {GalaryInfo.map((item) => (
        <div key={item.Name} className=" overflow-hidden ">
          <div className="p-4">
            <h3>{item.Name}</h3>
            <p>{item.Location}</p>
            <p>{item.Scope}</p>
            <div className="flex flex-wrap ">
            {item.img.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${item.Name} - Image ${index + 1}`}
                className="w-full h-auto rounded-lg object-cover  md:h-48 md:w-1/2 lg:w-1/3 p-2"
              />
            ))}
          </div>
          </div>
        </div>
      ))}
    </div>
      {/* Content can go into this place for pupulation */}
      {isMobile ? <FooterMobile /> : <Footer />}
    </div>
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
  return <CompletedProject name="PCompletedProject 5" id="5" />;

}

export const CompletedProject6 = () => {
  return <CompletedProject name=" CompletedProject 6" id="6" />;
};






// Parent Component for UpcomingProject
const UpcomingProject = ({ name, id }) => {
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




