import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (




    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>



  <div className="container-fluid">
    <Link style={{color:props.mode==='dark'?'white':'black'}} className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link style={{color:props.mode==='dark'?'white':'black'}} className="nav-link active" aria-current="page" to="/">{props.homeText}</Link>
        </li>
        <li className="nav-item">
          <Link style={{color:props.mode==='dark'?'white':'black'}} className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
        
      </ul>

      



        <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}`}>
            <input onClick={props.toogleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'? 'Enable Dark Mode':'Enable Light Mode'}</label>
        </div>




    </div>
  </div>
</nav>
  )
}

Navbar.propTypes={
    title:PropTypes.string.isRequired,
    homeText:PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired 
}

Navbar.defaultProps={
    title:"SET TITLE",
    homeText:"Home",
    aboutText:"About"
}

