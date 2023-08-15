import React from "react";
import degree from "../../assets/degree.png"

function EduCard(props) {
    return (
        <div className="exp-card">
            <div className="exp-card-inner">
                <div>
                    <img src={degree} alt=""/>
                </div>
                <div>
                    <div class="course">
                        {props.year}
                    </div>
                    <div class="course">
                        <h4>{props.course}</h4>
                    </div>
                    <div class="institute">
                        {props.institute}
                    </div>
                    <div class="grade">
                        {props.grade}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default EduCard;