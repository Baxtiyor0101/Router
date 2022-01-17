import React, {useContext} from "react";
import Navbar2 from "./Navbar2/Navbar2";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MiddleSectionHere from "./MiddeSectionHere";


        const MiddleSection = () => {
  return (
    <div>
      <Navbar2 />
      <Router>
        <Route path='/Kino' component={MiddleSectionHere}/>
        <Route path='/Comedy' ><h1>hello Comedy</h1></Route>
        <Route path={'/Mix'} component={Mix}/>
        <Route path='/Football' ><h1>hello Football</h1></Route>
        <Route path='/Cartoons' ><h1>hello Cartoons</h1></Route>
        <Route path='/Misic' ><h1>hello Musics</h1></Route>
        <Route path='/UX Tasarim' ><h1>hello Hello UX Tasarim</h1></Route>
        <Route path='/Animations' ><h1>hello Animations</h1></Route>
        <Route path='/Best Arts' ><h1>hello Best Arts</h1></Route>
        <Route path='/Last Updates' ><h1>hello Last Updated Things</h1></Route>
      </Router>
      
    </div>
  )
}


const Mix = ()=>{
  return(
    <h1>
      Mix
    </h1>
  )
}


export default MiddleSection