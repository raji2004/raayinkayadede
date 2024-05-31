import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../Header/header";


// import UpComingProjectIcon from '../../assets/icons/CreatedIcons/planning_4730191.png'
// import FinishedProjectIcon from '../../assets/icons/CreatedIcons/fence_2960394.png'
// import onGoingProjectIcon from '../../assets/icons/CreatedIcons/renewable_9202449.png'

 const ProjectCard = ({ imageSrc, propertyDetails, title, link }) => {
    return (
        <div className=" w-80  flex flex-col justify-center items-center">
              <Header style="text-3xl mb-10 w-full">
        {title}
      </Header>
            <img
  className=" w-45 h-45 rounded-3xl  object-contain shadow-md " src={imageSrc} alt="nophoto"/>          
            <div className="label w-full h-auto py-2 px-4">
                <h1 className=" text-base font-medium  mt-10 text-center">
                    {propertyDetails}
                </h1>
            </div>
            <Link to={link}>
            <button
  className={`seeDetails text-base font-bold ${title === "Upcoming Project"? "bg-red-300" : "bg-red-500 hover:bg-red-700"} text-white h-10 w-36 rounded-md mt-2 md:mt-10 mb-12 `}>
  {title === "Upcoming Project"? <p>Coming Soon</p> : <p>See More</p>}
</button>
            </Link>
        </div>
    );
}


export default ProjectCard


