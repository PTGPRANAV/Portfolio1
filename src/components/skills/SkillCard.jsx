import React from "react";

function SkillCard(props){
    return (
        <div className="skill-card">
            <div className="skill-card-img">
                <label><h6>{props.id}</h6></label>
                <img src={props.img} alt=""/>
                <label><h6>{props.name}</h6></label>
            </div>
        </div>
    );
}

export default SkillCard;