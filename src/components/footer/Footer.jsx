import React,{useEffect} from 'react'
import scan from "../../assets/scsn.png"
import enter_code from "../../assets/enter-code.png"
import { Link ,useNavigate } from 'react-router-dom';

const Footer = () => {

  return (
    <footer className="flex  justify-end items-center p-5 pt-0  bg-gray-200">
      <div className=" gap-4 flex flex-col ">


      <Link to='/scan'>
      <img src={scan} alt="Scan"className="cursor-pointer h-16" />
      </Link>
      <img  src={enter_code}  className="cursor-pointer h-16"/>
        </div>
    </footer>
  );
};

export default Footer;
