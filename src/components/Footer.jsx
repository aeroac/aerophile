import { Link } from "react-router-dom"
import aaacLogo from "/src/assets/aaac.png"
import aerophileLogo from "/src/assets/aerophilelk.png"
import "./Footer.scss"

function Footer() {

    return (
    <footer>
        <div className="content">
            <div className="branding">
                <img src={ aaacLogo } />
                <img src={ aerophileLogo } />
            </div>
            <div className="org">
                <p>2023 ©️ Aeronautical Academy of Ananda College</p>
            </div>
        </div>
        <div className="me">
            <Link to="https://github.com/minukag" target="_blank">Website Designed & Developed by Minuka Gunawansa</Link>
        </div>
    </footer>
    )
}

export default Footer