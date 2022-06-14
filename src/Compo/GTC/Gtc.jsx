import React from 'react'
import SliderImage from '../main page/SliderImage'


const Gtc = () => {
  return (
    <>
    <SliderImage/>
    <section className="py-3 py-lg-5">
        <div className="container">
            <h3 className="h2 text-center fw-bold mb-3 mb-lg-5">General terms and conditions</h3>
            <div className="card border-2 border-primary mb-3">
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col">
                            <h4 className="h4 fw-bold">Allocated Custody</h4>
                            <p className="m-0">General Terms and conditions allocated custody</p>
                        </div>
                        <div className="col-auto">
                            <a href="https://www.ozl.li/fileadmin//user_upload/OZL_AGB_VERWAHRUNG_DE_EN_15_12_2021.pdf" className="btn btn-primary btn-lg text-uppercase fw-bold" download target="_blank">gtc (pdf)</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card border-2 border-primary mb-3">
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col">
                            <h4 className="h4 fw-bold">Renting</h4>
                            <p className="m-0">General terms and conditions renting</p>
                        </div>
                        <div className="col-auto">
                            <a href="https://www.ozl.li/fileadmin//user_upload/OZL_AGB_MIETE___DE_EN_15_12_2021.pdf" className="btn btn-primary btn-lg text-uppercase fw-bold" download target="_blank">gtc (pdf)</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    </>
  )
}

export default Gtc