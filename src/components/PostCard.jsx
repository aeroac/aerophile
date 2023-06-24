import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { motion, useScroll, useTransform } from "framer-motion"

function PostCard({ image, url, title }) {
    return (
    <Link to={ url } className="card-wrapper">
    <motion.div className="card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring" }}
        whileTap={{ scale: .95 }}
        >
        <motion.img src={ image }
            initial={{scale: 1.1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.05 }}
            transition={{ type: "spring" }}
            />
    </motion.div>
    { title ? (
        <motion.h1 className="card-title"
        whileHover={{ opacity: .8 }}
        whileTap={{ scale: .98 }}
        >
            { title } 
        </motion.h1>
    ) : null}
    </Link>
    )
}

export default PostCard