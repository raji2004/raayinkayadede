import { style } from '@mui/system';
import React from 'react';

export const Header = ({ children ,style}) => {
  return (
    <h1 className={`text-4xl text-center text-red-600 font-bold  ${style}`} >
      {children}
    </h1>
  );
}


