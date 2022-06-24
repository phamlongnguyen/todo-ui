import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import './App.css'
import Dashboard from './pages/Dashboard'
import ProjectsTracking from './pages/ProjectsTracking'

function App() {
  return (
    <div className="flex w-full ">
      <BrowserRouter>
        <Navbar />
        <div className="w-full h-screen overflow-y-auto bg-[#FCFCFC]">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="projects-tracking" element={<ProjectsTracking />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
