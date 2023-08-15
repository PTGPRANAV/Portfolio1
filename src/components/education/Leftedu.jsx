import React from "react";
import EduCard from "./EduCard";




function Leftedu(){
    return (
        <div className="edu-left content" id="edu-left">
            <EduCard year="2021-2025" course="Bachelor of Engineering (Computer Science)" institute="Army Institute of Technology, Pune" grade="Grade - 8.5"/>
            <EduCard year="2018-2020" course="Intermediate" institute="Army Public School, Pune" grade="Grade - 9.4"/>
            <EduCard year="2017-2018" course="Pre Intermediate" institute="Army Public School, Pune" grade="Grade - 8.5"/>
        </div>
    );
}

export default Leftedu;