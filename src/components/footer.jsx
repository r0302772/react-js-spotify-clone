import ThemeContext from "../context/themeContext.js";
import {useContext} from "react";

const Footer = () => {
    const {darkTheme} = useContext(ThemeContext)

    return (
        <footer className={`footer fixed-bottom px-5 py-4 bg-${darkTheme ? 'dark' : 'light'} border-top`}>
            Footer
        </footer>
    )
}

export default Footer;