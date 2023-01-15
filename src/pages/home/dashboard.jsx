import {Suspense} from "react";
import LoadingPage from "../../utils/loadingPage.jsx";
import {Container} from "react-bootstrap";

const Dashboard = () => {

    return (
        <Container className={'pt-5'}>
            <h1>Dashboard</h1>
            <Suspense fallback={<LoadingPage/>}>
                <h1>Test</h1>
            </Suspense>
        </Container>
    )
}

export default Dashboard;