import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";

import './index.scss'
import './fonts/blackpast.ttf'

import App from './App'
import Home from './pages/Home'
import Post from './pages/Post'
import PostAll from './pages/PostAll'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/:postCAT" element={<PostAll />} />
      <Route path="/:postCAT/:postID" element={<Post />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)