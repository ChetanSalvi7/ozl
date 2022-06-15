import React,{useContext} from 'react'
import CustomerLogo from "../storage/become-customer.png";
import { SiteData } from "../../App";
import { NavLink } from 'react-router-dom';

const BecomeCustomer = () => {

  const SiteDataInfo = useContext(SiteData);

  return (
    <>
    <section className="container-fluid px-lg-5 text-white">
        <div
          className="p-3 p-lg-4 py-lg-5"
          style={{background: `url(${CustomerLogo}) no-repeat center/cover`}}
        >
          <div className="row align-items-center">
            <div className="col-lg-4">
              <h2 className="h2 fw-bold">{SiteDataInfo.outPutArray.landing_become_customer}</h2>
            </div>
            <div className="col-lg-4">
              <p>
              {SiteDataInfo.outPutArray.landing_become_customer_desc}
              </p>
              <NavLink to="/onboarding"  className="btn btn-secondary">
                <div className="small">Electronic Verification</div>
                <div className="text-uppercase fw-bold">as a customer</div>
              </NavLink>
            </div>
            <div className="col-lg-4">
              <p>
              {SiteDataInfo.outPutArray.landing_become_customer_desc_2}
              </p>
              <NavLink to="/onboarding" className="btn btn-secondary">
                <div className="small">Electronic Verification</div>
                <div className="text-uppercase fw-bold">as a signatory</div>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BecomeCustomer