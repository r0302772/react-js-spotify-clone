import {Col, Row, Form} from 'react-bootstrap'
import NavItem from "./navItem.jsx";
import BootstrapIcon from "../../utils/bootstrapIcon.jsx";
import {useContext} from "react";
import ThemeContext from "../../context/themeContext.js";

const SideNav = ({isExpanded, toggleIsExpanded}) => {
    const {darkTheme, toggleDarkTheme} = useContext(ThemeContext)
    const token = localStorage.getItem("access_token")

    const userNav = () => {
        if (token) {
            return (
                <>
                    <NavItem url={'/search'} icon={'search'} title={'Search'} isBrand={false}/>
                    <NavItem url={'/collection/playlists'} icon={'collection'} title={'Library'} isBrand={false}/>
                    <NavItem url={'/create-playlist'} icon={'clipboard-plus-fill'} title={'Create Playlist'} isBrand={false}/>
                    <NavItem url={'/collection/tracks'} icon={'heart-fill'} title={'Liked'} isBrand={false}/>
                </>
            )
        }
        return (
            <NavItem url={'/login'}
                     icon={'box-arrow-in-right'}
                     title={'Log in'}
                     isBrand={false}/>
        )
    }

    return (
        <Row className="d-flex flex-column align-content-stretch h-100 w-100 g-0">
            <Col className="flex-grow-1 mt-4 g-0">
                <NavItem url={'/'} icon={'spotify'} title={'Spotify'} isBrand={true}/>
                {userNav()}
            </Col>
            <Col className="flex-grow-0 g-0">
                <Row className={"g-0"}>
                    <Col className="flex-grow-1 mt-4 g-0">
                        <NavItem url={'/user'} icon={'person-fill'} title={`username`} isBrand={false}
                                 iconOnly={!isExpanded}/>
                    </Col>
                </Row>
                <Row className="p-2">
                    <Col xs={isExpanded ? 10 : 12} className={`d-flex ${!isExpanded && 'justify-content-center'}`}>
                        <Form.Check type="switch" label={isExpanded && 'Dark Theme'} checked={darkTheme}
                                    onChange={toggleDarkTheme}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default SideNav
