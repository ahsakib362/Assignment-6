import React from 'react';
import image from "../../asset/images/FlipImage1.png";

const AboutMe = () => {
  return (
    <div className="container">
        <div className="row">
          <div className="col-md-6" style={{padding: '24px 12px', marginTop: '48px', marginBottom: '48px', paddingTop: '48px', paddingBottom: '48px', paddingRight: '0px', paddingLeft: '0px'}}><img width={356} height={438} src={image} /></div>
          <div className="col-md-6" style={{padding: '24px 12px', marginTop: '48px', marginBottom: '48px', paddingTop: '48px', paddingBottom: '48px'}}>
            <p style={{fontWeight: 'bold', fontSize: '18px', fontFamily: '"Andika New Basic", sans-serif', marginTop: '10px'}}>ABOUT ME</p>
            <h1 style={{fontFamily: '"Andika New Basic", sans-serif', fontSize: '34.5px'}}>I can develop that help People</h1>
            <p style={{color: 'rgb(0,0,0)'}}><br /><span style={{color: 'rgb(102, 102, 102)'}}>Hi, my name is Abdullah Hamid Sakib</span>.<span style={{color: 'rgb(102, 102, 102)'}}>&nbsp;I’ve spent most of my waking hours for the last two years designing, programming and operating Websites Using MERN. I design website using React and develop website using NodeJs, ExpressJs , MongoDB</span><br /><br /></p>
            <div className="d-flex align-items-center align-items-md-start align-items-xl-center">
              <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center me-4 d-inline-block bs-icon xl" style={{width: '50px', height: '50px', background: 'rgb(147,198,231)', color: 'var(--bs-black)'}}><i className="fab fa-react" /></div>
              <div>
                <h4 style={{fontFamily: '"Andika New Basic", sans-serif'}}>Professional React Developer</h4>
              </div>
            </div>
            <div className="d-flex align-items-center align-items-md-start align-items-xl-center" style={{margin: '0px', marginTop: '20px'}}>
              <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center me-4 d-inline-block bs-icon xl" style={{width: '50px', height: '50px', color: 'var(--bs-black)', background: 'rgb(147,198,231)'}}><i className="fab fa-node" /></div>
              <div>
                <h4 style={{fontFamily: '"Andika New Basic", sans-serif'}}>Professional Node Js Developer</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AboutMe
