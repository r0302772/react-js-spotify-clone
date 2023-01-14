import {Suspense} from "react";
import LoadingPage from "../../utils/loadingPage.jsx";

const Dashboard = () => {

    return (
        <>
            <h1>Dashboard</h1>
            <Suspense fallback={<LoadingPage/>}>
<h1>Test</h1>
            </Suspense>
        </>
    )
}

export default Dashboard;