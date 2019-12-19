import React, {useState} from 'react'
import './Reservate.css'

const Reservate = () => {

    
    
    return(
        <div className="contentReservate">
            <div className="titleJour">
                <h4 className="textJour">Félicitation !</h4>
            </div>
            <div className="corpText">
    {/*if bus réservé pas encore plein*/}
                <h4 className="textReservate">Merci d'avoir effectué votre demande de réservation pour la nuit du  sur la ligne </h4>
                <h4 className="textReservate2">Vous receverez un mail avec votre ticket une fois qu'un bus aura atteint le demande minimum de demandes pour partir !</h4>
                <h4 className="textReservate3">Vos réservations :</h4>
                <button className="share">Partager</button>
            </div>
        </div>
    )
}

export default Reservate;