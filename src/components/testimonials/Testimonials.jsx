import React from "react";
import "./Testimonials.css";
import ProjectCard from "./ProjectCard";
import Mausam from "../../assets/mausam.png"
import dragon from "../../assets/dragon.png";
function Testimonials(){
    return (
        <section className="container" id="testimonials">
            <h1 className="gobli center-text">Projects.</h1>
            <div className="Projects">
                <ProjectCard heading="Mausam" address="https://ptgpranav.github.io/Weather-site/    " addressgit="https://github.com/PTGPRANAV/Weather-site" addressimg={Mausam} discription="Designed and developed a weather website utilizing Rapid API, providing accurate and real-time weather data, an intuitive user interface, and personalized forecasts"/>
                <ProjectCard heading="NumismaChef" address="" addressgit="" addressimg={dragon} discription="Created an engaging and interactive game, Feed the Dragon, using Pygame, featuring intuitive controls, captivating graphics, and challenging gameplay mechanics to entertain players."/>
            </div>
        </section>
    );
}

export default Testimonials;