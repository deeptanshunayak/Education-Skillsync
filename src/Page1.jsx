import React from 'react'
import {Navbar,Home,About,Contact,Teacher,Footer,Course} from "./Components/index"
export default function Page1() {
  return (
    <div className="font-Poppins bg-Solitude">
    <Navbar/>
    <Home/>
    <About/>
    <Course/>
    <Teacher/>
    <Contact/>
    
    <Footer/>
      
    </div>
  )
}
