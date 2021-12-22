import React from 'react'
import { useGlobalContext } from '../context'

function Cursor() {
    const {cursorPosition} = useGlobalContext();
    //console.log(cursorPosition);
    return (
        <div className='cursor-hide' style={{position:"absolute", opacity:(cursorPosition.active ? 1 : 0), left: cursorPosition.right-180, top:cursorPosition.top-110, zIndex:4, pointerEvents: "none", transition:"all 0.3s, opacity 1s"}}>
            <div className='pointer'/>
        </div>
    )
}

export default Cursor
