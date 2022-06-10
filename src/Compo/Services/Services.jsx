import React, { useContext } from 'react'
import { SiteData } from "../../App";
import { NavLink } from "react-router-dom";

const Services = () => {
  const SiteDataInfo = useContext(SiteData);
  let timeout;
  const ScrollToServiceSection = ()=>{
    timeout =setTimeout(scrollToService,300);
  };
  const scrollToService = () =>{
    window.scrollTo({
      top: 600,
      behavior:'smooth'
    });
  };

  return (
    <>
    <section className="py-3 py-lg-5">
        <div className="container-xxl px-lg-5">
          <h3 className="h2 text-center fw-bold mb-3 mb-lg-5">Our Services</h3>
          <div className="service-grid">
            <NavLink to='/ourservices' className="service service-grid-1" onClick={ScrollToServiceSection}>
              <h4 className="h4 fw-bold mb-lg-3">
                {SiteDataInfo.our_service[0].our_service_title_single.value}
              </h4>
              <p>
                The full regulation guarantees that the assets can be returned
                to the financial cycle at any time!
              </p>
            </NavLink>
            <NavLink to='/ourservices' className="service service-grid-2" onClick={ScrollToServiceSection}>
              <h4 className="h4 fw-bold mb-lg-3"> {SiteDataInfo.our_service[1].our_service_title_single.value}</h4>
              <p>
                All stored precious metals are fully insured including the risk
                of embezzlement.
              </p>
            </NavLink>
            <NavLink to='/ourservices' className="service service-grid-3" onClick={ScrollToServiceSection}>
              <h4 className="h4 fw-bold mb-lg-3">{SiteDataInfo.our_service[2].our_service_title_single.value}</h4>
              <p>Reports & ratings based on banking standards</p>
            </NavLink>
            <NavLink to='/ourservices' className="service service-grid-4">
              <h4 className="h4 fw-bold mb-lg-3">
              {SiteDataInfo.our_service[3].our_service_title_single.value}
              </h4>
              <p>
                OZL AG combines security, custody and logistics at the highest
                level.
              </p>
            </NavLink>
            <NavLink to='/ourservices' className="service service-grid-5" onClick={ScrollToServiceSection}>
              <h4 className="h4 fw-bold mb-lg-3">{SiteDataInfo.our_service[4].our_service_title_single.value} </h4>
              <p>
                Asset protection refers to the ability to protect assets from
                being accessed by third parties.
              </p>
            </NavLink>
            <NavLink to='/ourservices' className="service service-grid-6" onClick={ScrollToServiceSection}>
              <h4 className="h4 fw-bold mb-lg-3"> {SiteDataInfo.our_service[5].our_service_title_single.value} </h4>
              <p>Please find our pricing</p>
            </NavLink>
            <NavLink to='/ourservices' className="service service-grid-7" onClick={ScrollToServiceSection}>
              <h4 className="h4 fw-bold mb-lg-3"> {SiteDataInfo.our_service[6].our_service_title_single.value}</h4>
              <p>Please find our draft contracts</p>
            </NavLink>
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