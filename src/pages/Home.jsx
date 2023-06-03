import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, useScroll, useTransform } from "framer-motion"
import titleExplore from "/src/assets/title-explore.png"
import cardImage1 from "/src/assets/hero-1.png"
import cardImage2 from "/src/assets/hero-2.png"
import cardImage3 from "/src/assets/hero-3.png"
import cardImage4 from "/src/assets/hero-4.png"
import "./Home.scss"

function Home() {
    const { scrollY } = useScroll();
    const x = useTransform(
        scrollY,
        [0, window.innerHeight * 2],
        [0, -400]
    )

    return (
    <main id="home">
        <section id="landing">
            <div className="hero">
                <motion.div className="hero-card" index={0} 
                    initial={{ scale: 2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", duration: 2 }}
                />
                <div className="hero-card" index={1} />
                <div className="hero-card" index={2} />
                <div className="hero-card" index={3} />
            </div>
            <div className="content">
                <motion.div className="cta"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: .9 }}
                    transition={{ type: "spring" }}
                >
                    <Link to="/">Join us now!</Link>
                </motion.div>
            </div>
        </section>
        <section id="campaign">
            <div className="header">
                <motion.div className="title-background" style={{ x }} >
                    <img src={ titleExplore }></img>
                </motion.div>
                <div className="title">
                    EXPLORE THE DEPTHS OF AVIATION
                </div>
            </div>
            <div className="post-cards">
                
                <motion.div className="card"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring" }}
                    whileTap={{ scale: .95 }}
                >
                    <motion.img src={ cardImage1 }
                        initial={{scale: 1.1 }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.05 }}
                        transition={{ type: "spring" }}
                    />
                    <p>HISTORY</p>
                </motion.div>

                {/* TEMP */}
                <motion.div className="card"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring" }}
                    whileTap={{ scale: .95 }}
                >
                    <motion.img src={ cardImage2 }
                        initial={{scale: 1.1 }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.05 }}
                        transition={{ type: "spring" }}
                    />
                    <p>HISTORY</p>
                </motion.div><motion.div className="card"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring" }}
                    whileTap={{ scale: .95 }}
                >
                    <motion.img src={ cardImage3 }
                        initial={{scale: 1.1 }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.05 }}
                        transition={{ type: "spring" }}
                    />
                    <p>HISTORY</p>
                </motion.div><motion.div className="card"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring" }}
                    whileTap={{ scale: .95 }}
                >
                    <motion.img src={ cardImage4 }
                        initial={{scale: 1.1 }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.05 }}
                        transition={{ type: "spring" }}
                    />
                    <p>HISTORY</p>
                </motion.div>
                {/* END TEMP */}

            </div>
        </section>
    </main>
    )
}

export default Home