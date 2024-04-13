import React from 'react';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


import Image1 from "../../assets/images/IMG-20230915-WA0007.jpg";
import Image2 from "../../assets/images/IMG-20230915-WA0009.jpg";
import Image3 from "../../assets/images/IMG-20230822-WA0013.jpg";
import Image4 from "../../assets/images/IMG-20230915-WA0010.jpg";






// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     prevArrow: <button type="button" className="slick-prev">Previous</button>,
//     nextArrow: <button type="button" className="slick-next">Next</button>
//   };
  


  const Slideshow = () => {
    const images = [
      Image1,
      Image2,
      Image3,
      // Image4,
      // Add more images as needed
    ];
  
    return (
      <section className='flex flex-col md:flex-row gap-3 md:gap-6 w-full justify-center items-center'>
        {images.map((image, index) => (
            <img
            className="h-1/2 justify-center items-center md:w-3/12"
            src={image} 
            alt={`Slide ${index + 1}`}
            />
        ))}
      </section>
    );
  };

  export default  Slideshow
