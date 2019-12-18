import React from 'react'
import "./Schedule.css";

function Schedule({ schedule, amount }) {

    return (
        <div className="horaire">
            <div className="info">
                <div className="schedule">Bus pour {schedule}h</div>
                <div className="percentage">{amount}%</div>
            </div>
            <div className="bar-container">
                <div className="bar" style={{ width: `${amount}%` }}></div>
            </div>
        </div>
    )
}

export default Schedule;
