import React,{ createContext, useState } from "react";
import { datas } from "../mock/data";

export const RightContext=createContext()
export const RightContextCom = ({children}) => {
  const [state, setState] =useState(datas)

    return (
        <RightContext.Provider value={[state, setState]}>
            {children}
        </RightContext.Provider>
    )
}
 export default RightContextCom;