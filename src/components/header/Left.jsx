import React from "react";
import pranav9 from "../../assets/pranav9.png";
import HeaderSocials from "./HeaderSocials";
function Left() {
    return (
        <section className="header-left">
            <HeaderSocials />
            <img src={pranav9} alt="me"/>
        </section>
    )
}

export default Left;