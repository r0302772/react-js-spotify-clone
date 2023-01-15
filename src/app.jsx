import {Col, Container, Row} from "react-bootstrap";
import {useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import ThemeContext from './context/themeContext.js'
import TopNav from "./components/navigation/topNav.jsx";
import Routing from "./routing.jsx";
import Footer from "./components/footer.jsx";
import SideNav from "./components/navigation/sideNav.jsx";
import Playlists from "./pages/collection/playlists/playlists.jsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: import.meta.env.PROD,
            suspense: true,
            useErrorBoundary: false
        }
    }
})

const themeChoice = localStorage.darkTheme || 'true'

const App = () => {
    const [darkTheme, setDarkTheme] = useState(themeChoice === 'true')
    const themeClass = darkTheme ? 'bg-dark text-light' : 'bg-light text-dark'

    const toggleDarkTheme = (evt) => {
        evt?.target?.blur()
        setDarkTheme(dark => {
            localStorage.darkTheme = dark ? 'false' : 'true'
            return !dark
        })
    }

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeContext.Provider value={{darkTheme, toggleDarkTheme}}>
                <Container fluid className={`vh-100 ${themeClass}`}>
                    <TopNav/>
                    <Row className={'h-100 py-5 overflow-auto'}>
                        {/*<Playlists/>*/}
                        <Col>
                            <Routing/>
                        </Col>
                    </Row>
                    <Footer/>
                </Container>
            </ThemeContext.Provider>
        </QueryClientProvider>
    )
}

export default App;
