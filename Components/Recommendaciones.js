import React, { setState } from "react";

const Recommendaciones = (props) => {
    return (
        <div>
            {props.recommendations.map(recommendation => (
                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">{recommendation.product_id}</h5>
                        <p className="card-text">{recommendation.recommendations[0]}</p>
                        <p className="card-text">{recommendation.recommendations[1]}</p>
                        <p className="card-text">{recommendation.recommendations[2]}</p>
                        <a href="#" className="card-link">ADD</a>
                        <a href="#" className="card-link">REMOVE</a>
                    </div>
                </div>
            ))}
        </div>



    )
}

export default Recommendaciones;