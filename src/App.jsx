import { Route,Routes } from "react-router-dom"
import Page1 from "./Page1"
import Video from "./Video"
function App() {
  

  return (
   <div>
    <switch>
      <Routes>
      <Route path='/' Component={Page1}/>
      <Route path='/video' Component={Video}/>
      </Routes>
    </switch>
    
   </div>
  )
}

export default App
