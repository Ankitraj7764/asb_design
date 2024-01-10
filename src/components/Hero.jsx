import React from 'react'
import { Link } from 'react-router-dom'


const Hero = () => {

  
  
    return (
        <><div className="hero flex flex-col-reverse lg:flex-row lg:m-14 md:m-8  m-1 ">
        
        <div className="heroleft flex-1 flex-wrap md:w-1/2 m-2 md:m-2  lg:mr-36 ">
          <div className="lg:text-[74px]">
            <div className="flex font-['Montserrat'] ">
            <h1 className="text-[#2F281E] font-[1000] lg:text-[74px] text-[30px]  md:text-6xl leading-tight font-montserrat lg:my-4 ">Make <h1> learning fun!</h1></h1>
            </div>
            <p className="text-[#2F281E]  text-xl md:text-xl font-montserrat leading-tight mt-4 lg:my-4 ">Any subject, in any language, on any device, for all ages!</p>
          
          </div>
         <Link to="/register">

          <button className="bg-[#3A5AFF] shadow-xl w-full md:w-72 h-12 rounded-md font-bold text-white font-montserrat mt-8 md:mt-16 lg:my-4 lg:w-64">Sign up for free</button>
         </Link>
          <p className="font-['Montserrat'] my-8 text-[18px] font-[1000] ">Or download the app:</p>
         <div className="flex ">
               <Link to="#"> <img className="pr-4 shadow-xl" src={require("../image/app.png")} alt="app" /></Link>
                <Link  to="#"><img className=" shadow-xl" src={require("../image/google.png")} alt="google" /></Link>
            </div> </div>
        <div className="heroright flex-1   md:w-1/2 md:my-0">
          <img className="w-full" src={require("../image/hero.jpg")} alt="" />
        </div>
      </div>
      
        </>
    )
}

export default Hero