import { Link, NavLink } from "react-router-dom";
import { InstagramLogo, FacebookLogo, YoutubeLogo } from "@phosphor-icons/react";
import aaacLogo from "/src/assets/aaac.png"
import "./Nav.scss"

function Nav() {

    return (
    <nav>
        <div className="branding">
            <img src={ aaacLogo }></img>
        </div>
        <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">About</NavLink>
            <NavLink to="/">Facts</NavLink>
            <NavLink to="/">Contact</NavLink>
        </div>
        <div className="socials">
            <Link to="/"><YoutubeLogo weight="light" /></Link>
            <Link to="/"><FacebookLogo weight="light" /></Link>
            <Link to="/"><InstagramLogo weight="light" /></Link>
        </div>
    </nav>
    )
}

export default Nav