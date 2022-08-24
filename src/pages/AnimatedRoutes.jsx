import React from 'react'
import Landing from './Landing';
import Blue from './Blue';
import Red from './Red';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Landing />} />
                <Route exact path="/blue" element={<Blue />} />
                <Route exact path="/red" element={<Red />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes