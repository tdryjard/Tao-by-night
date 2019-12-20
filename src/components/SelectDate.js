import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './selectDate.css'

const SelectDate = () => {

    const [date, setDate] = useState('12-15-2019')

    return (
        <div>
        <h1 className="title">Date de retour nocturne</h1>
                <div className="contentDate">
                    <Link to="/ligne"><button className="weekDate"><p className="headDate">Samedi</p></button></Link>
                    <Link to='/ligne'><button className="weekDate"><p className="headDate">Dimanche</p></button></Link>
                    <Link to='/ligne'><button className="semaineDate"><p className="headDate">Lundi</p></button></Link>
                    <Link to='/ligne'><button className="semaineDate"><p className="headDate">mardi</p></button></Link>
                    <Link to='/ligne'><button className="semaineDate"><p className="headDate">mercredi</p></button></Link>
                    <Link to='/ligne'><button className="semaineDate"><p className="headDate">jeudi</p></button></Link>
                    <Link to='/ligne'><button className="semaineDate"><p className="headDate">vendredi</p></button></Link>
                </div>
        </div>
    )
};

export default SelectDate