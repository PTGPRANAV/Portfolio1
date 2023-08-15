import React from "react";
import CV from "../../assets/CV.pdf";



function CTA(){
    return (
        <div>
            <a href={CV} download className="btn btn-primary">Download CV</a>
            <a href="#contact" className="btn btn-primary">Contact</a>
        </div>
    )
}

export default CTA;