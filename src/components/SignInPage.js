import React from "react";
import { Link } from 'react-router-dom'
import "./SignInPage.css";


const SignInPage = () => {
    return(
        <div className="generale">
            <h1 className="inscri">Inscrivez vous</h1>
            <div className="contnersInput">
                <input type="text" name="pseudo" placeholder="Pseudo" id="name"/>
                <input type="email" name="email" placeholder="email" id="mail"/>
                <input type="password" name="password" placeholder="password" id="mpd"/>
            </div>
            <Link to="date"><button className="vava">Valider</button></Link>
        </div>
    )
};


export default SignInPage;