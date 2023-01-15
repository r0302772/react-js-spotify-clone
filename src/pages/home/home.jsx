import Dashboard from "./dashboard.jsx";
import Login from "../login/login.jsx";
import {useEffect, useState} from "react";
import {getHashParams, stateKey} from "../../API/utils/spotifyAPI.js";

const params = getHashParams();

const access_token = params.access_token,
    state = params.state,
    storedState = localStorage.getItem(stateKey);

const Home = () => {
    const [accessToken, setAccessToken] = useState(null)

    useEffect(() => {
        if (access_token && (state == null || state !== storedState)) {
            console.log('There was an error during the authentication');
        } else {
            localStorage.removeItem(stateKey);
            if (!access_token) {
                console.log('There was an error with the access_token');
            } else {
                window.location.hash = ""
                localStorage.setItem("access_token", access_token)
                setAccessToken(access_token)
                console.log(access_token)
            }
        }
    }, [])

    return (
        <>
            {!accessToken ? <Login/> : <Dashboard token={accessToken}/>}
        </>
    )

}

export default Home;