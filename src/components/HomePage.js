import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {

    const [isExisting, setIsExisting] = useState(false);
    const [isNew, setIsNew] = useState(false);

    return(
        <div className="mainHomePage">
            <h1 className="titleHome">3 étapes</h1>
            <div className="circleContainer">
                <div className="circleAndText">
                    <p className="circle nb1">1</p>
                    <p>Je me connecte ou m'inscris</p>
                </div>
                <div className="circleAndText">
                    <p className="circle nb1">2</p>
                    <p>Je choisis ma ligne de bus</p>
                </div>
                <div className="circleAndText">
                    <p className="circle nb1">3</p>
                    <p>Je valide et procède au paiement</p>
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
