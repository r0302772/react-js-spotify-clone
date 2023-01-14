import {Button, Container, Image, Row} from "react-bootstrap";
import ThemeContext from "../../context/themeContext.js";
import {useContext} from "react";
import {handleLogin} from "../../API/utils/spotifyAPI.js";

const Login = () => {
// const {data} = useGetProfile()
    const {darkTheme} = useContext(ThemeContext)

    return (
        <Container className={"d-flex justify-content-center align-items-center vh-100"}>
            <Row className={"d-grid gap-5 col-6 mx-auto"}>
                <Image src={`/logos/Spotify_Logo_RGB_${darkTheme ? "White" : "Black"}.png`} style={{width:"50vw"}}/>
                <Button variant={`${darkTheme ?"light" : "dark"}`} onClick={handleLogin} className="btn-lg rounded-pill">
                    Connect With Spotify
                </Button>
            </Row>
        </Container>
    )
}

export default Login
