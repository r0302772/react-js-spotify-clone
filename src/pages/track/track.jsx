import {Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {Suspense} from "react";
import Loading from "../../utils/loading.jsx";

const SuspendedTrack = ({track_id}) => {
/*    console.log(track_id)
    const {artists, tracks} = ({album_id})
    console.log(artists)
    console.log(tracks)
    console.log(tracks.items)*/

    return (
        <Row className={"pt-3"}>
{/*            {tracks.items.map(track => (
                <p key={track.id}>{track.name}</p>
            ))}*/}
        </Row>
    )
}

const Track = () => {
    const {track_id} = useParams()

    return (
        <Suspense fallback={<Loading/>}>
            <SuspendedTrack album_id={track_id}/>
        </Suspense>
    )
}

export default Track;