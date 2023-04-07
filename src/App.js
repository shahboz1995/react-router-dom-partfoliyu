import React from 'react'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/about',
    element: <About />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
