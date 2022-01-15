import React,{ createContext, useState } from "react";
import { data2 } from "../mock/data2";

export const LeftContext=createContext()
export const LeftContextCom = ({children}) => {
    const [navstate,setNavstate]=useState(data2)
    return (
        <LeftContext.Provider value={[navstate,setNavstate]}>
            {children}
        </LeftContext.Provider>
    )
}
 export default LeftContextCom;