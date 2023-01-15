import axios from "axios";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI

//region Axios Client
const accessToken = () => {
    const token = localStorage.getItem("access_token")
    if (!token) {
        return console.log("Error retrieving access_token", token)
    } else {
        return token
    }
}

export const client = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken()}`
    }
})
//endregion

//region Login

const API_URL = "https://accounts.spotify.com/authorize"
const SCOPES = [
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-modify-private",
    "playlist-modify-public",
    "user-library-modify",
    "user-library-read",
    "user-read-currently-playing",
    "user-read-email",
    "user-read-playback-position",
    "user-read-playback-state",
    "user-read-private",
    "user-read-recently-played",
    "user-top-read"
]
export const stateKey = 'spotify_auth_state';

const generateRandomString = (length) => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

export const handleLogin = () => {
    const STATE = generateRandomString(16);

    localStorage.setItem(stateKey, STATE);

    window.location = `${API_URL}?` +
        `client_id=${CLIENT_ID}` +
        `&redirect_uri=${REDIRECT_URI}` +
        `&scope=${SCOPES.join(" ")}` +
        `&response_type=token` +
        `&show_dialog=false` +
        `&state=${STATE}`
}

export const getHashParams = () => {
    let hashParams = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
}

//endregion

//region AccessToken with useQuery

/*const fetchAccessToken = async () => {
    console.log(`Fetching access token...`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))

    const STATE = generateRandomString(16);
    localStorage.setItem(stateKey, STATE);

    return axios.get(`${API_URL}`,{
        data:{
            client_id:CLIENT_ID,
            redirect_uri:REDIRECT_URI,
            scope:SCOPES.join(" "),
            response_type:'token',
            show_dialog:false,
            state: STATE
        }
    })
}*/

/*export const useGetAccessToken = () => {
    return useQuery(
        ['access_token'],
        async () => (await fetchAccessToken())?.data,
        {
            staleTime: Infinity,
            cacheTime: Infinity
        }
    )
}*/

//endregion

export const msToTime = (duration) => {
    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    if (hours === '00') {
        return minutes + ":" + seconds;
    } else {
        return hours + ":" + minutes + ":" + seconds;
    }
}