import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './payment.css'

const Payment = () => {

    const [test, settest] = useState('')

    return (
        <div className="contentFirst">
            <div className="titleJour">
                <h4 className="textJour">Réservation</h4>
            </div>
            <h4 className="textPay">Si la demande pour la ligne n'atteint pas le minimum requis vous ne serez pas débité</h4>
            <section>
            <input className="cardNumber" placeholder="numéro de carte"/>
            <input className="cardNumber1" placeholder="expiration"/>
            <input className="cardNumber2"placeholder="CVV"/>
            </section>
            <h4 className="textPay2">Restez au courant de l'avancé de votre réservation et recevez votre Qr Code par mail</h4>
            <input className="enterMail" placeholder="Adresse mail" required="required"></input> 
            <div className="placeButton">
            <Link to="/reservate"><button className="reserveButton">Réserver</button></Link>
            </div>
        </div>
    )
}

export default Payment