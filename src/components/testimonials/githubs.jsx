import React from "react";



function Githubs(props){
    return (
        <div>
            <a href={props.address} className="btn-small" target="_blank">Demo</a>
            <a href={props.addressgit} className="btn-small" target="_blank">Github</a>
        </div>
    )
}

export default Githubs;