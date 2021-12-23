import React, {useContext, useEffect, useState} from "react";
import { route } from "./utils";

const AppContext = React.createContext();






const AppProvider = ({children})=>{
    let cursorInitState = {right:500, top:100, active:false, componentId:"none"}
    const [cursorPosition, setCursorPosition] = useState(cursorInitState);
    const [isMenuOpen, setMenuOpen] = useState(false);


    function toggleMenu(ev,id){
        //console.log(!isMenuOpen);
        if(isMenuOpen){//se stiamo chiudendo il menu
            var offsets = document.getElementById("title-materia").getBoundingClientRect();
            setCursorPosition({right:offsets.x, top:offsets.y+window.scrollY-10, active:true, componentId: id || cursorPosition.componentId});
        }else{//se stiamo aprendo il menu
            if(cursorPosition.componentId!="none"){
                //console.log(cursorPosition.componentId);
                setTimeout(()=>{
                    var offsets = document.getElementById(cursorPosition.componentId).getBoundingClientRect();
                    setCursorPosition({right:offsets.x-300, top:offsets.y+window.scrollY, active:true, componentId: id || cursorPosition.componentId});
                },0);
                
            }
        }
        setMenuOpen(!isMenuOpen);

    }


    function changeCursor(id){
        if(window.innerWidth<=750 && !isMenuOpen){
            if(id== cursorPosition.componentId){
                var offsets = document.getElementById("title-materia").getBoundingClientRect();
                setCursorPosition({right:offsets.x, top:offsets.y+window.scrollY-10, active:true, componentId:id});
            }else{
                setTimeout(()=>{
                    var offsets = document.getElementById(id).getBoundingClientRect();
                    setCursorPosition({...cursorPosition, right:offsets.x, top:offsets.y+window.scrollY-10, active:true});
                },1);
                
            }
            
        }else if(window.innerWidth<=750){
            toggleMenu(false,id);
        }else{
            var offsets = document.getElementById(id).getBoundingClientRect();
            //console.log(offsets);
            setCursorPosition({right:offsets.x, top:offsets.y+window.scrollY, active:true, componentId:id});
        }
        
        
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


    return(<AppContext.Provider value={{cursorPosition, changeCursor, isMenuOpen, toggleMenu, setCursorPosition}}>
        {children}
    </AppContext.Provider>)
}

const useGlobalContext = ()=>{
    return useContext(AppContext);
}


export {AppProvider, useGlobalContext};