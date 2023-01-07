import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios';


const Registro = () => {

    //api de la database
//const URL = 'http://localhost:3001/crear';
const URL = 'https://backfinal-production-1871.up.railway.app/crear';



//inicializamos variables vacias para usestate
const [inputs, setInputs] = useState({
    nombre:"",
    apellido:"",
    email:""
})

//funcion para setear las variables

const handleChange = (e) =>{
    setInputs({
        ...inputs,
        [e.target.name]: e.target.value
    })
}

//funcion del post

const handleClick = async () => {
    await axios.post(URL,inputs)//enviamos datos
    setInputs({  //limpiamos datos
        nombre:"",
        apellido:"",
        email:""
    }) 
}

	return (
		<div className="section m-5">
			
            <h2>Registrate</h2>

			<Form>

                {Object.keys(inputs).map((key, index) => (
				<Form.Group className="mb-3" key={index}>
					<Form.Label id="form">
                        {key}
                    </Form.Label>
					<Form.Control 
                    name={key}
                    value={inputs[key]}
                    onChange={handleChange}
                    required
                    />
					</Form.Group>
                ))}
                
                <div className="texte-center w-80">
				<Button variant="primary" type="submit" onClick={handleClick}>
					Enviar
				</Button>
                </div>
			</Form>
		</div>
	);
};

export default Registro;
