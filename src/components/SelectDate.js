import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './selectDate.css'

const SelectDate = () => {

    const [date, setDate] = useState('12-15-2019')

    return (
        <div className="contentDate">
            <div className="titleJour">
                <h4 className="textJour">Date de retour nocturne</h4>
            </div>
                <div className="weekEnd">
                    <Link to="/ligne"><button className="semaineDate"><p className="headDate">Samedi</p><p className="date">{date}</p></button></Link>
                    <Link to='/ligne'><button className="semaineDate"><p className="headDate">Dimanche</p><p className="date">22/12/2019</p></button></Link>
                    <Link to='/ligne'><button className="semaineDate"><p className="headDate">Lundi</p><p className="date">23/12/2019</p></button></Link>
                    <Link to='/ligne'><button className="semaineDate"><p className="headDate">mardi</p><p className="date">24/12/2019</p></button></Link>
                    <Link to='/ligne'><button className="semaineDate"><p className="headDate">mercredi</p><p className="date">25/12/2019</p></button></Link>
                    <Link to='/ligne'><button className="semaineDate"><p className="headDate">jeudi</p><p className="date">26/12/2019</p></button></Link>
                    <Link to='/ligne'><button className="semaineDate"><p className="headDate">vendredi</p><p className="date">27/12/2019</p></button></Link>
                </div>
        </div>
    )
};

export default SelectDate