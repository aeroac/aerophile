import { Link } from "react-router-dom"
import "./Home.scss"

function Home() {

    return (
    <main id="home">
        <section id="landing">
            <div className="hero">
                <div className="hero-card" />
                <div className="hero-card" />
                <div className="hero-card" />
                <div className="hero-card" />
            </div>
            <div className="content">
                <div className="cta">
                    <Link to="/">Join us now!</Link>
                </div>
            </div>
        </section>
        <section id="campaign">

        </section>
    </main>
    )
}

export default Home