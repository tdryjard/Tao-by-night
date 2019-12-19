import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './selectDate.css'

const SelectDate = () => {

    return (
        <div className="contentDate">
            <div className="titleJour">
                <h4 className="textJour">Date de retour nocturne</h4>
            </div>
                <div className="tabDate">
                    <div className="weekEnd">
                <Link to='/payment'><button className="weekDate"><p className="headDate">Samedi</p><p className="date">21/12/2019</p></button></Link>
                <Link to='dimanche'><button className="weekDate"><p className="headDate">Dimanche</p><p className="date">22/12/2019</p></button></Link>
                </div>
                <div className="week">
                <Link to='lundi'><button className="semaineDate"><p className="headDate">Lundi</p><p className="date">23/12/2019</p></button></Link>
                <Link to='mardi'><button className="semaineDate"><p className="headDate">mardi</p><p className="date">24/12/2019</p></button></Link>
                <Link to='mercredi'><button className="semaineDate"><p className="headDate">mercredi</p><p className="date">25/12/2019</p></button></Link>
                <Link to='jeudi'><button className="semaineDate"><p className="headDate">jeudi</p><p className="date">26/12/2019</p></button></Link>
                <Link to='vendredi'><button className="semaineDate"><p className="headDate">vendredi</p><p className="date">27/12/2019</p></button></Link>
                </div>
                </div>
            
        </div>
    )
}

export default SelectDate