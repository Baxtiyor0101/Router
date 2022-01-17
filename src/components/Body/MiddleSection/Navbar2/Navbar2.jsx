import React, { useState, useContext } from "react";
import {BrowserRouter as Router, Link } from "react-router-dom";
import { RightContext } from "../../../../Contexts/RightContext";
import { datas } from "../../../../mock/data";


export const Navbar2 = () => {
  const [state, setState] = useContext(RightContext)
  const [categ,setCateg] = useState('Kino')
  const [type, setType] = useState([
    "Kino",
    "Comedy",
    "Mix",
    "Cartoons",
    "Misic",
    "Football",
    "UX Tasarim",
    "Animations",
    "Best Arts",
    "Last Updates",
  ]);
  // const onSelect=()=>{
  //   let res=datas.filter((val)=>val.category.includes(categ))
  //   setState(res)
  //   let indx=datas.filter((val,indx)=>val)
  //   setCateg(`${type[indx]}`) 
  // }
  return (
    <Router>

    <div style={{border: "1px solid grey", height:'30px', background: "#212121",color: "white",display: "flex",justifyContent: "center",}}>
      {type.map((value,index) => (
        <Link
        to={`/${value}`}
        key={index}
        // onClick={onSelect}
        style={{
          textDecoration:'none',
          color:'white',
          marginRight: "20px",
          cursor: "pointer",
          background: "grey",
          border: "1px solid grey",
          borderRadius: "30px",
          padding: "5px 12px",
          
        }}
        >
          {value}
        </Link>
      ))}
    </div>
      </Router>
  );
};
export default Navbar2;
