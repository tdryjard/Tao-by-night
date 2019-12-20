
import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import './payment.css';
import emailjs from 'emailjs-com';

const Payment = () => {

    const [mailSub, setMailSub] = useState()

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'tao_by_night', e.target, 'user_JhMvHUyg9uzqFksC7Ppue')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          setMailSub(1)
      }

    return (
        <div className="contentFirst">
            <div className="titleJour">
                <h4 className="textJour">Réservation</h4>
            </div>
            
            <h4 className="textPay">Si la demande pour la ligne n'atteint pas le minimum requis vous ne serez pas débité</h4>
            <section>
            <input className="cardNumber" placeholder="numéro de carte" required="required"/>
            <input className="cardNumber1" placeholder="expiration" required="required"/>
            <input className="cardNumber2"placeholder="CVV" required="required"/>
            </section>
            

            <form className="contactForm" onSubmit={sendEmail}>
                <h4 className="textPay2">Restez au courant de l'avancé de votre réservation et recevez votre Qr Code par mail</h4>
                <input className="enterMail" placeholder="Adresse mail" required="required" type="email" name="user_email" />
                <input className="addMail" type="submit"/>
                {mailSub ? 
                <Link to="Reservate"><input className="reserveButton" value="Réserver" /></Link>
                :
                <input className="reserveButton2" value="Valider mail" required="required"/>
                }
                
            </form>

            

            </div>
    )
}

export default Payment