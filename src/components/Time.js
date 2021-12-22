import {React, useState} from 'react'

function getActualTime(){
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    
    let time = hh + ": " + mm + ": " + ss;
    return time;
}


function Time() {
    let [time, setTime] = useState(getActualTime());
    let t= setTimeout(()=>{setTime(getActualTime())},1000);
    return (
        <div className='box menu time'>
            <h4>Time</h4> <h4>{time}</h4>
        </div>
    )
}

export default Time
