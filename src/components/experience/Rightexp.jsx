import React from "react";
import EduCard from "./ExpCard";


function Rightexp(){
    return (
        <div className="exp-right">
            <EduCard year="2021-2025" course="Bachelor of Engineering (Computer Science)" institute="Army Institute of Technology, Pune" grade="Grade - 8.5"/>
            <EduCard year="2018-2020" course="Intermediate" institute="Army Public School, Pune" grade="Grade - 9.4"/>
            <EduCard year="2017-2018" course="Pre Intermediate" institute="Army Public School, Pune" grade="Grade - 8.5"/>
        </div>
    );
}

export default Rightexp;