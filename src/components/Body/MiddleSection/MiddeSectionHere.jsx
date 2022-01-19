import React, {useContext} from 'react'
import { RightContext } from "../../../Contexts/RightContext";


export const MiddleSectionHere = () => {
    const [state, setState] = useContext(RightContext)
  
    const onDelete=id=>{
      let res=state.filter((val)=>val.id !== id)
      setState(res) 
    }
    return (
      <div style={{ flex: "80%", background: "#212121", color: "white" }}>
        <div  style={{ display: "grid", gridTemplateColumns: "auto auto auto auto" }}>
          {state.map((value) => {
            return (
              <div style={{ marginTop: "10px" }} key={value.id}>
                <img style={{ width: "250px" }} src={value.url} alt="rasm" />
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
  export default MiddleSectionHere;