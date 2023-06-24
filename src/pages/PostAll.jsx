import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { motion, useScroll, useTransform } from "framer-motion"
import PostCard from "/src/components/PostCard"
import "./PostAll.scss"

import { ArrowLeft, GlobeHemisphereEast, PaperPlaneTilt } from "@phosphor-icons/react"
import { db } from "/src/config/firebase"
import { collection, doc, getDoc, getDocs } from "firebase/firestore"

function PostAll() {
    const { catID } = useParams()
    const [status, setStatus] = useState("loading")
    const [data, setData] = useState([])
    const [category, setCategory] = useState({})

    useEffect(() => {
        const getDocument = async () => {
            const cat = await getDoc(doc(db, "blog", catID))
            const docs = await getDocs(collection(db, "blog", catID, "posts"))
            if (docs.size) {
                setCategory(cat.data())
                let dataTemp = []
                docs.forEach((doc) => {
                    console.log(dataTemp.push( { "id": doc.id, ...doc.data() } ))
                })
                setData(dataTemp)
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
        { status == "loading" && (
            <main id="postall">
            <header id="postall-loading">
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
        { status == "success" && (
            <main id="postall">
            <header id="postall-header">
                <motion.img src={ category.image } 
                    initial={{ height: "0vh" }}
                    animate={{ height: "30vh" }}
                    transition={{ type: "spring" }}
                />
                <h1>{ category.title }</h1>
            </header>
            <section id="postall-content">
                { data.map((doc, index) => {
                return (
                <PostCard key={ index } image={ doc.image } url={ doc.id } title={ doc.title } />
                )
                }) }
            </section>
            </main>
        )}
        { status == "na" && (
            <main id="postall">
            <header id="postall-na">
                <h1>No Content Found :(</h1>
                <Link to="/" className="no-content-cta"><ArrowLeft />Go back Home</Link>
            </header>
            </main>
        )}

        </>
    )
}

export default PostAll