import React from "react";
import Githubs from "./githubs";


function ProjectCard(props){
    return (
        <div className="project-card">
            <div className="left-project">
                <p className="heading">{props.heading}</p><br/>
                <Githubs address={props.address} addressgit={props.addressgit} /><br></br>
                {props.discription}
            </div>
            <div className="Right-project">
                <img src={props.addressimg} alt=""/>
            </div>
        </div>
    );
}

export default ProjectCard;