import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const navbar = () => {
	return (

		<Navbar className="sticky-top "  collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="/Home">Seguros Good Life</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/Home">Home</Nav.Link>
						<Nav.Link href="/Registro">Registro</Nav.Link>
						<Nav.Link href="/Api">Api</Nav.Link>
						<Nav.Link href="/About">About</Nav.Link>
						<Nav.Link href="/Seguros">Seguros</Nav.Link>
					</Nav>
					
				</Navbar.Collapse>
			</Container>
			
		</Navbar>
	);
}

export default navbar;
