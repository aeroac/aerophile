import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { motion, useScroll, useTransform } from "framer-motion"
import titleExplore from "/src/assets/title-explore.png"
import cardImage1 from "/src/assets/hero-1.png"
import cardImage2 from "/src/assets/hero-2.png"
import cardImage3 from "/src/assets/hero-3.png"
import cardImage4 from "/src/assets/hero-4.png"
import PostCard from "/src/components/PostCard"

import { db } from "/src/config/firebase"
import { collection, doc, getDoc, getDocs } from "firebase/firestore"

import "./Home.scss"

function Home() {
    const { scrollY } = useScroll();
    const x = useTransform(
        scrollY,
        [0, window.innerHeight * 2],
        [0, -400]
    )

    const [catsStatus, setCatsStatus] = useState(0)
    const [dataCats, setDataCats] = useState([])

    useEffect(() => {
        const getDocument = async () => {
            const cats = await getDocs(collection(db, "blog"))
            let catsTemp = []
            cats.forEach((cat) => {
                console.log(catsTemp.push( { "id": cat.id, ...cat.data() } ))
            })
            console.log(catsTemp)
            setDataCats(catsTemp)
            setCatsStatus(1)
        }
        getDocument()
    }, [])

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
                <h1>The premier aviation news portal in srilanka</h1>
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
            { (catsStatus == 1) && (
            <>
            { dataCats.map((data, index) => {
            return(
                <PostCard key={ index } image={ data.image } url={ data.id } />
            )
            }) }
            </>
            )}
            </div>
        </section>
    </main>
    )
}

export default Home