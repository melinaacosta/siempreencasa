import React, { setState } from "react";
import Link from "next/link";


const Nav = (props) => {
    return (
            <nav className="navbar navbar-light bg-light justify-content-between">
            <Link href="/"><a className="navbar-brand">Home</a></Link>
            <Link href="/products"><a className="navbar-brand">Productos</a></Link>
            <Link href="/recomendation"><a className="navbar-brand">Recomendados</a></Link>
            
    
            <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </nav>
    )
}

export default Nav;