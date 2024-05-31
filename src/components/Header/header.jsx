import { style } from '@mui/system';
import React from 'react';

export const Header = ({ children ,style}) => {
  return (
    <h1 className={`text-center text-red-400 font-bold  ${style}`} >
      {children}
    </h1>
  );
}


