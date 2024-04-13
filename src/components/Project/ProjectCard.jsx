import React from "react";
import { Link } from "react-router-dom";

 const ProjectCard = ({ imageSrc, propertyDetails, sitePlan, link }) => {
    return (
        <div className=" w-80 h-65rem flex flex-col justify-center items-center">
            
                <img src={imageSrc} alt="nophoto" className="photo w-full h-400px object-cover rounded-t-lg shadow-md mt-4" />
          
            <div className="label w-full h-auto py-2 px-4 bg-gradient-to-r from-red-700 via-red-500 to-red-700">
                <h1 className="text-white text-base font-medium">
                    {propertyDetails}
                </h1>
            </div>
            <div className="text w-full">
                <h2 className="text-lg font-bold mt-6">Proposed Development -</h2>
            <Link to={link}>
                <p className="text-base mt-2">
                    {sitePlan}
                </p>
                <button className="seeDetails text-base font-bold bg-red-500 text-white h-10 w-36 rounded-md mt-10">
                    See More
                </button>
            </Link>
            </div>
        </div>
    );
}


export default ProjectCard


