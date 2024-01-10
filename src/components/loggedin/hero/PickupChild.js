import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
 

const PickupChild = (e) => {
 
   
  return (
   <>
   <Link to="/level">
   <div className="flex justify-center items-center mt-4 h-12 w-40 md:h-20 md:w-40 hover:bg-white hover:duration-300 rounded-lg bg-teal-400 m-2 ">
    
    <span>{e.modulename}</span>
   </div>
   </ Link>
   </>
  )
}

export default PickupChild