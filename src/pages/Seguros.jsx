import React from 'react'
import Seguro from "../assets/Seguro.jpg"

const Seguros = () => {
    return (
    <div className='section m-5'>
        
        <h2>
        Seguros Page
        </h2> 
        <img  className="justify-content-evenly" src={Seguro} alt='fondoseguro' />
    
    </div>
    )
}

export default Seguros;