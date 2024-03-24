// ConstructionServiceComponent.js
import React from 'react';
import Style from './ConstructionService.module.css'; // Assuming you have a CSS module for styling

export const ConstructionService = ({ iconSrc, header, text }) => {
  return (
    <div className={Style.content}>
      <img src={iconSrc} alt="" className={Style.icon} />
      <div className={Style.writeup}>
        <h3 className={Style.header}>{header}</h3>
        <p className={Style.text}>{text}</p>
      </div>
    </div>
  );
};


