import ThemeContext from "../../../context/themeContext.js";
import {Container, Table} from "react-bootstrap";
import BootstrapIcon from "../../../utils/bootstrapIcon.jsx";
import {useContext} from "react";
import {Link} from "react-router-dom";
import {useGetMyTracksCollection} from "../../../API/user/userTracksAPI.js";
import {msToTime} from "../../../API/utils/spotifyAPI.js";

const TracksList = ({searchInput, isEditing}) => {
    const {darkTheme} = useContext(ThemeContext)
    const {items} = useGetMyTracksCollection({
        enabled: isEditing
    })

    {
        items && console.log(items)
    }

    return (
        <Container fluid className={"pt-5"}>
            <Table className={darkTheme ? "table-dark" : "table-light"}>
                <thead>
                <tr>
                    <th>#</th>
                    <th></th>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Released</th>
                    <th className={'text-center'}><BootstrapIcon iconName={'clock'}/></th>
                </tr>
                </thead>
                <tbody>
                {items?.map(element =>
                    <tr key={element.track.id}>
                        <td>{items?.indexOf(element) + 1}</td>
                        <td><a href={element.track.external_urls.spotify} target={"_blank"}>
                            <img src={element.track.album.images[2].url}/></a>
                        </td>
                        <td><a href={element.track.external_urls.spotify} target={"_blank"}>{element.track.name}</a>
                        </td>
                        <td>{element.track.artists.map(artist => (
                            <span key={artist.id}>
                                <Link to={`/artist/${artist.id}`}>
                                    {artist.name}
                                </Link>&nbsp;
                                </span>))}</td>
                        <td>
                            <Link to={`/album/${element.track.album.id}`}>
                                {element.track.album.name}
                            </Link>
                        </td>
                        <td className={"text-center"}>{new Date(element.track.album.release_date).getFullYear()}</td>
                        <td>{msToTime(element.track.duration_ms)}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </Container>
    )
}

export default TracksList;