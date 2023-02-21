import React from 'react'
import '../styles/Quora.css'
import Feed from './Feed'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Widget from './Widget'

function Quora() {
  return (
    <div>
       <Navbar />
      <div className="quora__content">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  )
}

export default Quora
