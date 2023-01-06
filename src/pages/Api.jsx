import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

const Api = () => {
	const [datos, setDatos] = useState([]);

	//api de mis database

//const URL = "http://localhost:3001/datos";
const URL = "https://backfinal-production-1871.up.railway.app/datos";

//creamos ua funcion para usar el useefecg

	const getPersonas = async () => {
		try {
			const { data } = await axios.get(URL);
			setDatos(data.datos);
			console.log(data.datos);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getPersonas();
	}, []);

	return (
		<div className="section m-5">
			<h2>Api Page</h2>
			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						<th>#</th>
						<th>Nombre</th>
						<th>Apellido</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
                    {datos.map(dato =>
					<tr>
						<td>{dato._id}</td>
						<td>{dato.nombre}</td>
						<td>{dato.apellido}</td>
						<td>{dato.email}</td>
					</tr>
                    )}
				</tbody>
			</Table>
		</div>
	);
};

export default Api;
