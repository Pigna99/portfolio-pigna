import React from 'react'
import immagine from './../../photos/pigna.JPG'
import {getLevel} from './../../utils'




function About() {
    const stats = getLevel();
    //all level stats!
    const percentage = parseInt(((365-stats.difference)/365)*100);
    const percentage2 = 40;

    return (
        <div className='pg-container'>
            <img src={immagine} className='pg-img'></img>
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
