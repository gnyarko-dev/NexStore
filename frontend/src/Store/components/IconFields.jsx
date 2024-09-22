import React from 'react';
import { FaStore } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMdGlobe } from "react-icons/io";
import { FaCity } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { GiPostOffice } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";

const iconMap = {
    FaStore: <FaStore />,
    FaPhone: <FaPhone />,
    IoMdGlobe: <IoMdGlobe />,
    FaCity: <FaCity />,
    MdLocationCity: <MdLocationCity />,
    MdEmail: <MdEmail />,
    GiPostOffice: <GiPostOffice />,
    BiCategory: <BiCategory />
};


function IconFields({icon}) {
  return (
    <div className='text-primary bg-blue-100 p-1.5 rounded-full'>{iconMap[icon]}</div>
  )
}

export default IconFields