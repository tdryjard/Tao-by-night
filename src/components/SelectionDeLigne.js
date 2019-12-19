import React from "react";
import "./SelectionDeLigne.css"

const SelectionDeLigne = () => {
    return(
        <div className="busbus">
            <h1 className="selection">Sélection de la ligne</h1>
            <div className="ligneDeBus">
                <div className="box1">
                    <button className="ligne1">1</button>
                    <button className="ligne2">2</button>
                    <button className="ligne3">3</button>
                </div>
                <div className="box2">
                    <button className="ligne7">7</button>
                    <button className="ligne9">9</button>
                    <button className="ligne18">18</button>
               </div>
            </div>
        </div>
    )
};


export default SelectionDeLigne;