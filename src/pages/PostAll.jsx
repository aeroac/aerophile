import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, useScroll, useTransform } from "framer-motion"
import "./PostAll.scss"

import cardImage1 from "/src/assets/hero-1.png"
import cardImage2 from "/src/assets/hero-2.png"
import cardImage3 from "/src/assets/hero-3.png"
import cardImage4 from "/src/assets/hero-4.png"
import PostCard from "/src/components/PostCard"

function PostAll() {
    return (
        <>
        <header id="postall-header">
            <motion.img src="/src/assets/hero-1.png" 
                initial={{ height: "0vh" }}
                animate={{ height: "30vh" }}
                transition={{ type: "spring" }}
            />
            <h1>Post Category</h1>
        </header>
        <section id="postall-content">
            <PostCard image={ cardImage1 } url="/cute/invention-of-the-airplane" />
        </section>
        {/* get data from firebase and display them here */}
        </>
    )
}

export default PostAll