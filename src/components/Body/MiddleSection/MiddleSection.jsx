import React, {useContext} from "react";
import Navbar2 from "./Navbar2/Navbar2";
import { Route, Routes,Link,Outlet } from "react-router-dom";
import MiddleSectionHere from "./MiddeSectionHere";


        const MiddleSection = () => {
  return (
    <div style={{ width:'100%'}}>
      <Navbar2 />
      <Routes>

        <Route path='/Kino' element={<MiddleSectionHere />}/>
        <Route path='/Comedy' element={<h1>hello Comedy</h1>}/>
        <Route path='/Mix' element={<h1>mixxx</h1>}/>
        <Route path='/Football' element={<h1>hello Football</h1>}/>
        <Route path='/Cartoons' element={<h1>hello Cartoons</h1>}/>
        <Route path='/Misic' element={<h1>hello Musics</h1>}/>
        <Route path='/Animations' element={<h1>hello Animations</h1>}/>
        <Route path='/Best Arts' element={<h1>hello Best Arts</h1>}/>
        <Route path='/Last Updates' element ={<h1>hello Last Updated Things</h1>}/>
        
        <Route path="blogs" element={<Blogs />}>
            <Route path=":slug" element={<Blog />} >
              <Route path="birinchi" element={<Second1/>} />
              <Route path="ikkinchi" element={<Second2/>} />
            </Route>
            <Route path="new" element={<NewBlog />} />
        </Route>

      </Routes>
      
    </div>
  )
}


const Mix = ()=>{
  return(
    <h1>
      Mix Component
    </h1>
  )
}


function Blogs() {
  return (
    <div>
      <h1>Blogs</h1>
      <nav>

        <Link  to="new">Rasm</Link> <br/><br/>
        <Link  to=":slug">Video</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
//first outlet blogs
function Blog() {
  return(
    <div>
       <h1>Are There  so many Videos here?</h1>;
       <nav>
          <Link  to="birinchi">birinchi</Link> <br/><br/>
          <Link  to="ikkinchi">ikkinchi</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
      ) 
}

function NewBlog() {
  return <h1>There are so many Pictures here</h1>;
}

//second letput blogs
function Second1() {
  return <h1> Here is the Second1 part</h1>;
}

function Second2() {
  return <h1>is Here the Second2 part or not? </h1>;
}


export default MiddleSection