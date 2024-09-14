import React from 'react';
import { SlLocationPin } from "react-icons/sl";
import { CiLocationArrow1 } from "react-icons/ci";
import './Hero.css';

function Search() {
  return (
    <div className='flex items-center search-bar'>
        <SlLocationPin />
        <input type='text' placeholder="What's your location?" />
        <button className='button flex items-center border rounded-full px-1 py-1'>Use current location <CiLocationArrow1 /></button>
    </div>
  )
}

export default Search