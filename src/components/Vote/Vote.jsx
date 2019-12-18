import React from 'react';
import "./Vote.css";
import Schedule from "./Schedule/Schedule";

function Vote() {
    return (
        <div className="vote">
            <h1>Horaires</h1>
            <Schedule amount={10} schedule={3} />
            <Schedule amount={60} schedule={1} />
            <Schedule amount={40} schedule={2} />
            <Schedule amount={30} schedule={4} />
            <button className="vote-btn">Vote</button>
        </div>
    )
}

export default Vote;
