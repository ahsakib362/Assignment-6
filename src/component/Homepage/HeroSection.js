import React from 'react';
import bannerImage from "../../asset/images/MyBanner.png";


const HeroSection = () => {
  return (
    <div className="container py-4 py-xl-5" style={{fontFamily: '"Andika New Basic", sans-serif'}}>
        <div className="row gy-4 gy-md-0">
          <div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
            <div style={{maxWidth: '350px'}}>
              <h2 className="text-uppercase fw-bold" style={{fontSize: '24px'}}>Hey I'M<br />ABDUllah Hamid Sakib</h2>
              <p className="my-3" style={{fontWeight: 'bold', color: 'rgb(147,198,231)'}}>MERN STACK WEB DEVELOPER</p><a className="btn btn-primary btn-lg me-2" role="button" data-bss-hover-animate="pulse" href="#" style={{background: 'rgb(147,198,231)', color: 'var(--bs-black)', borderStyle: 'none'}}>My Resume</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-xl-5 m-xl-5"><img className="rounded img-fluid w-100 fit-cover" style={{minHeight: '300px'}} src={bannerImage} /></div>
          </div>
        </div>
    </div>
  )
}

export default HeroSection
