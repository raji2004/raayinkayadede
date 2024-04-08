import React from "react";
import { Navigation } from "../../components";
import Style from "./seeMore.module.css";
import Image1 from "../../assets/images/IMG-20230915-WA0007.jpg";
import Image2 from "../../assets/images/IMG-20230915-WA0009.jpg";
import Image3 from "../../assets/images/IMG-20230822-WA0013.jpg";
import Image4 from "../../assets/images/IMG-20230915-WA0010.jpg";
import { Slide } from 'react-slideshow-image';

const slideImg = [
    Image1,
    Image2,
    Image3,
    Image4
]
export const SeeMore = () => {
    return (
        <>
            <Navigation />
            <Slide>
               <img src={Image1} alt="slide1" />
               <img src={Image1} alt="slide1" />
               <img src={Image1} alt="slide1" />
               <img src={Image1} alt="slide1" />
            </Slide>
        </>


    )
}