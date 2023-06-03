import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, useScroll, useTransform } from "framer-motion"
import "./Post.scss"

function Post() {
    return (
        <>
        <img src="/src/assets/hero-1.png" />
        <h1>Post Title</h1>
        <p>This is where detailed information about a post goes</p>
        {/* also get data from firebase */}
        </>
    )
}

export default Post