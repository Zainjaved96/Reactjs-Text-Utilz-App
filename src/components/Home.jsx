import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className='container hero'>
        <h1 className='gradiant-text'>One place For all your text editing needs.</h1>
        <p className='hero--text'>Short Note is a simple, yet powerful tool that allows you to easily <br /> manipulate text quickly on the go.</p>
        <Link  to="/text-form" className='hero--button'>Get Started</Link>
    </div>
    
  )
}
