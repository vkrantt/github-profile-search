import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import SearchModal from '../modal/SearchModal'

const Header = () => {
    return (
        <Container fluid className="bg-light">
            <Container>
                <Navbar bg="light">
                    <Container fluid>
                        <Navbar.Brand href="/" className="fw-bold" >Github profile search</Navbar.Brand>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            ></Nav>

                            <SearchModal label="Search" />
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </Container>
    )
}

export default Header