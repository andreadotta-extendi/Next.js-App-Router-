/**
 * This code was generated by Builder.io.
 */
import { Link } from '@mui/material';
import React from "react";


const Footer: React.FC = () => {
  return (
    <footer className="flex z-10 justify-center items-center px-6 max-w-full whitespace-nowrap w-[600px] max-md:px-5">
      <nav className="flex gap-5 items-center text-white">
        <Link color="inherit" underline="none">
          Termini
        </Link>
        <div className='w-[1px] h-[18px] bg-white block' />
        <Link color="inherit" underline="none">
          Condizioni
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
