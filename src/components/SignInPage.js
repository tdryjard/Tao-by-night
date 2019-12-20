import React from "react";
import { Link } from 'react-router-dom'
import "./SignInPage.css";


const SignInPage = () => {
    return(
        <div>
        <h1 className="title">Inscrivez vous</h1>
        <div className="generale">
            
            <div className="contnersInput">
                <input type="text" name="pseudo" placeholder="Pseudo" className="inputSign"/>
                <input type="email" name="email" placeholder="email" className="inputSign"/>
                <input type="password" name="password" placeholder="password" className="inputSign"/>
            </div>
            <Link to="date"><button className="vava">Valider</button></Link>
        </div>
        </div>
    )
};


export default SignInPage;