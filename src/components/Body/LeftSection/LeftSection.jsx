import React, {useContext} from "react";
import { LeftContext } from "../../../Contexts/LeftContext";
import { Wrap } from "./styled";
import {  Link} from 'react-router-dom'

export const LeftSection = () => {
  const [data2,setData2] = useContext(LeftContext)
  console.log(data2);
  console.log("okmomokmk");
  return (

    <div style={{ paddingLeft:'20px', flex: "17%", background: "#212121", color: "white" }}>
      {data2.map((value) => {
        return (
          <Link key={value.id} to={`/Side/${value.title}`} style={{textDecoration:'none',color:'white'}}>
            <Wrap>
              <img  
                style={{ marginLeft: "10px" }}
                src={value.IcolUrl}
                alt="rasm"
                />
              <p style={{ marginLeft: "20px" }}>{value.title}</p>
            </Wrap>
          </Link>
        );
      })}
    </div>
  );
};
export default LeftSection;
