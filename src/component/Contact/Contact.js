import React from 'react'

const Contact = () => {
  return (
    <section className="position-relative py-4 py-xl-5">
        <div className="container position-relative" style={{fontFamily: '"Andika New Basic", sans-serif'}}>
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <p className="w-lg-50" style={{fontWeight: 'bold'}}>LET'S SAY HI</p>
              <h2 style={{fontWeight: 'bold'}}>CONTACT ME</h2>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-lg-4 col-xl-4" style={{width: '50%'}}>
              <div className="d-flex flex-column justify-content-center align-items-start h-100">
                <div className="d-flex align-items-center p-3">
                  <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon" style={{background: 'rgb(147,198,231)', color: 'black'}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-telephone-fill" style={{color: 'var(--bs-black)'}}>
                      <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg></div>
                  <div className="px-2">
                    <h6 className="mb-0">Phone</h6>
                    <p className="mb-0">+88-01852-571931</p>
                  </div>
                </div>
                <div className="d-flex align-items-center p-3">
                  <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon" style={{background: 'rgb(147,198,231)', color: 'black'}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-envelope-fill" style={{color: 'var(--bs-black)'}}>
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                    </svg></div>
                  <div className="px-2">
                    <h6 className="mb-0">Email</h6>
                    <p className="mb-0">abdullahhamid362@gmail.com</p>
                  </div>
                </div>
                <div className="d-flex align-items-center p-3">
                  <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon" style={{background: 'rgb(147,198,231)', color: 'black'}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-linkedin" style={{color: 'var(--bs-black)'}}>
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg></div>
                  <div className="px-2">
                    <h6 className="mb-0">LinkedIn</h6>
                    <p className="mb-0">Abdullah Hamid Sakib</p>
                  </div>
                </div>
                <div className="d-flex align-items-center p-3">
                  <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon" style={{background: 'rgb(147,198,231)', color: 'black'}}><i className="fas fa-map-marker-alt" /></div>
                  <div className="px-2">
                    <h6 className="mb-0">Location</h6>
                    <p className="mb-0">Chawkbazar,Chittagong</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4" style={{width: '50%'}}>
              <div>
                <form className="p-3 p-xl-4" method="post">
                  <div className="mb-3"><input className="form-control" type="text" id="name-1" name="name" placeholder="Name" /></div>
                  <div className="mb-3"><input className="form-control" type="email" id="email-1" name="email" placeholder="Email" /></div>
                  <div className="mb-3"><textarea className="form-control" id="message-1" name="message" rows={6} placeholder="Message" defaultValue={""} /></div>
                  <div><button className="btn btn-primary text-center d-block w-100" type="submit" style={{background: '#93C6E7', color: 'var(--bs-black)', fontSize: '16px', fontWeight: 'bold', borderStyle: 'none'}}>Send </button></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact
