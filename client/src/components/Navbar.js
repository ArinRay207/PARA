import React from 'react'
import '../index.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">PARA</a>
        <div className = "navbar-items-list">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon menu-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li>
                
                </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar