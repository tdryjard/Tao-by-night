import React from 'react';
import { Link } from 'react-router-dom'
import './Recap.css';

const Pierre = ({ choix }) => {
    console.log(choix);

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
                        <div className="bar" style={{ width: `${choix[0].percentage}%`}}></div>
                        {choix[0] ? <p>{choix[0].percentage}%</p> : null}
                    </div>
                    {choix[0] ? <p>0{choix[0].hour}:00</p> : null}
                </div>
                
                {choix[1] ? <div className="jaugesContainer2">
                    <p className="choiceText">2e choix</p>
                    <div className="fakeBar">
                        <div className="bar" style={{ width: `${choix[1].percentage}%`}}></div>
                        {choix[1] != null ? <p>{choix[1].percentage}%</p> : null}
                    </div>
                        {choix[1] ? <p>0{choix[1].hour}:00</p> : null}
                </div> : null}
            </div>
            <Link to="payment"><button className="reserverButton">Valider mes choix</button></Link>
        </div>
    )
};

export default Pierre;