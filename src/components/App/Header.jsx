import { useState, useContext } from 'react'
import { Link, useParams, useNavigate, Routes, Route } from "react-router-dom"

import Nav from './Nav'

export default function Header() {
    return (
        <div className="Header">
            HEADER - PLACEHOLDER
            <Nav />
        </div>
    )
}