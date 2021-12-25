import React from 'react';
import {useGlobalContext} from '../context';

function toggleMenuSpecial(isMenuOpen, toggleMenu, playMusic){
    if(!isMenuOpen){
        playMusic('cursor');
    }else{
        playMusic('cursorback');
    }
    toggleMenu();
}


function Title() {
    const {toggleMenu, isMenuOpen, playMusic} = useGlobalContext();
    return (
        <div className='box title'>
            <header className='title'>
                <h2>Andrea Pignotti</h2>
                <div className={'menu-materia-test' + (isMenuOpen? " grey" : "")} onClick={()=>toggleMenuSpecial(isMenuOpen,toggleMenu,playMusic)} id="title-materia"></div>
            </header>  
        </div>
    )
}

export default Title
