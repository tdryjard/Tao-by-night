import React, { useState } from 'react';
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
                    <p>Je choisis ma ligne</p>
                </div>
                <div className="circleAndText">
                    <p className="circle nb1">3</p>
                    <p>Je valide et procède au paiement</p>
                </div>
            </div>
            <div className="theTwoButtons">
                <button className="buttonsConnect">Connexion</button>
                <button className="buttonsConnect">Inscription</button>
            </div>
        </div>
    )
};

export default HomePage;
