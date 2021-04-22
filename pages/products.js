import React, { useState } from 'react';
import Container from "../components/Container";
import fetch from "isomorphic-fetch";
import Productos from "../components/Productos";
import Categorias from "../Components/Categorias";


function Products(props) {
    return (
        <Container>
            <h1>Productos</h1>
            <Categorias categories={props.categories} />
            <Productos products= {props.products} />
        </Container>
    )
}


Products.getInitialProps = async(ctx) => {
    const res = await fetch("http://localhost:6000/products");
    const data = await res.json();
    const res2 = await fetch("http://localhost:6000/categories");
    const data2 = await res2.json();
    return {products : data, categories: data2}
}

export default Products;