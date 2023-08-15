import React from "react";
import CTA from "./CTA";
import developer11 from "../../assets/developer11.png";
import TypedText from "./TypedText"

function Right() {
    return (
        <section className="header-right">
            <div className="header-right-flex">
                <div className="right-software">
                    <img src={developer11} alt=""/>
                    Hello There 👋, <br/>
                    I'm a, &nbsp;
                    <span className="info-name"><TypedText /></span><br/>
                    An aspiring techno geek seeking to tackle<br />
                    new challenges and built intelligent solutions<br />
                    to help make a dent in this world.
                    <CTA />
                </div>

            </div>
        </section>
    );
}

export default Right;