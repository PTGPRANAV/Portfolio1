import React from "react";
import pranav4 from "../../assets/pranav4.png";
import LeftAbout from "./LeftAbout";
import RightAbout from "./RightAbout";
import "./about.css";

function About() {
    return (
        <section id="about">
            <div className="container about_container">
                <h1 className="gobli center-text">Know me.</h1>
                <div className="about-container-flex">
                    <LeftAbout />
                    <RightAbout />
                </div>
            </div>
        </section>
    );
}

export default About;