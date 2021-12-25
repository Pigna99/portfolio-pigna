import React from 'react';
import {useGlobalContext} from './../../context'

function Settings() {
    const {isMusicActive, musicSettings} = useGlobalContext();
    return (
        <div className='content-box-test line'>
            <section>
                <div className='setting-margin'><span className='stats setting' onClick={()=>musicSettings('toggle')} id="sound-setting">Sound</span></div>
            </section>
            <div className='setting-column'>
                <div className='setting-margin'><span className={'setting' + (isMusicActive ? "": " disabled")} onClick={()=>musicSettings('enable')}>Active</span> <span className={'setting' + (isMusicActive ? " disabled": "")} onClick={()=>musicSettings('disable')}>Disabled</span></div>
            </div>
        </div>
    )
}

export default Settings
