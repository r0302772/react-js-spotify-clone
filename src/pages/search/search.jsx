import {Container, Form, InputGroup, Row, Table} from "react-bootstrap";
import {Suspense} from "react";
import LoadingPage from "../../utils/loadingPage.jsx";
import SearchList from "./searchList.jsx";
import useIsEditing from "../../hooks/useIsEditing.js";
import {Outlet} from "react-router-dom";

const Search = () => {
    const [searchInput, setSearchInput, isEditing] = useIsEditing({defaultValue: ''})

    return (
        <>
            <Row>
                <Outlet/>
            </Row>
            <Container className={"pt-5"}>
                <InputGroup>
                    <Form.Control
                        placeholder={"Search..."}
                        type={"text"}
                        value={searchInput}
                        onChange={setSearchInput}/>
                </InputGroup>
            </Container>
            <Suspense fallback={<LoadingPage/>}>
                <SearchList searchInput={searchInput} isEditing={!isEditing}/>
            </Suspense>
        </>
    )
}

export default Search;