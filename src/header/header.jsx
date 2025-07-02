import { useNavigate } from "react-router-dom"
import Particles from '../../ReactBites/Particles/Particles';
import "./header.scss"
import { useRef, useState } from "react";
export default function Header(){
    const navigate = useNavigate()
    const closeRef = useRef();
    const [ showMenu,setShowMenu] = useState(false)
    const handelClose=()=>{
        setShowMenu(false)
    }

    const handelAbout=()=>{
  document.getElementById("secAbout")?.scrollIntoView({ behavior: "smooth" });
    setShowMenu(false);
}

const handelHome =()=>{
    document.getElementById("secHome")?.scrollIntoView({behavior: "smooth"});
    setShowMenu(false);
}

const handelSkills =()=>{
    document.getElementById("secSkills")?.scrollIntoView({behavior: "smooth"});
    setShowMenu(false);
}

const handelProjects =()=>{
    document.getElementById("secProjects")?.scrollIntoView({behavior: "smooth"});
    setShowMenu(false);
}

const handelContact =()=>{
    document.getElementById("secContact")?.scrollIntoView({behavior: "smooth"});
    setShowMenu(false);
}
    return(
        <div className="mainHeader">
            <div className="contentHeader">
                    <img src="/logo.gif" alt="logo" />

                    <i className=" list fa-solid fa-list" onClick={()=>{
                        setShowMenu(true)
                                }}></i>
                <div ref={closeRef} className={`Pages ${showMenu? 'show':''}`}>
                    <div className="btn close btn-danger" onClick={handelClose}><i className="fa-solid fa-x"></i></div>
                    <button className="btn btn-outline-dark" onClick={handelHome}>Home</button>
                    <button className="btn btn-outline-dark" onClick={handelAbout}>About</button>
                    <button className="btn btn-outline-dark" onClick={handelSkills}>Skills</button>
                    <button className="btn btn-outline-dark" onClick={handelProjects}>Projects</button>
                    <button className="btn btn-outline-dark" onClick={handelContact}>Contact Me</button>
                </div>
            </div>
        </div>
    )
}