import {React, useEffect} from 'react'
import {route} from '../utils';
import {Link} from 'react-router-dom'
import { useGlobalContext } from '../context';

function Menu() {
    const {setCursorPosition} = useGlobalContext();
    useEffect(()=>{
        let menu;
        route.forEach((el, index)=>{
            if(el.route===window.location.pathname){
                menu="menu"+index;
            }
        })
        if(window.innerWidth<=750){
            setTimeout(()=>{var offsets = document.getElementById("title-materia").getBoundingClientRect();setCursorPosition({right:offsets.x, top:offsets.y, active:true, componentId: menu});},100)
        }else{
            setTimeout(()=>{var offsets = document.getElementById(menu).getBoundingClientRect();setCursorPosition({right:offsets.x, top:offsets.y, active:true, componentId: menu});},100)
        }
    },[]);
    return (
        <div className={'box menu'}>
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
