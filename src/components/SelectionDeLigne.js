import React from "react";
import { Link } from 'react-router-dom'
import "./SelectionDeLigne.css"

const SelectionDeLigne = () => {
    return(
        <div>
        <h1 className="title">Sélection de la ligne</h1>
            
            <div className="ligneDeBus">
                <div className="box1">
                    <Link to="/vote"><button className="ligne1">1</button></Link>
                    <Link to="/vote"><button className="ligne2">2</button></Link>
                    <Link to="/vote"><button className="ligne3">3</button></Link>
                </div>
                <div className="box2">
                <Link to="/vote"><button className="ligne7">7</button></Link>
                <Link to="/vote"><button className="ligne9">9</button></Link>
                <Link to="/vote"><button className="ligne18">18</button></Link>
               </div>
            </div>
            <div className="backLine"></div>
        </div>
    )
};


export default SelectionDeLigne;