import React, { useState } from "react";
import {BsCloudSun} from "react-icons/bs";
import "./Dark.css";



function Dark() {
    const [buttonState, setButtonState] = useState("true");

    function Night(){
        setButtonState(!buttonState);
        document.body.style.backgroundColor = buttonState ? '#333333' : 'white';
    }

    return (
        <div>
            <button onClick={Night} id="cloud-sun" href="" style={{color: buttonState ? "var(--color-primary)" : 'white' }} ><BsCloudSun/></button>
        </div>
    );
}

export default Dark;