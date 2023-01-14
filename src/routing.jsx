import {Outlet, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Login from "./pages/login/login.jsx";
import Tracks from "./pages/collection/tracks/tracks.jsx";
import Search from "./pages/search/search.jsx";
import Playlists from "./pages/collection/playlists/playlists.jsx";
import Artist from "./pages/artist/artist.jsx";
import Album from "./pages/album/album.jsx";
import Track from "./pages/track/track.jsx";

const Routing = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/album"} element={<Outlet/>}>
                <Route path={":id"} element={<Album/>}/>
            </Route>
            <Route path={"/artist"} element={<Outlet/>}>
                <Route path={":id"} element={<Artist/>}/>
            </Route>
            <Route path={"/collection"}>
                <Route path={"playlists"} element={<Playlists/>}/>
                <Route path={"tracks"} element={<Tracks/>}/>
            </Route>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/search"} element={<Search/>}>
                <Route path={"track/:track_id"} element={<Track/>}/>
                <Route path={"album/:album_id"} element={<Album/>}/>
            </Route>
        </Routes>
    )
}

export default Routing;