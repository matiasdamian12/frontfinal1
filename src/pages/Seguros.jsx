import React from 'react'
import Fondoseguros from "../assets/Fondoseguros.jpg"

const Seguros = () => {
    return (
    <div className='section m-5'>
        
        <h2>
        Seguros Page
        </h2> 
        <img  className="justify-content-evenly" src={Fondoseguros} alt='fondoseguro' />
    
    </div>
    )
}

export default Seguros;