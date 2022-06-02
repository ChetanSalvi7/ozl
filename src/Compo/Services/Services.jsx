import React from 'react'

const Services = () => {
  return (
    <>
    <section className="py-3 py-lg-5">
        <div className="container-xxl px-lg-5">
          <h3 className="h2 text-center fw-bold mb-3 mb-lg-5">Our Services</h3>
          <div className="service-grid">
            <a href="" className="service service-grid-1">
              <h4 className="h4 fw-bold mb-lg-3">
                Custody in a fully regulated environment
              </h4>
              <p>
                The full regulation guarantees that the assets can be returned
                to the financial cycle at any time!
              </p>
            </a>
            <a href="" className="service service-grid-2">
              <h4 className="h4 fw-bold mb-lg-3">All risk insurance</h4>
              <p>
                All stored precious metals are fully insured including the risk
                of embezzlement.
              </p>
            </a>
            <a href="" className="service service-grid-3">
              <h4 className="h4 fw-bold mb-lg-3">Bankable reconciliation</h4>
              <p>Reports & ratings based on banking standards</p>
            </a>
            <a href="" className="service service-grid-4">
              <h4 className="h4 fw-bold mb-lg-3">
                Segregated storage & customs bonded vault
              </h4>
              <p>
                OZL AG combines security, custody and logistics at the highest
                level.
              </p>
            </a>
            <a href="" className="service service-grid-5">
              <h4 className="h4 fw-bold mb-lg-3">Asset protection</h4>
              <p>
                Asset protection refers to the ability to protect assets from
                being accessed by third parties.
              </p>
            </a>
            <a href="" className="service service-grid-6">
              <h4 className="h4 fw-bold mb-lg-3">Fees</h4>
              <p>Please find our pricing</p>
            </a>
            <a href="" className="service service-grid-7">
              <h4 className="h4 fw-bold mb-lg-3">Contracts</h4>
              <p>Please find our draft contracts</p>
            </a>
          </div>

          <div className="row mt-lg-5 mt-5 justify-content-center">
            <div className="col-12 col-sm-auto">
              <a className="btn btn-lg btn-primary text-uppercase text-white">
                custody agreement(pdf)
              </a>
            </div>
            <div className="col-12 col-sm-auto">
              <a className="btn btn-lg btn-primary text-uppercase text-white">
                rental agreement (pdf)
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services