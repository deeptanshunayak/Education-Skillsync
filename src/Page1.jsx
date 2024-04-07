import React from 'react'
import {Navbar,Home,About,Contact,Teacher,Footer,Course} from "./Components/index"
import {auth} from "./firebase";
import { useEffect, useState } from "react"
export default function Page1() {
  const [uname,seuname]=useState("");
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        seuname(user.displayName);
      }
      else{
        seuname("");
      }
    })
  })
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
