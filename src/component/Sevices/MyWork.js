import React from 'react';
import gadhetWeb from "../../asset/images/ElectronicsEcommerce.png";
import PetCareWeb from "../../asset/images/PetCareWebsite.jpg";
import PortfolioWeb from "../../asset/images/PortfolioWebsite.jpg";

const MyWork = () => {
  return (
    <div className="container py-4 py-xl-5" style={{fontFamily: '"Andika New Basic", sans-serif'}}>
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <p className="w-lg-50" style={{fontWeight: 'bold', fontSize: '18px'}}>MY COMPLETE PROJECT</p>
            <h2 style={{fontWeight: 'bold'}}>LATEST WORK</h2>
          </div>
        </div>
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <div className="col">
            <div><img className="rounded img-fluid d-block w-100 fit-cover" style={{height: '200px'}} src={gadhetWeb} />
              <div className="py-4">
                <h4>Gadgets E-commerce Website</h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div><img className="rounded img-fluid d-block w-100 fit-cover" style={{height: '200px'}} src={PetCareWeb} width={336} height={200} />
              <div className="py-4">
                <h4>Pet Care Website</h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div><img className="rounded img-fluid d-block w-100 fit-cover" style={{height: '200px'}} src={PortfolioWeb} />
              <div className="py-4">
                <h4>Portfolio Website</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <div className="col">
            <div><img className="rounded img-fluid d-block w-100 fit-cover" style={{height: '200px'}} src={gadhetWeb} />
              <div className="py-4">
                <h4>Gadgets E-commerce Website</h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div><img className="rounded img-fluid d-block w-100 fit-cover" style={{height: '200px'}} src={PetCareWeb} width={336} height={200} />
              <div className="py-4">
                <h4>Pet Care Website</h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div><img className="rounded img-fluid d-block w-100 fit-cover" style={{height: '200px'}} src={PortfolioWeb} />
              <div className="py-4">
                <h4>Portfolio Website</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MyWork
