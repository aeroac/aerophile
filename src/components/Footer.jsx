import { Link } from "react-router-dom"
import "./Footer.scss"

function Footer() {

    return (
    <footer>
        <div className="content">
            <div className="branding">
                <img src="/src/assets/aaac.png" />
                <img src="/src/assets/aerophilelk.png" />
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