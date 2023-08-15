import React from "react";
import social from "../../assets/SocialIcons.svg";
import social1 from "../../assets/SocialIcons1.svg";
import social2 from "../../assets/SocialIcons2.svg";
import social3 from "../../assets/SocialIcons3.svg";
import social4 from "../../assets/SocialIcons4.svg";
import vector from "../../assets/Vector.svg";

function LeftAbout(){
    return (
        <div className="about-left">
            <a href="https://discord.com/channels/@me/" target="_blank"><img src={social1} alt=""/></a>
            <a href=""><img src={social} alt="" target="_blank"/></a>
            <a href="https://www.linkedin.com/in/pranav-daundkar-690b21224/" target="_blank"><img src={vector} alt=""/></a>
            <a href="https://github.com/PTGPRANAV" target="_blank"><img src={social4} alt=""/></a>
            <a href="https://www.instagram.com/p.t.g_pranav/" target="_blank"><img src={social3} alt=""/></a>
        </div>
    );
}

export default LeftAbout;