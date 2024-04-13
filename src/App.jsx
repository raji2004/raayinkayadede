import { React, useState,useEffect } from 'react'
import './App.css'
import {Home,
  About, 
  Contact, 
  Project1, 
  Project2, 
  Project3, 
  Project4, 
  Project5, 
  Project6,
  UpcomingProject1,
  UpcomingProject2,
  UpcomingProject3,
  UpcomingProject4,
  UpcomingProject5,
  UpcomingProject6,
  CompletedProject1,
  CompletedProject2,
  CompletedProject3,
  CompletedProject4,
  CompletedProject5,
  CompletedProject6,
} from "./pages";
// import { OngoingProjects, CompletedProjects } from './components';
import {Routes, Route} from "react-router-dom";
import './index.css'

const sections = [
  [
    { path: '/project1', component: Project1 },
    { path: '/project2', component: Project2 },
    { path: '/project3', component: Project3 },
    { path: '/project4', component: Project4 },
    { path: '/project5', component: Project5 },
    { path: '/project6', component: Project6 },
  ],
  [
    { path: '/upcomingProject1', component: UpcomingProject1 },
    { path: '/upcomingProject2', component: UpcomingProject2 },
    { path: '/upcomingProject3', component: UpcomingProject3 },
    { path: '/upcomingProject4', component: UpcomingProject4 },
    { path: '/upcomingProject5', component: UpcomingProject5 },
    { path: '/upcomingProject6', component: UpcomingProject6 },
  ],
  [
    { path: '/completedProject1', component: CompletedProject1 },
    { path: '/completedProject2', component: CompletedProject2 },
    { path: '/completedProject3', component: CompletedProject3 },
    { path: '/completedProject4', component: CompletedProject4 },
    { path: '/completedProject5', component: CompletedProject5 },
    { path: '/completedProject6', component: CompletedProject6 },
  ],
];

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <Routes>
    <Route path= "*" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    {/* dynamic path for projects */}
    {sections[0].map((project) => (
  <Route key={project.path} path={project.path} element={<project.component />} />
))}

{sections[1].map((project) => (
  <Route key={project.path} path={project.path} element={<project.component />} />
))}

{sections[2].map((project) => (
  <Route key={project.path} path={project.path} element={<project.component />} />
))}

  </Routes>
  )
}

export default App
