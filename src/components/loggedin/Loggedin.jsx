import React from 'react'
import Hero from './hero/Hero'
import NavbarModule from './NavbarModule'
import Footer from './Footer'



const Loggedin = () => {
  return (
    <div>
        <NavbarModule/>
       <div className="flex justify-center items-center">
           <Hero/>



       </div>
        <Footer/>
    </div>
  )
}

export default Loggedin