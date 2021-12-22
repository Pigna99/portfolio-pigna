import React from 'react';
import {useGlobalContext} from '../context';

function Title() {
    const {toggleMenu, isMenuOpen} = useGlobalContext();
    return (
        <div className='box title'>
            <header className='title'>
                <h2>Andrea Pignotti</h2>
                <div className={'menu-materia-test' + (isMenuOpen? " grey" : "")} onClick={toggleMenu} id="title-materia"></div>
            </header>  
        </div>
    )
}

export default Title
