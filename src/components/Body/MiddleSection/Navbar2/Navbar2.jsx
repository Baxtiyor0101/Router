import React, { useState, useContext } from "react";
import { Link, NavLink, Routes } from "react-router-dom";
import { RightContext } from "../../../../Contexts/RightContext";
import { datas } from "../../../../mock/data";
import './style.css';

export const Navbar2 = () => {
  const [state, setState] = useContext(RightContext)
  const [categ,setCateg] = useState('Kino')
  const [type, setType] = useState([
    "Kino",
    "Comedy",
    "blogs",
    "Mix",
    "Cartoons",
    "Misic",
    "Football",
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
  console.log(type);
  return (

    <div style={{border: "1px solid grey", height:'30px', background: "#212121",color: "white",display: "flex",justifyContent: "center",}}>
      {type.map((value,index) => (
        <NavLink
        className='navclass'
        style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })}
        to={`/${value}`}
        key={index}
        >
          {value}
        </NavLink>
      ))}
    </div>
  );
};
export default Navbar2;
