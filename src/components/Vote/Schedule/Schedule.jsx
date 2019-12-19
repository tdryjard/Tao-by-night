import React, { useState, useEffect } from 'react'
import "./Schedule.css";

function Schedule({ schedule, votes }) {

    const [choosen, setChoosen] = useState(false);
    const [percentage, setPercentage] = useState(0);

    const limit = 15;
    
    useEffect(() => {
        setPercentage(percentageConversion(votes, limit));
    }, [])

    const chooseSchedule = event => {
        const schedule = event.currentTarget;
        schedule.classList.toggle('choosen');
        setChoosen(!choosen);
    }

    const percentageConversion = (currentValue, maxValue) => Math.floor((currentValue / maxValue) * 100);

    useEffect(() => {
        setPercentage(percentageConversion(votes + choosen, limit));
    }, [choosen]);

    return (
        <div className="schedule" onClick={chooseSchedule}>
            <div className="schedule-background"></div>
            <div className="info">
                <div className="schedule-time">Bus pour {schedule}h</div>
                <div className="percentage">{percentage}%</div>
            </div>
            <div className="bar-container">
                <div className="bar" style={{ width: `${percentage}%` }}>
                    <div className="bar-lightning" style={{animation: choosen && `choosen infinite ${1 / (percentage / 100)}s ease-in`}}></div>
                </div>
            </div>
        </div>
    )
}

export default Schedule;
