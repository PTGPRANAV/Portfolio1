import React from "react";
import Leftedu from "./Leftedu";
import Rightedu from "./Rightedu";
import './Education.css';

function Education(){
    return (
        <section  id="education">
            <div className="container">
                <h1 className="gobli center-text">Education.</h1>
                <div className="edu-section" id="edu-section">
                    <Leftedu />
                    <Rightedu />
                </div>
            </div>
        </section>
    );
}

export default Education;