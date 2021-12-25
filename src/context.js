import React, {useContext, useEffect, useState} from "react";
import useSound from "use-sound";
import { route } from "./utils";
import ClickSound from "./sound/cursor.mp3";
import ReturnSound from "./sound/cursorback.mp3";
import ErrorSound from "./sound/error.mp3";

const VOLUME = 0.25;

const AppContext = React.createContext();

//search if SETTINGS are present
let settings = {
    music:true,
}
if(localStorage.length>0){//if something is saved
    settings.music = localStorage.music;
    console.log("Settings taken from browser localstorage");
}else{//else we save the default values
    localStorage.music = settings.music;
}


const AppProvider = ({children})=>{
    let cursorInitState = {right:500, top:100, active:false, componentId:"none"}
    const [playCursor] = useSound(ClickSound, {volume: VOLUME});
    const [playReturnCursor] = useSound(ReturnSound, {volume: VOLUME});
    const [playError] = useSound(ErrorSound, {volume: VOLUME});
    const [isMusicActive, setIsMusicActive] =useState(settings.music=== 'true');//Use the localstorage for save/charge this setting

    const [cursorPosition, setCursorPosition] = useState(cursorInitState);
    const [isMenuOpen, setMenuOpen] = useState(false);


    //MUSIC
    function playMusic(id){
        if(isMusicActive){
            switch (id) {
                case 'cursor':
                    playCursor();
                    break;
                case 'cursorback':
                    playReturnCursor();
                    break;
                case 'error':
                    playError();
                    break;
                default:
                    console.error("Sound not found");
                    break;
            }
        }
    }

    //music settings
    function musicSettings(setting){
        if(setting=='disable'){
            if(isMusicActive){
                setIsMusicActive(!isMusicActive);
                settingsCursor('sound-setting');
            }else{
                playMusic('error');
            }
        }else if(setting == 'enable'){
            if(!isMusicActive){
                setIsMusicActive(!isMusicActive);
                settingsCursor('sound-setting');
            }else{
                playMusic('error');
            }
        }else if(setting == 'toggle'){
            setIsMusicActive(!isMusicActive);
            settingsCursor('sound-setting');
        }
    }

    function settingsCursor(id){//move the cursor on the setting name and play the sound if is already here
        if(cursorPosition.componentId==id){
            playMusic('cursor');
        }else{
            changeCursor(id);
        }
    }

    useEffect(()=>{localStorage.music=isMusicActive;},[isMusicActive]);//save the music settings in localstorage
    //MUSIC

    //MENU MOBILE
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
    //MENU MOBILE


    //CURSOR
    function changeCursor(id){
        if(window.innerWidth<=750 && !isMenuOpen){
            if(id== cursorPosition.componentId){
                var offsets = document.getElementById("title-materia").getBoundingClientRect();
                setCursorPosition({right:offsets.x, top:offsets.y+window.scrollY-10, active:true, componentId:id});
            }else{
                setTimeout(()=>{
                    var offsets = document.getElementById(id).getBoundingClientRect();
                    setCursorPosition({...cursorPosition, right:offsets.x, top:offsets.y+window.scrollY-10, active:true});
                    playMusic('cursor');
                },1);
                
            }
        }else if(window.innerWidth<=750){
            toggleMenu(false,id);
            if(id==cursorPosition.componentId){
                playMusic('cursorback');
            }else{
                playMusic('cursor');
            }
        }else{
            var offsets = document.getElementById(id).getBoundingClientRect();
            //console.log(offsets);
            if(cursorPosition.componentId!=id){
                playMusic('cursor');
            }
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
    //CURSOR

    return(<AppContext.Provider value={{cursorPosition, changeCursor, isMenuOpen, toggleMenu, setCursorPosition, playMusic, isMusicActive, musicSettings}}>
        {children}
    </AppContext.Provider>)
}

const useGlobalContext = ()=>{
    return useContext(AppContext);
}


export {AppProvider, useGlobalContext};