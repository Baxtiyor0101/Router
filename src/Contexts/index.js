import React from 'react'
import LeftContextCom from './LeftContext'
import RightContextCom from './RightContext'

export const Context = ({children}) => {
    return (
        <RightContextCom>
            <LeftContextCom>
                {children}
            </LeftContextCom>
        </RightContextCom>
    )
}
export default Context;