import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import "./Vote.css";
import Schedule from "./Schedule/Schedule";

function Vote() {

    const [votes, setVotes] = useState([]);
    const [userVotes, setUserVotes] = useState([0, 0, 0, 0]);
    const [userConnected, setUserConnected] = useState({});

    const getThings = async () => {
        const header = new Headers({'Authorization' : 'AAAA', 'Password': '1234', 'Email': 'thomas@gmail.com', 'DateTime': '21-12-2019' });
		const response = await fetch('/vote', { method: 'POST', headers: header });
		const jsonResponse = await response.json();
        setVotes(jsonResponse.votes);
        console.log(jsonResponse);
    }
    
    const applyVotes = async (votes) => {
        const header = new Headers({'Authorization' : 'AAAA', 'Password': '1234', 'Email': 'thomas@gmail.com', 'DateTime': '21-12-2019', 'Numero': 3 , 'Votes': votes });
		const response = await fetch('/apply-vote', { method: 'POST', headers: header });
		const jsonResponse = await response.json();
        //setVotes(jsonResponse[1].votes);
        console.log(jsonResponse);
    }
    
    const login = async () => {
        const header = new Headers({'Authorization' : 'AAAA', 'Password': '1234', 'Email': 'thomas@gmail.com' });
		const response = await fetch('/login', { method: 'POST', headers: header });
		const jsonResponse = await response.json();
        //setVotes(jsonResponse[1].votes);
        const user = jsonResponse.user;
         setUserConnected(user);    
    }

    useEffect(() => {
        getThings();
        login();
    }, [])

    useEffect(() => {
        console.log(userConnected)
    }, [userConnected]);

    const changeVote = (index, value) => {
        console.log(index)
        const pipoVotes = [...userVotes];
        pipoVotes[index] = value;
        setUserVotes(pipoVotes);
    }

    const addVote = () => {
        console.log(userVotes);
        applyVotes(userVotes);
    }


    return (
        <div className="vote">
            <div>
                <h1>Horaires</h1>
                <small className="tip">* plusieurs choix sont possibles</small>
            </div>
            {
                votes.length && votes.map((vote, index) => <Schedule votes={vote.number} schedule={vote.hour} key={index} voteNumero={index} changeVote={changeVote} />)
            }
            <Link to="/recap"><button className="vote-btn">Vote</button></Link>
        </div>
    )
}

export default Vote;
