import { useState, useContext } from 'react'
import { Link, useParams, useNavigate, Routes, Route } from "react-router-dom"

import './App.css'
// import Welcome from './components/Welcome'
import Header from './components/App/Header'
import Main from './components/App/Main'
import Footer from './components/App/Footer'



export default function App() {
 

  return (
    
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
    
  )
}