import {useParams} from "react-router-dom";
import {Suspense} from "react";
import LoadingPage from "../../utils/loadingPage.jsx";
import {Col, Image, Row} from "react-bootstrap";
import {useGetArtistAlbumsByArtistId, useGetArtistByArtistId} from "../../API/artistAPI.js";

const SuspendedArtist = ({artist_id}) => {
    const {data: artist} = useGetArtistByArtistId({artist_id})
    console.log(artist)
    const {data: artist_albums} = useGetArtistAlbumsByArtistId({artist_id})
    console.log(artist_albums)

    return (
        <Row className={"pt-3"}>
            <Row>
                <Col>
                    <Image src={artist.images[1].url}/>
                </Col>
                <Col>
                    <h1>{artist.name}</h1>
                </Col>
                <Col>
                    {artist.genres.map(genre => <p key={genre} className={"text-uppercase"}>{genre}</p>)}
                </Col>
            </Row>
            <Row>
                <Col>

                </Col>
            </Row>
        </Row>
    )
}

const Artist = () => {
    const {id} = useParams()

    return (
        <Suspense fallback={<LoadingPage/>}>
            <SuspendedArtist artist_id={id}/>
        </Suspense>
    )
}

export default Artist;