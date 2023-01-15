import {Container, Form, InputGroup} from "react-bootstrap";
import LoadingPage from "../../../utils/loadingPage.jsx";
import useIsEditing from "../../../hooks/useIsEditing.js";
import TracksList from "./tracksList.jsx";
import {Suspense} from "react";

const Tracks = () => {
    const [searchInput, setSearchInput, isEditing] = useIsEditing({defaultValue: ''})

    return (
        <Container fluid>
            <Container className={"pt-5"}>
                <InputGroup>
                    <Form.Control
                        placeholder={"Search in liked tracks..."}
                        type={"text"}
                        value={searchInput}
                        onChange={setSearchInput}/>
                </InputGroup>
            </Container>
            <Suspense fallback={<LoadingPage/>}>
                <TracksList searchInput={searchInput} isEditing={!isEditing}/>
            </Suspense>
        </Container>
    )
}

export default Tracks;