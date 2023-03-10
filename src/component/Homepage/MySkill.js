import React from 'react'

const MySkill = () => {
  return (
    <div className="container" style={{fontFamily: '"Andika New Basic", sans-serif'}}>
        <h1 style={{textAlign: 'center', fontWeight: 'bold', fontSize: '28px', marginBottom: '48px', paddingBottom: '48px'}}>MY SKILLS</h1>
        <div className="row">
          <div className="col-md-3">
            <div className="d-flex p-3">
              <div className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon sm" style={{background: 'rgb(147,198,231)'}}><i className="fab fa-html5" style={{color: 'black'}} /></div>
              <div className="px-2">
                <h5 className="mb-0 mt-1">HTML 5</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{margin: 'auto 0px'}}>
            <div className="progress" style={{Primary: '#93c6e7', PrimaryRgb: '147,198,231', fontSize: '16px', color: 'black', fontWeight: 'bold', filter: 'contrast(100%)', background: 'rgb(224, 224, 224)', Info: '#1c82ad', InfoRgb: '28,130,173'}}>
              <div className="progress-bar bg-info progress-bar-striped" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>90%</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex p-3">
              <div className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon sm" style={{background: 'rgb(147,198,231)'}}><i className="fab fa-react" style={{color: 'black'}} /></div>
              <div className="px-2">
                <h5 className="mb-0 mt-1">REACT JS</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{margin: 'auto 0px'}}>
            <div className="progress" style={{fontSize: '16px', color: 'rgb(0,0,0)', fontFamily: '"Andika New Basic", sans-serif', fontWeight: 'bold', background: 'rgb(224, 224, 224)', Info: '#1c82ad', InfoRgb: '28,130,173'}}>
              <div className="progress-bar bg-info progress-bar-striped" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>80%</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="d-flex p-3">
              <div className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon sm" style={{background: 'rgb(147,198,231)'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor" style={{color: 'black'}}>
                  {/*! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. */}
                  <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
                </svg></div>
              <div className="px-2">
                <h5 className="mb-0 mt-1">CSS 3</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{margin: 'auto 0px'}}>
            <div className="progress" style={{Primary: '#93c6e7', PrimaryRgb: '147,198,231', fontSize: '16px', color: 'black', fontWeight: 'bold', background: 'rgb(224, 224, 224)', Info: '#1c82ad', InfoRgb: '28,130,173'}}>
              <div className="progress-bar bg-info progress-bar-striped" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>90%</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex p-3">
              <div className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon sm" style={{background: 'rgb(147,198,231)'}}><i className="fab fa-node" style={{color: 'black'}} /></div>
              <div className="px-2">
                <h5 className="mb-0 mt-1">NODE&nbsp;JS</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{margin: 'auto 0px'}}>
            <div className="progress" style={{background: 'rgb(224, 224, 224)', Info: '#1c82ad', InfoRgb: '28,130,173', fontSize: '16px', fontWeight: 'bold'}}>
              <div className="progress-bar bg-info progress-bar-striped" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>80%</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="d-flex p-3">
              <div className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon sm" style={{background: 'rgb(147,198,231)'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor" style={{color: 'black'}}>
                  {/*! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. */}
                  <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
                </svg></div>
              <div className="px-2">
                <h5 className="mb-0 mt-1">BOOTSTRAP</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{margin: 'auto 0px'}}>
            <div className="progress" style={{Primary: '#93c6e7', PrimaryRgb: '147,198,231', fontSize: '16px', color: 'bs-black', fontWeight: 'bold', background: 'rgb(224, 224, 224)', Info: '#1c82ad', InfoRgb: '28,130,173'}}>
              <div className="progress-bar bg-info progress-bar-striped" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}>85%</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex p-3">
              <div className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon sm" style={{background: 'rgb(147,198,231)'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor" style={{color: 'black'}}>
                  {/*! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. */}
                  <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z" />
                </svg></div>
              <div className="px-2">
                <h5 className="mb-0 mt-1">EXPRESS JS</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{margin: 'auto 0px'}}>
            <div className="progress" style={{background: 'rgb(224, 224, 224)', fontSize: '16px', fontWeight: 'bold', Info: '#1c82ad', InfoRgb: '28,130,173'}}>
              <div className="progress-bar bg-info progress-bar-striped" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}>75%</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="d-flex p-3">
              <div className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon sm" style={{background: 'rgb(147,198,231)'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor" style={{color: 'black'}}>
                  {/*! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. */}
                  <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
                </svg></div>
              <div className="px-2">
                <h5 className="mb-0 mt-1">JAVASCRIPT</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{margin: 'auto 0px'}}>
            <div className="progress" style={{Primary: '#93c6e7', PrimaryRgb: '147,198,231', fontSize: '16px', color: 'black', fontWeight: 'bold', background: 'rgb(224, 224, 224)', Info: '#1c82ad', InfoRgb: '28,130,173'}}>
              <div className="progress-bar bg-info progress-bar-striped" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}>85%</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex p-3">
              <div className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon sm" style={{background: 'rgb(147,198,231)'}}><i className="fas fa-leaf" style={{color: 'black'}} /></div>
              <div className="px-2">
                <h5 className="mb-0 mt-1">MONGO DB</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{margin: 'auto 0px'}}>
            <div className="progress" style={{background: 'rgb(224, 224, 224)', fontSize: '16px', fontWeight: 'bold', Info: '#1c82ad', InfoRgb: '28,130,173'}}>
              <div className="progress-bar bg-info progress-bar-striped" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>80%</div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MySkill
