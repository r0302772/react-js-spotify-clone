import {Button, Container, Image, Row} from "react-bootstrap";
import ThemeContext from "../../context/themeContext.js";
import {useContext} from "react";
import {handleLogin} from "../../API/utils/spotifyAPI.js";

const Login = () => {
// const {data} = useGetProfile()
    const {darkTheme} = useContext(ThemeContext)

    return (
        <Container className={'d-flex flex-column h-100 gap-5 p-3 justify-content-center align-items-center'}>
            <Image src={`/logos/Spotify_Logo_RGB_${darkTheme ? "White" : "Black"}.png`} style={{width: "50vw"}}/>
            <Button variant={`${darkTheme ? "light" : "dark"}`} onClick={handleLogin}
                    className="btn-lg rounded-pill">
                Connect With Spotify
            </Button>
        </Container>
    )
}

export default Login
