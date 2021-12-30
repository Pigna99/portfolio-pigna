const route = [{text:"Home", route:"/"}, {text:"About Me", route:"/aboutme"}, {text:"Works", route:"/works"}, {text:"Blog", route:"/blog"}, {text:"Contact Me", route:"/contact"},  {text:"Settings", route:"/settings"},];

const skills = [
    {
        type:"Programming",
        stats:[
            {name: "Javascript", level: 100}, {name: "Python", level: 20}, {name: "C++", level: 60}, {name: "Php", level: 40}, {name: "Html", level: 80}, {name: "Css", level: 80}
        ]
    },
    {
        type:"Languages",
        stats:[
            {name: "English", level:60}, {name:"Italian", level:100}, {name:"Russian", level:20}
        ]
    },
    {
        type:"Soft Skills",
        stats:[
            {name: "Communication", level:100}, {name:"Problem-Solving", level:80}, {name:"Organisation", level:80}, {name:"Teamwork", level:80}, {name:"Leadership", level:60}, {name:"Creativity", level:100}
        ]
    }

]


function getLevel(){
    const birthday = new Date(1999, 2, 28);
    const today= new Date();
    let level;
    //eta
    if(birthday.getMonth()<today.getMonth()){
        level =(today.getFullYear()-birthday.getFullYear());
        birthday.setFullYear(today.getFullYear()+1);
    }else if(birthday.getMonth()===today.getMonth() && birthday.getDate()<=today.getDate()){
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

export {route, getLevel, skills};