import {useParams} from "react-router-dom";
import {Suspense} from "react";
import {Row} from "react-bootstrap";
import Loading from "../../utils/loading.jsx";
import {useGetAlbumByAlbumId} from "../../API/albumAPI.js";

const SuspendedAlbum = ({album_id}) => {
    console.log(album_id)
    const {artists, tracks} = useGetAlbumByAlbumId({album_id})
    console.log(artists)
    console.log(tracks)
    console.log(tracks.items)

    return (
        <Row className={"pt-3"}>
            {tracks.items.map(track => (
                <p key={track.id}>{track.name}</p>
            ))}
        </Row>
    )
}

const Album = () => {
    const {album_id} = useParams()

    return (
        <Suspense fallback={<Loading/>}>
            <SuspendedAlbum album_id={album_id}/>
        </Suspense>
    )
}

export default Album;