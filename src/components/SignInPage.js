import React from "react";
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
            <button className="vava">Valider</button>
        </div>
    )
};


export default SignInPage;