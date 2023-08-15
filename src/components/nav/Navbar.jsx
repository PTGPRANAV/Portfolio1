import React from "react";
import "./Navbar.css";
import {AiOutlineUser} from "react-icons/ai";
import {AiFillHome} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {AiOutlinePhone} from "react-icons/ai";
import {BiMessageSquareDetail} from "react-icons/bi"
import { useState } from "react";
import {BiFootball} from "react-icons/bi";

function Navbar(){
    const [activeNav, setActiveNav] = useState("#");
    // function changeActiveNav(props){
    //     setActiveNav(props);
    // }
    return (
        <nav>
            <a href="#testimonials" onClick={()=>setActiveNav('#testimonials')} className={activeNav==='#testimonials'? 'active' : ''}><BiBook/></a>
            <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'? 'active' : ''}><AiOutlineUser/></a>
            <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#'? 'active' : ''}><AiFillHome/></a>
            <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'? 'active' : ''}><AiOutlinePhone/></a>
            <a href="#skills" onClick={()=>setActiveNav('#skills')} className={activeNav==='#skills'? 'active' : ''}><BiFootball/></a>
        </nav>
    );
}

export default Navbar;