import React from 'react'
import {Link} from "react-scroll";

const Navbar = () => {
    return(
       
<nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
 <div className = "container">
    <a className="navbar-brand" href="#">IT</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">

       
       

        <li className="nav-item">
          <Link smooth= {true} to = "about" className="nav-link" href="#">About</Link>
        </li>

        <li className="nav-item">
          <Link smooth= {true} to = "portfolio" className="nav-link" href="#">Projects</Link>
        </li>

        <li className="nav-item">
          <Link smooth= {true} to = "contact" className="nav-link" href="#">Contact</Link>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/isabeltoledo1">Github</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="https://www.linkedin.com/in/isabel-toledo-3252641b7">LinkedIn</a>
        </li>
      </ul>
      
  </div>


  </div>
</nav>







       
    )
}

export default Navbar