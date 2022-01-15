import React, {useContext} from "react";
import { RightContext } from "../../../Contexts/RightContext";
import Navbar2 from "./Navbar2/Navbar2";

export const MiddleSection4 = () => {
  const [state, setState] = useContext(RightContext)

  const onDelete=id=>{
    let res=state.filter((val)=>val.id !== id)
    setState(res) 
  }
  return (
    <div style={{ flex: "80%", background: "#212121", color: "white" }}>
      <Navbar2 />
      <h1>4</h1>
      <div
        style={{ display: "grid", gridTemplateColumns: "auto auto auto auto" }}
      >
        {state.map((value) => {
          return (
            <div style={{ marginTop: "10px" }} key={value.id}>
              <img style={{ width: "270px" }} src={value.url} alt="rasm" />
              <h3>{value.title}</h3>
              <div>{value.thumbnailUrl}</div>
              <p>{value.category}</p>
              <button onClick={()=>onDelete(value.id)}>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default MiddleSection4