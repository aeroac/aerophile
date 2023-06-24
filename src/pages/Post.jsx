import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { motion, useScroll, useTransform } from "framer-motion"
import ReactMarkdown from 'react-markdown'
import { db } from "/src/config/firebase"
import { collection, doc, getDoc, getDocs } from "firebase/firestore"; 
import { ArrowLeft, GlobeHemisphereEast } from "@phosphor-icons/react"
import "./Post.scss"

function Post() {
    const { catID, postID } = useParams()
    const [status, setStatus] = useState("loading")
    const [data, setData] = useState({})

    useEffect(() => {
        const getDocument = async () => {
            const data = await getDoc(doc(db, "blog", catID, "posts", postID))
            if (data.exists()) {
                console.log(data.data())
                    setData(data.data())
                    setStatus("success")
            }
            else {
                console.log("No data though :(")
                setStatus("na")
            }
        }
        getDocument()
    }, [])

    return (
        <>
        { status == "success" && (
            <main id="post">
            <header id="post-header">
            <motion.img src={ data.image || "" } 
                initial={{ height: "30vh" }}
                animate={{ height: "60vh" }}
                transition={{ type: "spring" }}
            />
            <h1>{ data.title || "Loading..." }</h1>
            <p>{ data.author } | { data.time.toDate().toDateString() } </p>
            </header>
            <section id="post-content">
                { console.log(data.content, "CAP", decodeURI(data.content))}
                <ReactMarkdown children={decodeURI(data.content)} />
            </section>
            </main>
        )}
        { status == "loading" && (
            <main id="post">
            <header id="post-loading">
                <h1>
                <GlobeHemisphereEast  size={64} color="#ffffff" weight="fill">
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        dur="2s"
                        from="0 0 0"
                        to="360 0 0"
                        repeatCount="indefinite"
                    ></animateTransform>
                </GlobeHemisphereEast >
                </h1>
            </header>
            </main>
        )}
        { status == "na" && (
            <main id="post">
            <header id="post-na">
                <h1>No Content Found :(</h1>
                <Link to="/" className="no-content-cta"><ArrowLeft />Go back Home</Link>
            </header>
            </main>
        )}
        </>
        )
    }
    
    export default Post