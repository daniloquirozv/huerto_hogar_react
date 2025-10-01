import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header(){
    return(
        <>
            <Navbar bg="success" variant="dark" expand="lg" className="shadow">
                <Container>
                    <Navbar.Brand href="#home">
                        🌱 Huerto en casa
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#plantas">Mis Plantas</Nav.Link>
                            <Nav.Link href="#consejos">Consejos</Nav.Link>
                            <Nav.Link href="#calendario">Calendario</Nav.Link>
                            <Nav.Link href="#about">Acerca de</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}