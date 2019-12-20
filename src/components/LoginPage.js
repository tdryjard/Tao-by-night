import React from 'react';
import { Link } from 'react-router-dom'
import "./LoginPage.css"

const LoginPage = () => {
    return(
        <div>
        <h1 className="title">Connectez vous</h1>
        <div className="cocolor">
            
            <div className="inputTotal">
                <div className="input1">
                    <input type="email" name="email" id="email" placeholder="Email"/>
                </div>

                <div className="input2">
                    <input type="password" name="password" id="password" placeholder="Mot de passe"/>
                </div>
            </div>
            <Link to="date"><button className="connexion">Connexion</button></Link>

        </div>
        </div>
    )
};



export default LoginPage;