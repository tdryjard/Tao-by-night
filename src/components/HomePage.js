import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {

    const [isExisting, setIsExisting] = useState(false);
    const [isNew, setIsNew] = useState(false);

    return(
        <div>
        <h1 className="title">5 étapes</h1>
        <div className="mainHomePage">
                <div className="circleAndText">
                    <p className="circle"></p>
                    <p>Se connecter</p>
                </div>
                <div className="circleAndText2">
                    <p classname="textHome">Quand je sors ?</p>
                    <p className="circle2"></p>
                </div>
                <div className="circleAndText3">
                    <p className="circle3"></p>
                    <p classname="textHome">Quelle ligne je prend ?</p>
                </div>
                <div className="circleAndText4">
                    <p classname="textHome">Je demande une réservation à l'heure choisie</p>
                    <p className="circle4"></p>
                </div>
                <div className="circleAndText5">
                    <p className="circle5"></p>
                    <p classname="textHome">Assez de demande pour emplir le bus ? go sortir ce week end !</p>
                </div>
            </div>
            <div className="theTwoButtons">
                <Link to="connexion"><button className="buttonsConnect">Connexion</button></Link>
                <Link to="inscription"><button className="buttonsConnect">Inscription</button></Link>
            </div>
        </div>
    )
};

export default HomePage;
