import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import "./Vote.css";
import Schedule from "./Schedule/Schedule";

function Vote() {

    const [votes, setVotes] = useState([]);

    const getThings = async () => {
        const header = new Headers({'Authorization' : 'AAAA', 'Password': '1234', 'Email': 'thomas@gmail.com'});
		const response = await fetch('/index', { method: 'POST', headers: header });
		const jsonResponse = await response.json();
        setVotes(jsonResponse[1].votes);
        console.log(jsonResponse[1].votes)
	}

    useEffect(() => {
        getThings();
    }, [])


    return (
        <div className="vote">
            <div>
                <h1>Horaires</h1>
                <small>* plusieurs choix sont possibles</small>
            </div>
            {
                votes.length && votes.map((votes, index) => <Schedule votes={votes.number} schedule={votes.hour} />)
            }
            <Link to="/payment"><button className="vote-btn">Vote</button></Link>
        </div>
    )
}

export default Vote;
