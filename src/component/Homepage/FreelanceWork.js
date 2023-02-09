import React from 'react';
import backgroundImage from "../../asset/images/pattern.png"

const FreelanceWork = () => {
  return (
    <section className="py-4 py-xl-5">
        <div className="container h-100">
          <div className="text-white border rounded border-0 p-4 py-5" style={{fontFamily: '"Andika New Basic", sans-serif', background: `url(${backgroundImage}) `, backgroundColor: '#aee2ff ', PrimaryRgb: '174,226,255', marginTop: '48px'}}> 
            <div className="row h-100">
              <div className="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center">
                <div>
                  <h1 className="display-5 text-uppercase fw-bold text-center text-dark mb-3">I'm Available for freelance work</h1><button className="btn fs-5 link-dark  border rounded-pill border-2 border-dark py-2 px-4" data-bss-hover-animate="pulse" type="button" style={{backgroundColor: '#93c6e7', InfoRgb: '147,198,231', fontWeight: 'bold', marginTop: '24px'}}>Hire Me Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default FreelanceWork
