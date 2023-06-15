import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { motion, useScroll, useTransform } from "framer-motion"
import ReactMarkdown from 'react-markdown'
import { db } from "/src/config/firebase"
import { collection, doc, getDoc, getDocs } from "firebase/firestore"; 
import { ArrowLeft } from "@phosphor-icons/react"
import "./Post.scss"

function Post() {
    const { postID } = useParams()
    const [status, setStatus] = useState("loading")
    const [data, setData] = useState({})

    useEffect(() => {
        const getDocument = async () => {
            const data = await getDoc(doc(db, "posts", postID))
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
            <>
            <header id="post-header">
            <motion.img src={ data.header || "" } 
                initial={{ height: "30vh" }}
                animate={{ height: "60vh" }}
                transition={{ type: "spring" }}
            />
            <h1>{ data.title || "Loading..." }</h1>
            <p>{ data.author } | { data.time.toDate().toDateString() } </p>
            </header>
            <section id="post-content">
                <ReactMarkdown children={data.content} />
            </section>
            </>
        )}
        { status == "loading" && (
            <>
            <header id="post-header">
            <motion.img src="/src/assets/hero-1.png" />
            <h1>Loading...</h1>
            </header>
            <section id="post-content">
            </section>
            </>
        )}
        { status == "na" && (
            <>
            <header id="post-header">
            <motion.img src="/src/assets/hero-1.png" 
                initial={{ height: "30vh" }}
                animate={{ height: "0vh", "marginBottom": "30vh" }}
                transition={{ type: "spring" }}
            />
            <h1>No Content Found :(</h1>
            </header>
            <section id="post-content">
                <Link to="/" className="no-content-cta"><ArrowLeft />Go back Home</Link>
            </section>
            </>
        )}
        </>
        )
    }
    
    export default Post