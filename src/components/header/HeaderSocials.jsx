import React from "react";
// import {BsLinkedin} from "react-icons/bs";
// import {SiCodeforces} from "react-icons/si";
// import {AiFillInstagram} from "react-icons/ai";
import instagram1 from "../../assets/instagram2.png";
import linkedin from "../../assets/linkedin2.png";
import twitter1 from "../../assets/twitter2.png";
import github1 from "../../assets/github2.png";

function HeaderSocial(){
    return (
        <div className="header_socials">
            <a href="https://www.instagram.com/p.t.g_pranav/" target="_blank" rel="noreferrer"><img src={instagram1} alt=""/></a>
            <a href="https://twitter.com/deviated_ray" target="_blank" rel="noreferrer"><img src={twitter1} alt=""/></a>
            <a href="https://www.linkedin.com/in/pranav-daundkar-690b21224/" target="_blank" rel="noreferrer"><img src={linkedin} alt=""/></a>
            <a href="https://github.com/PTGPRANAV" target="_blank" rel="noreferrer"><img src={github1} alt=""/></a>
        </div>
    );
}
export default HeaderSocial;