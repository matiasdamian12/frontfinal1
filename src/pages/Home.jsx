import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const Home = () => {
	return (
		<div className="section m-5">
			<h2>Home Page</h2>
			
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src="{require('../img/seguro.jpg)}" />
				<Card.Body>
					<Card.Title>Seguro de hogar</Card.Title>
					<Card.Text>
                    Este seguro ofrece una indemnización por: el robo de los bienes del hogar. incendio de tu casa y de tus bienes. situaciones en las que un tercero pueda exigirte un resarcimiento por tu responsabilidad civil por hechos privados.
					</Card.Text>
                    <Button variant="primary">Comprar</Button>
				</Card.Body>
			</Card>

            <Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src="{require('../img/seguroauto.png)}" />
				<Card.Body>
					<Card.Title>Seguro de auto</Card.Title>
					<Card.Text>
                    Cubre los daños propios del auto asegurado ocasionado por incendio, rayo, robo, terremoto, derrumbe, erupción volcánica, vendaval, tornado, inundación, explosión, desórdenes públicos, daños por maldad, caída de objetos sobre el vehículo e impacto de proyectiles.
					</Card.Text>
                    <Button variant="primary">Comprar</Button>
				</Card.Body>
			</Card>

            <Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src="{require('../img/segurotecnologia.jpg)}" />
				<Card.Body>
					<Card.Title>Seguro de tecnologia</Card.Title>
					<Card.Text>
                    Se trata de un seguro destinado a cubrir todos los equipos tecnológicos portátiles del asegurado ante un robo, en el ámbito de la República Argentina.
					</Card.Text>
                    <Button variant="primary">Comprar</Button>
				</Card.Body>
			</Card>
		</div>
	)
}

export default Home;
