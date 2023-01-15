import {Container, Form, InputGroup, Row, Table} from "react-bootstrap";
import {Suspense, useContext} from "react";
import LoadingPage from "../../utils/loadingPage.jsx";
import SearchList from "./searchList.jsx";
import useIsEditing from "../../hooks/useIsEditing.js";
import ThemeContext from "../../context/themeContext.js";
import BootstrapIcon from "../../utils/bootstrapIcon.jsx";

const Search = () => {
    const [searchInput, setSearchInput, isEditing] = useIsEditing({defaultValue: ''})
    const {darkTheme} = useContext(ThemeContext)

    return (
        <Container fluid className={'py-5'}>
            <Row>
                <InputGroup>
                    <Form.Control
                        placeholder={"Search..."}
                        type={"text"}
                        value={searchInput}
                        onChange={setSearchInput}/>
                </InputGroup>
            </Row>
            <Row>
                <Container className={"py-5"}>
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
                        <Suspense fallback={<LoadingPage/>}>
                            <SearchList searchInput={searchInput} isEditing={!isEditing}/>
                        </Suspense>
                        </tbody>
                    </Table>
                </Container>
            </Row>
        </Container>
    )
}

export default Search;