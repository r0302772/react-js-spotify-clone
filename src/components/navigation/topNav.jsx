import {LinkContainer} from 'react-router-bootstrap';
import {Container, Form, Nav, Navbar} from "react-bootstrap";
import BootstrapIcon from "../../utils/bootstrapIcon.jsx";
import {useContext} from "react";
import ThemeContext from "../../context/themeContext.js";

const TopNav = () => {
    const {darkTheme, toggleDarkTheme} = useContext(ThemeContext)

    return (
        <Navbar expand={'md'}
                bg={`${darkTheme ? "dark" : "light"}`}
                fixed={"top"}
                variant={`${darkTheme ? 'dark' : 'light'}`}
                className={'border-bottom px-5 py-3'}>
            <Container fluid>
                <LinkContainer to={'/'}>
                    <Navbar.Brand>
                        <BootstrapIcon iconName={'spotify'}/> Spotify
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className={'justify-content-center'}/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={"m-auto"}>
                        <LinkContainer to={'/search'}>
                            <Nav.Link>
                                <BootstrapIcon iconName={'search'}/> Search
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'/collection/playlists'}>
                            <Nav.Link>
                                <BootstrapIcon iconName={'collection'}/> Collection
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'/collection/tracks'}>
                            <Nav.Link>
                                <BootstrapIcon iconName={'heart-fill'}/> Liked Tracks
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    <LinkContainer to={'/my-profile'}>
                        <Nav.Link>
                            <BootstrapIcon iconName={'person-circle'}/> My Profile
                        </Nav.Link>
                    </LinkContainer>
                    <Form.Check type="switch" label={<BootstrapIcon iconName={'moon-stars'}/>}
                                className={"align-self-md-center"} checked={darkTheme}
                                onChange={toggleDarkTheme}/>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default TopNav;