import {React, useState} from 'react'
import immagine from './../../photos/pigna.JPG'
import {getLevel, skills} from './../../utils'
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
                    info === 'none' ? <None/>
                    : info === 'menu-info' ? <Infobox/>
                    : info === 'menu-skills' ? <Skills/>
                    : <div>education</div>
                }
            </div>
        </div>
    )
}

function Skills(){//generated through the object "skills" taken from utils
    const {changeCursor} = useGlobalContext();
    const [info, setInfo] = useState('none');
    function changeInfo(id){
        changeCursor(id);
        setInfo(id);
    }
    return (
        <div className='info-skills'>
            <nav className='box skills-menu'>
                {
                    skills.map((el)=>{
                        return(<InfoMenuSkill id={el.type} text={el.type} key={el.type} functiontoggle={changeInfo}/>)
                    })
                }
            </nav>
            <section className='skills-text'>
                {
                    info === 'none' ? <p className='wrapper'>Select a skill tree!</p>
                    : skills.map((el)=>{
                        if(info === el.type){
                            return (<SkillLevels skillset={el} key={"skills"+el.type}/>)
                        }
                    })
                }
            </section>
        </div>
    )
}


function SkillLevels({skillset}){
    return(
        <div className='wrapper'>
        <div className='line'>
            <section className='flex-center'>
                {
                    skillset.stats.map((el)=>{
                        return(<div className='spacing' key={el.name}>{el.name}</div>)
                    })
                }
            </section>
            <section className='flex-center'>
                {
                    skillset.stats.map((el)=>{
                        return(<LevelBar percentage={el.level} key={el.name+el.level}/>)
                    })
                }
            </section>
        </div>
        </div>
    )
}

function LevelBar({percentage}){
    return(
        <div className='level spacing level-specil'>
            <div className='level-inside level-specil-inside' style={{width: percentage+"%"}}/>
            <div className='level-segment' style={{width:"80%"}}>
                <div className='level-segment no-height' style={{width:"75%"}}>
                    <div className='level-segment no-height' style={{width:"66%"}}>
                        <div className='level-segment no-height' style={{width:"50%"}}>

                        </div>
                    </div>
                </div>
            </div>
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
