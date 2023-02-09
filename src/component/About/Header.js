import React from 'react';
import { Link,useHistory  } from 'react-router-dom';
import About from "../../pages/AboutPage";

const Header = () => {
 
  return (
    <div className="navbar navbar-light navbar-expand-md sticky-top py-3" style={{backgroundColor:'#aee2ff'}}>
        <div className="container"><a className="navbar-brand d-flex align-items-center" href="#" ><span className="bs-icon-sm bs-icon-circle bs-icon-primary text-dark d-flex justify-content-center align-items-center me-2 bs-icon" style={{color:"black",backgroundColor:"#93C6E7"}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-code-square text-dark">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
              </svg></span><span className="fs-4 text-dark">AH SAKIB</span></a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-5"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
          <div className="collapse navbar-collapse text-white" id="navcol-5" style={{color: 'white'}}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link fw-semibold link-dark" data-bss-hover-animate="pulse" href="#"  style={{color:"black"}} onClick={() => {window.location.href="/"}} to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link fw-semibold link-dark" data-bss-hover-animate="pulse" href="#"  style={{color:"black"}} onClick={() => {window.location.href="/Services"}} to="/Services">Services</Link></li>
              <li className="nav-item"><Link className="nav-link fw-semibold link-dark" data-bss-hover-animate="pulse" href="#"  style={{color:"black"}} onClick={() => {window.location.href="/About"}} to="/About">About</Link></li>
              <li className="nav-item"><Link className="nav-link fw-semibold link-dark" data-bss-hover-animate="pulse" href="#"  style={{color:"black"}} onClick={() => {window.location.href="/Contact"}} to="/Contact">Contact</Link></li>
            </ul><a className="btn fw-semibold link-dark border rounded border-dark ms-md-2" role="button" data-bss-hover-animate="pulse" href="#" style={{Info: '#b9f3fc', InfoRgb: '185,243,252', color:"black"}}>Download CV</a>
          </div>
        </div>
    </div>
  )
}

export default Header




