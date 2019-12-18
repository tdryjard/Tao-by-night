import React from 'react';
import 'Pierre.css';

const Pierre = () => {
    return (
        <div className="mainPierreContainer">
            <div>
                <p className="msgAvertissement">Attentions vos horaires seront validés une fois seulement le nombre de passagers minimum atteint</p>
            </div>
            <div>
                <p className="titlePierre">Vos horaires sélectionnés:</p>
            </div>
            <div className="">
                {/*  Jauge d'Alex 1  */}
                {/*  Jauge d'Alex 2  */}
            </div>
            <button className="reserverButton">Réserver</button>
        </div>
    )
};

export default Pierre;