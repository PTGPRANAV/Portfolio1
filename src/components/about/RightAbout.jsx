import React from "react";
import lightbulb from "../../assets/lightbulb.svg";
import man from "../../assets/man.svg"


function RightAbout() {
    return (
        <div className="about-right">
            <div className="who-am-i">
                <span><img src={lightbulb} alt=""/></span>
                <h2 className="changa-One">WHO AM I? </h2>
                Hello! My name is <span>Pranav Daundkar</span>.<br/>
                I study computer science engineering for my bachelor's degree at the Army Institute of Technology. I'm a software engineer who's always looking for fresh approaches to common issues. I adore team projects. I've previously finished a couple internships as well. I've already contributed to more than a dozen projects and helped manage one project for a dependable client of the business. I have a deep understanding of what it takes to manage an effective project.
            </div>
        </div>
    );
}

export default RightAbout;