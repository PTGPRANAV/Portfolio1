import React from "react";
import Rightexp from "./Rightexp";
import './Experience.css';

function Education(){
    return (
        <section  id="experience">
            <div className="container">
                <h1 className="gobli center-text">experience.</h1>
                <div className="exp-section">
                    <Rightexp />
                </div>
            </div>
        </section>
    );
}

export default Education;