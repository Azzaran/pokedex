import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import getgen from '../Services/getgen';

const NavBar = () => {
    const [generation, setGeneration]= useState([]);
 
    const fetchGeneration = async () => {
        try {
            const response = await getgen.getGeneration()
            setGeneration(response.data.results)
            console.log(response.data.results) 
        } catch (error) {
            console.log (error)
        };
    }

    useEffect(() => {
        fetchGeneration()
    }, []);  


    return ( 
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Pokedex</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Génération" id="basic-nav-dropdown">
              {generation.map(gen =>{
                return <NavDropdown.Item key={gen.name} href={"/Generation/"+gen.name}>{gen.name}</NavDropdown.Item>
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     );
}
 
export default NavBar;