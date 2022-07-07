import React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useLogoutUserMutation } from "../services/appApi";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../images/logo.png";
import profileImg from '../images/bot.jpg'
import './Sidebar.css'
function Navigation() {
    const user = useSelector((state) => state.user);
    const [logoutUser] = useLogoutUserMutation();
    async function handleLogout(e) {
        e.preventDefault();
        await logoutUser(user);
        // redirect to home page
        window.location.replace("/");
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="Logo" style={{ width: 50, height: 50 }} />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {!user && (
                            <>
                                <LinkContainer to="/login">
                                    <Nav.Link>Login</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/SignUp">
                                    <Nav.Link>SignUp</Nav.Link>
                                </LinkContainer>
                            </>
                        )}
                        <LinkContainer to="/chat">
                            <Nav.Link>Chat</Nav.Link>
                        </LinkContainer>
                        {user && (
                            <>
                                <LinkContainer to="/chat" id="basic-nav-dropdown" className='profile'>
                                    <Nav.Link>
                                        <img src={user.picture} style={{ width: 40, height: 40, marginRight: 10, objectFit: "cover", borderRadius: "50%", border: "2px solid aqua" }} alt="userImage" />
                                        {user.name}
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/chat' >
                                    <Nav.Link>

                                        <Button variant="danger" onClick={handleLogout}>
                                            Logout
                                        </Button>
                                    </Nav.Link>
                                </LinkContainer>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;