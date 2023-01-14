import Dashboard from "./dashboard.jsx";
import Login from "../login/login.jsx";
import {useEffect, useState} from "react";

const getHashParams = () => {
    let hashParams = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
}

const stateKey = 'spotify_auth_state';

const params = getHashParams();

const access_token = params.access_token,
    state = params.state,
    storedState = localStorage.getItem(stateKey);

const Home = () => {
    const [accessToken, setAccessToken] = useState("")

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
            }
        }
    }, [])


    return (
        <>
            {!access_token ? <Login/> : <Dashboard token={accessToken}/>}
        </>
    )

}

export default Home;