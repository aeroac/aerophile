import { useState } from 'react'
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { Outlet } from 'react-router'
import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useEffect } from "react";

function App() {
  // const lenis = useLenis(({scroll}) => {
  //     // called every scroll
  //   })
  
  return (
    <>
    <ReactLenis root>
    <Nav />
    <Outlet />
    <Footer />
    </ReactLenis>
    </>
  )
}

export default App
