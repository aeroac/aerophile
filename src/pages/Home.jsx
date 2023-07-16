import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import titleExplore from "/src/assets/title-explore.png"
import cardImage1 from "/src/assets/hero-1.png"
import cardImage2 from "/src/assets/hero-2.png"
import cardImage3 from "/src/assets/hero-3.png"
import cardImage4 from "/src/assets/hero-4.png"
import sr35 from "/src/assets/sr35.png"
import PostCard from "/src/components/PostCard"

import { db } from "/src/config/firebase"
import { collection, doc, getDoc, getDocs } from "firebase/firestore"

import "./Home.scss"

function SlideImage() {
    const slideTiming = 5
    const images = [cardImage1, cardImage2, cardImage3, cardImage4]
    const [slide, setSlide] = useState(0)

    useEffect(() => {
        const slideInterval = setInterval(() => {
            const next = (slide + 1) % images.length
            setSlide(next)
        }, slideTiming * 1000);
        return () => clearInterval(slideInterval)
    }, [slide])

    return (
        <AnimatePresence>
            <motion.img 
                key={ slide }
                src={ images[slide] } 
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [1.1, 1, 1.1] }}
                exit={{ opacity: 0 }}
                transition={{ 
                    opacity: {
                        duration: .5
                    },
                    scale: {
                        duration: slideTiming,
                    }
                }}
                // transition={{ duration: 2}}
            />
        </AnimatePresence>
    )
}

function Home() {
    const { scrollY } = useScroll();
    const x = useTransform(
        scrollY,
        [0, window.innerHeight * 2],
        [0, -400]
    )
    const planeX = useTransform(
        scrollY,
        [0, window.innerHeight * 2],
        [ 100, 0]
    )

    const [catsStatus, setCatsStatus] = useState(0)
    const [dataCats, setDataCats] = useState([])

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    })

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

        const updateMousePosition = (e) => {
            setMousePosition({
              x: e.pageX,
              y: e.pageY,
            });
          };
      
          window.addEventListener('mousemove', updateMousePosition);
      
          return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        }
    }, [])

    const [ hero, setHero ] = useState(cardImage1)

    return (
    <main id="home">
        <section id="landing">
            <motion.div className="hero"
                initial={{ width: "100vw", left: "0", top: 0, height: "100vh", opacity: 0 }}
                animate={{ width: "calc(100vw - 24vh)", left: "12vh", top: "12vh", height: "88vh", opacity: 1 }}
                transition={{ type: "spring", stiffness: 20 }}
            >
                <SlideImage/>
                <motion.div id="hero-hover"
                    animate={{ x: mousePosition.x - 240 , y: mousePosition.y - 240 }}
                    transition={{ type: "just" }}
                />
            </motion.div>

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
                <motion.div 
                    className="overlay" 
                    initial={{ x: "0" }}
                    onViewportEnter={{ x: "100%" }}
                    // whileInView={{ x: "100%" }}
                    viewport={{ amount: .8 }}
                    transition={{ duration: 4 }}
                >
                    <img src={sr35} />
                </motion.div>
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