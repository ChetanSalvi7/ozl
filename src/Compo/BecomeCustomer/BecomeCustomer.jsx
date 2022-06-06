import React from 'react'
import CustomerLogo from "../storage/become-customer.png";

const BecomeCustomer = () => {
  return (
    <>
    <section className="container-fluid px-lg-5 text-white">
        <div
          className="p-3 p-lg-4 py-lg-5"
          style={{backgroundImage: `url(${CustomerLogo})`,backgroundRepeat: 'no-repeat'}}
        >
          <div className="row align-items-center">
            <div className="col-lg-4">
              <h2 className="h2 fw-bold">Do you want to become a customer?</h2>
            </div>
            <div className="col-lg-4">
              <p>
                Persons entitled to sign can also verify their passport data
                electronically and save the official certification of the
                documents and the postage for dispatch.
              </p>
              <a href="#" className="btn btn-secondary">
                <div className="small">Electronic Verification</div>
                <div className="text-uppercase fw-bold">as a customer</div>
              </a>
            </div>
            <div className="col-lg-4">
              <p>
                In order to save time and costs (certification and postage), it
                is possible to electronically verify the passport data and sign
                the agreement electronically.
              </p>
              <a href="#" className="btn btn-secondary">
                <div className="small">Electronic Verification</div>
                <div className="text-uppercase fw-bold">as a signatory</div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BecomeCustomer