import { Route,Routes } from "react-router-dom"
import Page1 from "./Page1"
import Video from "./Video"
import Signup from "./Signup"
import Signin from "./Signin"
import Roadmap from "./Roadmap"
import {auth} from "./firebase";
import { useEffect, useState } from "react"
function App() {
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
   <div>
    <switch>
      <Routes>
      <Route path='/' Component={Page1}/>
      <Route path='/video' Component={Video}/>
      <Route path='/signup' Component={Signup}/>
      <Route path='/signin' Component={Signin}/>
      <Route path="/Roadmap" Component={Roadmap}/>
      </Routes>
    </switch>
    
   </div>
  )
}

export default App
