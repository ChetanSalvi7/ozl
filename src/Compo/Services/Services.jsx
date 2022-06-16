import React, { useContext } from 'react'
import { SiteData } from "../../App";
import { NavLink } from "react-router-dom";

const Services = () => {
  const SiteDataInfo = useContext(SiteData);
  let timeout;
  const ScrollToServiceSection = () => {
    timeout = setTimeout(scrollToService, 300);
  };
  const scrollToService = () => {
    window.scrollTo({
      top: 800,
      behavior: 'smooth'
    });
  };

  const StoreBox = [{id:'2', link1: '/ourservices#custody', classname: 'service service-grid-1', title1: `${SiteDataInfo.our_service[0].our_service_title_single.value}`, desc: `${SiteDataInfo.our_service[0].our_service_short_desc_single.value}` },
  {id:'3', link1: '/ourservices#allrisk', classname: 'service service-grid-2', title1: `${SiteDataInfo.our_service[1].our_service_title_single.value}`, desc: `${SiteDataInfo.our_service[1].our_service_short_desc_single.value}` },
  {id:'4', link1: '/ourservices#bankable', classname: 'service service-grid-3', title1: `${SiteDataInfo.our_service[2].our_service_title_single.value}`, desc: `${SiteDataInfo.our_service[2].our_service_short_desc_single.value}` },
  {id:'5', link1: '/ourservices#segregated', classname: 'service service-grid-4', title1: `${SiteDataInfo.our_service[3].our_service_title_single.value}`, desc: `${SiteDataInfo.our_service[3].our_service_short_desc_single.value}` },
  {id:'6', link1: '/ourservices#assetprotection', classname: 'service service-grid-5', title1: `${SiteDataInfo.our_service[4].our_service_title_single.value}`, desc: `${SiteDataInfo.our_service[4].our_service_short_desc_single.value}` },
  {id:'7', link1: '/ourservices#fees', classname: 'service service-grid-6', title1: `${SiteDataInfo.our_service[5].our_service_title_single.value}`, desc: `${SiteDataInfo.our_service[5].our_service_short_desc_single.value}` },
  {id:'8', link1: '/ourservices#conratats', classname: 'service service-grid-7', title1: `${SiteDataInfo.our_service[6].our_service_title_single.value}`, desc: `${SiteDataInfo.our_service[6].our_service_short_desc_single.value}` },]

  return (
    <>
      <section className="py-3 py-lg-5">
        <div className="container-xxl px-lg-5">
          <h3 className="h2 text-center fw-bold mb-3 mb-lg-5">{SiteDataInfo.outPutArray.our_service_main_title}</h3>
          <div className="service-grid">
            {React.Children.toArray(StoreBox.map((printData) => {
              return (
                <>
                  <NavLink to={printData.link1} className={printData.classname} onClick={ScrollToServiceSection} key={printData.id}  >
                    <h4 className="h4 fw-bold mb-lg-3">
                      {printData.title1}
                    </h4>
                    <p>{printData.desc}  </p>
                  </NavLink>
                </>
              )
            })

            )}

          </div>

          <div className="row mt-lg-5 mt-5 justify-content-center">
            <div className="col-12 col-sm-auto">
            <a href='https://ozl.li/fileadmin//user_upload/Mietvertrag_OZL_de_en.pdf' target='_blank' className="btn btn-lg btn-primary text-uppercase text-white">
            CUSTODY AGREEMENT (PDF)
              </a>
            </div>
            <div className="col-12 col-sm-auto">
              <a href='https://ozl.li/fileadmin//user_upload/Mietvertrag_OZL_de_en.pdf' target='_blank' className="btn btn-lg btn-primary text-uppercase text-white">
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