import React from 'react'



import UpComingProjectIcon from '../../assets/icons/CreatedIcons/planning_4730191.png'
import FinishedProjectIcon from '../../assets/icons/CreatedIcons/fence_2960394.png'
import onGoingProjectIcon from '../../assets/icons/CreatedIcons/renewable_9202449.png'
import { Link } from 'react-router-dom'
import ProjectCard from '../Project/ProjectCard'


export default function () {


    const projects = [
        {
          imageSrc: FinishedProjectIcon,
          title: "Completed Project",
          propertyDetails: "Our latest project, The Harbor, is now move-in ready with stunning waterfront views.",
        //   sitePlan: "The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style",
          link: "/completedProject1",
        },
        {
            imageSrc: onGoingProjectIcon,
            title: 'Ongoing Project',
            propertyDetails: "Our flagship project, The Estates, continues to grow with new phases and amenities",
            // sitePlan: "The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style",
            link: "/project1",
          },
          {
            imageSrc: UpComingProjectIcon,
            title: 'Upcoming Project',
            propertyDetails: "Get ready for our newest development, The Enclave, coming soon to downtown",
            // sitePlan: "The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style",
            // link: "/upcomingProject1",
            link: "/",
          },
    ]




  return (
    <section className='flex flex-col md:flex-row justify-center items-center w-full '>
        {
 projects.map((project, index) => (
    <Link key={project.propertyDetails} to={project.link}>
    <ProjectCard
    key={project.propertyDetails} // Add a unique key for each project
    imageSrc={project.imageSrc}
    propertyDetails={project.propertyDetails}
    title={project.title}
    link={project.link}
    />
</Link>
 ))
        }
    </section>
  )
}
