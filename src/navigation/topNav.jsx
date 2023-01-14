import {LinkContainer} from 'react-router-bootstrap';
import {Nav} from "react-bootstrap";
import BootstrapIcon from "../utils/bootstrapIcon.jsx";

const TopNav = () => {
    return (
        <Nav className={'nav-pills flex-column flex-sm-row'}>
            <LinkContainer to={'/'}>
                <Nav.Link>
                    <BootstrapIcon iconName={'spotify'}/>  Home
                </Nav.Link>
            </LinkContainer>
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
                    <BootstrapIcon iconName={'heart-fill'}/> Songs I Like
                </Nav.Link>
            </LinkContainer>
        </Nav>
    )
}

export default TopNav;