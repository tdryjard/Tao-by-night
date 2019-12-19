import React from 'react';
import './Recap.css';

const Pierre = () => {
    return (
        <div className="mainPierreContainer">
            <div>
                <p className="msgAvertissement">Attentions vos horaires seront validés une fois seulement le nombre de
                    passagers minimum atteint</p>
            </div>
            <div>
                <p className="titlePierre">Vos horaires sélectionnés:</p>
            </div>
            <div className="alexJauges">
                <div className="jaugesContainer1">
                    <p className="choiceText">1er choix</p>
                    <div className="fakeBar">
                        <div className="fakeContent1">
                            35%
                        </div>
                    </div>
                    <p>Le 28/12/2019, à 02:00</p>
                </div>
                <div className="jaugesContainer2">
                    <p className="choiceText">2e choix</p>
                    <div className="fakeBar">
                        <div className="fakeContent2">
                            60%
                        </div>
                    </div>
                    <p>Le 28/12/2019, à 03:00</p>
                </div>
            </div>
            <button className="reserverButton">Valider mes choix</button>
        </div>
    )
};

export default Pierre;