import React from 'react'
import {route} from '../utils';
import {Link} from 'react-router-dom'
import { useGlobalContext } from '../context';

function Menu() {
    return (
        <div className='box menu'>
            <nav className='menu-ordered'>
                {
                    route.map((el, index)=>{
                        return(
                            <Routelink text={el.text} routelink={el.route} key={"menu"+index} id={"menu"+index}/>
                        )
                    })
                }
                
            </nav>
        </div>
    )
}


function Routelink({text, routelink,id}){
    const {changeCursor} = useGlobalContext();
    return(
        <Link to={routelink} className='menu-link' onClick={()=>changeCursor(id)} id={id}><h3 className='menu-inside'>{text}</h3></Link>
    )
}

export default Menu
