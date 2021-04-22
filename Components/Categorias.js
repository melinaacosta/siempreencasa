import React, { useState, setState } from "react";



const Categorias = (props) => {
    const [active, setActive] = useState("Todos");
    function showCategories(e) {
        e.preventDefault();
        setActive(e.target.value)
      }
   
    return (
        <div className="d-flex m-2 p-2 align-items-center justify-content-center">
        <button className="btn btn-primary m-4 d-flex justify-content-between align-items-center active disabled" type="button">Todos</button> 
        {props.categories.map(categoria => { 
            return (
            <div>
            <button onClick={showCategories} className="btn btn-primary m-4 d-flex justify-content-between align-items-center" type="button" value={categoria}>{categoria}</button>  
            </div>
            )
        })}
        </div>
    )
}

export default Categorias;