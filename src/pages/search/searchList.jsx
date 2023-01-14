import ThemeContext from "../../context/themeContext.js";
import {useGetSearchItems} from "../../API/searchAPI.js";
import {Container, Table} from "react-bootstrap";
import BootstrapIcon from "../../utils/bootstrapIcon.jsx";
import {useContext} from "react";
import {Link} from "react-router-dom";
import {msToTime} from "../../API/utils/spotifyAPI.js";

const SearchList = ({searchInput, isEditing}) => {
    const {darkTheme} = useContext(ThemeContext)
    const {tracks, albums, playlists, artists} = useGetSearchItems({
        query: searchInput,
        enabled: isEditing
    })

    {
        tracks && console.log(tracks.items)
    }

    return (
        <Container className={"pt-5"}>
            <Table className={darkTheme ? "table-dark" : "table-light"}>
                <thead>
                <tr>
                    <th><BootstrapIcon iconName={'spotify'}/></th>
                    <th></th>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Released</th>
                    <th className={'text-center'}><BootstrapIcon iconName={'clock'}/></th>
                </tr>
                </thead>
                <tbody>
                {tracks?.items.map(element =>
                    <tr key={element.id}>
                        <td>
                            <a href={element.external_urls.spotify} target={"_blank"}>
                                {tracks?.items.indexOf(element) + 1}
                            </a>
                        </td>
                        <td>
                            <Link to={`/search/track/${element.id}`}>
                                <img src={element.album.images[2].url}/>
                            </Link>
                        </td>
                        <td><a href={element.external_urls.spotify} target={"_blank"}>{element.name}</a>
                        </td>
                        <td>{element.artists.map(artist => <span key={artist.id}><a
                            href={artist.external_urls.spotify}
                            target={"_blank"}>{artist.name}</a> - </span>)}</td>
                        <td>
                            <Link to={`/search/album/${element.album.id}`}>
                                {element.album.name}
                            </Link>
                        </td>
                        <td className={"text-center"}>{new Date(element.album.release_date).getFullYear()}</td>
                        <td>{msToTime(element.duration_ms)}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </Container>
    )
}

export default SearchList;