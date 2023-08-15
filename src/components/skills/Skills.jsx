import React from "react";
import "./Skills.css";
import SkillCard from "./SkillCard";
import mysql from "../../assets/mysql.png";
import html from "../../assets/html.png";
import science from "../../assets/science.png";
import css from "../../assets/css-3.png";
import js from "../../assets/js.png";
import nodejs from "../../assets/node-js.png";
import figma from "../../assets/figma.png";
import api1 from "../../assets/api.png";
import hackerrank1 from "../../assets/hackerrank1.png";
import cpp from "../../assets/c++.png";
import python from "../../assets/python1.png";
import leetcode from "../../assets/leetcode.png";
import codeforces from "../../assets/codeforces1.png";
import mongodb from "../../assets/mongodb.png";
import stack from "../../assets/stack.png";
import queue from "../../assets/queue.png";
import graph from "../../assets/graph.png";
import trie from "../../assets/Trie.png";

function Skills() {
    return (
        <section id="skills">
            <div className="container">
                <div className="">
                    <h1 className="gobli center-text">Competetive programming.</h1>
                    <div className="skill-container">
                        <div className="web-development">
                            <SkillCard img={codeforces} name="CodeForces" id="Deviated_Ray"/>
                            <SkillCard img={hackerrank1} name="HackerRank" id="@pranavdaundkar13"/>
                            <SkillCard img={leetcode} name="LeetCode" id="PTG_123"/>
                        </div>
                        
                    </div>
                    <h1 className="gobli center-text">Skills.</h1>
                    <div className="skill-container">
                        <div className="web-development">
                            <h4>languages</h4>
                            <SkillCard img={html} name="HTML" />
                            <SkillCard img={css} name="CSS" />
                            <SkillCard img={js} name="JavaScript" />
                            {/* <SkillCard img={nodejs} name="NODE" />
                            <SkillCard img={science} name="REACT" />
                            <SkillCard img={figma} name="FIGMA" />
                            <SkillCard img={api1} name="API" />
                            <SkillCard img={mysql} name="MYSQL" />
                            <SkillCard img={mongodb} name="MONGO" /> */}
                        </div>
                        <div className="web-development">
                            <h4>Frameworks</h4>
                            {/* <SkillCard img={html} name="HTML" />
                            <SkillCard img={css} name="CSS" />
                            <SkillCard img={js} name="JS" /> */}
                            <SkillCard img={nodejs} name="NODE" />
                            <SkillCard img={science} name="REACT" />
                            <SkillCard img={figma} name="FIGMA" />
                            {/* <SkillCard img={api1} name="API" /> */}
                            {/* <SkillCard img={mysql} name="MYSQL" />
                            <SkillCard img={mongodb} name="MONGO" /> */}
                        </div>
                        <div className="web-development">
                            <h4>Others</h4>
                            {/* <SkillCard img={html} name="HTML" />
                            <SkillCard img={css} name="CSS" />
                            <SkillCard img={js} name="JS" />
                            <SkillCard img={nodejs} name="NODE" />
                            <SkillCard img={science} name="REACT" /> */}
                            <SkillCard img={figma} name="FIGMA" />
                            <SkillCard img={api1} name="API" />
                            {/* <SkillCard img={mysql} name="MYSQL" />
                            <SkillCard img={mongodb} name="MONGO" /> */}
                        </div>
                        <div className="web-development">
                            <h4>Databases</h4>
                            {/* <SkillCard img={html} name="HTML" />
                            <SkillCard img={css} name="CSS" />
                            <SkillCard img={js} name="JS" />
                            <SkillCard img={nodejs} name="NODE" />
                            <SkillCard img={science} name="REACT" /> */}
                            {/* <SkillCard img={figma} name="FIGMA" />
                            <SkillCard img={api1} name="API" /> */}
                            <SkillCard img={mysql} name="MYSQL" />
                            <SkillCard img={mongodb} name="MONGO" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;