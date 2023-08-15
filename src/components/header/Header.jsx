import React, { useState } from "react";
import "./Header.css";
import Left from "./Left";
import Right from "./Right";
import {BsCloudSun} from "react-icons/bs";



function Header() {

    return (
        <header>
            <section className="container header-container">
                <h1 className="gobli">Pranav.</h1>
                <div className="header-flex">
                    <Left />
                    <Right />
                </div>
            </section>
        </header>
    );
}

export default Header;