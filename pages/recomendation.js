import React, { useState } from 'react';
import Container from "../components/Container";
import fetch from "isomorphic-fetch";
import Recomendaciones from "../components/Recommendaciones";


function Recommendations(props) {
    return (

        <Container>
            <h1>Recomendaciones</h1>
            <Recomendaciones recommendations= {props.recommendations} />
        </Container>


    )
}

Recommendations.getInitialProps = async(ctx) => {
    const res = await fetch("http://localhost:6000/recommendations");
    const data = await res.json();
    return {recommendations : data}
}

export default Recommendations;