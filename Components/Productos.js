import React, { setState } from "react";


const Productos = (props) => {
    
    function displayClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        <div className="d-flex m-2 justify-content-center align-items-center align-content-center flex-wrap">
            {
               props.products.map(product => (
                <div className="card d-flex justify-content-center text-align-center m-2" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <a href="#" onClick={displayClick} style={{ textDecoration: "none" }}>
                            <h5 className="card-title">{product.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">$ {product.total_price}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">{product.categories}</h6>
                        </a>
                        <button type="button" className="btn btn-outline-success m-4">ADD</button>
                        <button type="button" className="btn btn-outline-danger m-4">REMOVE</button>
                    </div>

                </div>
                
            ))
            //  : (
            //     <div className="card d-flex justify-content-center text-align-center m-2" style={{ width: '18rem' }}>
            //         <div className="card-body">
            //             <a href="#" onClick={displayClick} style={{ textDecoration: "none" }}>
            //                 <h5 className="card-title">{product.name}</h5>
            //                 <h6 className="card-subtitle mb-2 text-muted">$ {product.total_price}</h6>
            //                 <h6 className="card-subtitle mb-2 text-muted">$ {product.categories}</h6>
            //             </a>
            //             <button type="button" className="btn btn-outline-success m-4">ADD</button>
            //             <button type="button" className="btn btn-outline-danger m-4">REMOVE</button>
            //         </div>
            //     </div>
            // )
            }


            {/* {props.recommendations.map(recommendation => (
        <div className="card" style={{ width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{recommendation.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">$ {recommendation.total_price}</h6>
                    <p className="card-text">{recommendation.description}</p>
                    <a href="#" className="card-link">ADD</a>
                    <a href="#" className="card-link">REMOVE</a>
                </div>
        </div>
        ))} */}
        </div>



    )
}

export default Productos;