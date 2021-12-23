import {React, useState} from 'react'
import immagine from './../../photos/pigna.JPG'
import {getLevel} from './../../utils'
import {useGlobalContext} from './../../context'




function About() {
    return (
        <div>
            <Stats/>
            <Info/>
            
        </div>
    )
}

function Info() {
    const {changeCursor} = useGlobalContext();
    const [info, setInfo] = useState('none');

    function changeInfo(id){
        changeCursor(id);
        setInfo(id);
    }

    return (
        <div>
            <div className='box info-menu'>
                <InfoMenu id='menu-info' text='Info' functiontoggle={changeInfo}/>
                <InfoMenu id='menu-skills' text='Skills' functiontoggle={changeInfo}/>
                <InfoMenu id='menu-education' text='Education' functiontoggle={changeInfo}/>
            </div>
            <div className='box content-box'>
                {
                    info == 'none' ? <None/>
                    : info== 'menu-info' ? <Infobox/>
                    : info== 'menu-skills' ? <Skills/>
                    : <div>education</div>
                }
            </div>
        </div>
    )
}

function Skills(){//da generare con un array sarebbe meglio!
    const {changeCursor} = useGlobalContext();
    const [info, setInfo] = useState('none');
    function changeInfo(id){
        changeCursor(id);
        setInfo(id);
    }
    return (
        <div className='info-skills'>
            <nav className='box skills-menu'>
                <InfoMenuSkill id="skill1" text="skill1" functiontoggle={changeInfo}/>
                <InfoMenuSkill id="skill2" text="skill2" functiontoggle={changeInfo}/>
                <InfoMenuSkill id="skill3" text="skill3" functiontoggle={changeInfo}/>
            </nav>
            <section className='skills-text'>
            {
                    info == 'none' ? <p>none</p>
                    : info== 'skill1' ? <p>skill1 text</p>
                    : info== 'skill2' ? <p>skill2 text</p>
                    : info== 'skill3' ? <p>skill3 text</p>
                    : <p>error</p>
                }
            </section>
        </div>
    )
}

function InfoMenuSkill({text, id, functiontoggle}){
    return(
        <h4 id={id} onClick={()=>functiontoggle(id)} className='skills-title clickable menu-link'>{text}</h4>
    )
}

function Infobox(){
    return(
        <div className='info-text'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium magna leo, at egestas elit eleifend et. Phasellus sed dapibus risus. Sed sed rhoncus ligula. Sed finibus imperdiet pretium. Maecenas felis tortor, cursus in dictum eget, consequat at odio. Donec purus ligula, porttitor sed mi quis, fringilla ultricies tortor. Vestibulum a ultricies justo. Maecenas ipsum nulla, ullamcorper et vestibulum malesuada, accumsan at mi. Nulla facilisi. Aenean nec lorem consectetur, bibendum lectus vitae, egestas eros.
Morbi sit amet malesuada orci. Nam luctus aliquam tellus. Maecenas ut justo fringilla, accumsan massa nec, porttitor erat. Nam ligula dolor, mattis vitae aliquet auctor, maximus sed sem. Praesent ligula mi, dignissim ac quam eget, tristique luctus tellus. In at tortor ultricies, ultricies massa at, consectetur tellus. In mollis sodales lectus, in faucibus purus viverra vestibulum. Curabitur mollis eu urna nec molestie. Sed interdum, purus vitae vestibulum tempus, sem orci laoreet nisi, et pharetra lacus mauris et ligula. Vestibulum rutrum blandit mi, eu sollicitudin arcu condimentum quis. Ut eu ante efficitur tortor porttitor tincidunt. Phasellus imperdiet quam ut suscipit suscipit. Cras pretium iaculis neque, id placerat nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
    )
}

function None(){
    return(
        <section className='info-box'>
            <h3>
                Select one of the fields above to know something more about me!
            </h3>
        </section>
    )
}

function InfoMenu({text, id, functiontoggle}){
    return(
        <div className='clickable menu-link' id={id} onClick={()=>functiontoggle(id)}>{text}</div>
    )
}



function Stats() {
    const stats = getLevel();
    //all level stats!
    const percentage = parseInt(((365-stats.difference)/365)*100);
    const percentage2 = 40;
    return (
        <div className='pg-container'>
            <img src={immagine} className='pg-img' alt="Andrea Pignotti"></img>
            <section className='pg-info'>
                <h3>Andrea Pignotti</h3>
                <div className='pg-column'>
                    <div className='pg-set'>
                        <div><span className='stats'>LV</span></div>
                        <div><span className='stats'>HP</span></div>
                        <div><span className='stats'>MP</span></div>
                    </div>
                    <div className='pg-set'>
                        <div className='centered'><span className='stats-values'>{stats.level}</span></div>
                        <div className='centered'><span className='stats-values'>{stats.hp}/{stats.hp}</span></div>
                        <div className='hp'></div>
                        <div className='centered'><span className='stats-values'>{stats.mp}/{stats.mp}</span></div>
                        <div className='mp'></div>
                    </div>
                    <div className='pg-set'>
                        <div className='stats-values'><span>next level</span></div>
                        <div className='level'>
                            <div className='level-inside' style={{width:(percentage+"%")}}></div>
                        </div>
                        <div className='stats-values'><span>Limit level 1</span></div>
                        <div className='level'>
                            <div className='level-inside' style={{width:(percentage2+"%")}}></div>
                        </div>
                    </div>
                
                </div>
                
            </section>
        </div>
    )
}


export default About
