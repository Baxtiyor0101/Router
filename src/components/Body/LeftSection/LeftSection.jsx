import React, {useContext} from "react";
import { LeftContext } from "../../../Contexts/LeftContext";
import { Wrap } from "./styled";

export const LeftSection = () => {
  const [data2,setData2] = useContext(LeftContext)
  return (
    <div style={{ paddingLeft:'20px', flex: "20%", background: "#212121", color: "white" }}>
      {data2.map((value) => {
        return (
          <Wrap key={value.id}>
            <img  
              style={{ marginLeft: "10px" }}
              src={value.IcolUrl}
              alt="rasm"
            />
            <p style={{ marginLeft: "20px" }}>{value.title}</p>
          </Wrap>
        );
      })}
    </div>
  );
};
export default LeftSection;