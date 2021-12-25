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
                <InfoMenuSkill id="programming" text="Programming" functiontoggle={changeInfo}/>
                <InfoMenuSkill id="skill2" text="skill2" functiontoggle={changeInfo}/>
                <InfoMenuSkill id="skill3" text="skill3" functiontoggle={changeInfo}/>
            </nav>
            <section className='skills-text'>
            {
                    info == 'none' ? <p>none</p>
                    : info== 'programming' ? <ProgrammingLang/>
                    : info== 'skill2' ? <p>skill2 text</p>
                    : info== 'skill3' ? <p>skill3 text</p>
                    : <p>error</p>
                }
            </section>
        </div>
    )
}

function ProgrammingLang(){
    return(
        <div className='line'>
            <section>
                <div className='spacing'>Javascript</div>
                <div className='spacing'>Python</div>
                <div className='spacing'>C++</div>
                <div className='spacing'>Php</div>
            </section>
            <section>
                <div className='level spacing level-specil'></div>
                <div className='level spacing level-specil'></div>
                <div className='level spacing level-specil'></div>
                <div className='level spacing level-specil'></div>
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
            <div className='superinfo'><h3>Contacts</h3><br/><span alt="number">+39 331-134-9125</span><br/><span alt="email" style={{fontSize:"15px"}}>andrea.pignotti@studenti.unitn.it</span></div>
            <p>
                Born in 1999, in love with videogames, sport and music since childhood. After High School he started to develop the idea of becoming a programmer. Actually he study Computer Science at the University of Trento (Italy). He enjoys do small programming projects and is always looking for new motivations and ideas.
            </p>
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
