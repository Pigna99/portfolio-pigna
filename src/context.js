import React, {useContext, useState} from "react";

const AppContext = React.createContext();



const AppProvider = ({children})=>{
    const [cursorPosition, setCursorPosition] = useState({right:500, top:100, active:false, componentId:"none"});


    function changeCursor(id){
        var offsets = document.getElementById(id+"").getBoundingClientRect();
        console.log(offsets);
        setCursorPosition({right:offsets.x, top:offsets.y, active:true, componentId:id});
    }

    //sposta il cursore nella posizione corretta se avviene un resize
    function resizedw(){
        // Haven't resized in 100ms!
        changeCursor(cursorPosition.componentId);
    }
    
    let doit;
    window.onresize = function(){
      clearTimeout(doit);
      doit = setTimeout(resizedw, 10);
    };



    return(<AppContext.Provider value={{cursorPosition, changeCursor}}>
        {children}
    </AppContext.Provider>)
}

const useGlobalContext = ()=>{
    return useContext(AppContext);
}


export {AppProvider, useGlobalContext};