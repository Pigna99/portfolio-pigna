const route = [{text:"Home", route:"/"}, {text:"About Me", route:"/aboutme"}, {text:"Works", route:"/works"}, {text:"Blog", route:"/blog"}, {text:"Contact Me", route:"/contact"},  {text:"Settings", route:"/settings"},];

function getLevel(){
    const birthday = new Date(1999, 2, 28);
    const today= new Date();
    let level;
    //eta
    if(birthday.getMonth()<today.getMonth()){
        level =(today.getFullYear()-birthday.getFullYear());
        birthday.setFullYear(today.getFullYear()+1);
    }else if(birthday.getMonth()==today.getMonth() && birthday.getDate()<=today.getDate()){
        level =(today.getFullYear()-birthday.getFullYear());
        birthday.setFullYear(today.getFullYear()+1);
    }else{
        level =(today.getFullYear()-birthday.getFullYear())-1;
        birthday.setFullYear(today.getFullYear());
    }
    //days to next level (approx)
    
    let difference = (birthday.getTime()-today.getTime())/ (1000 * 3600 * 24);
    let hp = 111*level;
    let mp = 8*level;

    return {level, difference, hp, mp};
}

export {route, getLevel};