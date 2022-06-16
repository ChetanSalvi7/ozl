import React,{useContext} from 'react'
import SliderImage from '../main page/SliderImage'
import { SiteData } from "../../App";

const OurServices = () => {
    const SiteDataInfo = useContext(SiteData);

    const locationUrlHash = window.location.hash;
    
    
    
   
  return (
    <>
    <SliderImage />
        <section className="py-3 py-lg-5" id="ourServicenav">
    <div className="container px-lg-5">
        <h3 className="h2 text-center fw-bold mb-3 mb-lg-5">{SiteDataInfo.outPutArray.our_service_main_title}</h3>
        <div className="row align-items-start">
            <div className="col-md-2 nav flex-sm-column nav-pills pe-0 mb-4 mb-sm-0" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button className={`nav-link  ${locationUrlHash == '#custody' || locationUrlHash == '' ? ' active': ''} `} data-bs-toggle="pill" data-bs-target="#custody" type="button" role="tab" aria-controls="custody" aria-selected={`${locationUrlHash == '#custody' || locationUrlHash == ''?'true':'false'}`}>{SiteDataInfo.our_service[0].our_service_title_single.value}</button>
                <button className={`nav-link  ${locationUrlHash == '#allrisk' ? ' active': ''} `} data-bs-toggle="pill" data-bs-target="#allrisk" type="button" role="tab" aria-controls="allrisk" aria-selected={`${locationUrlHash == '#allrisk' ? 'true':'false'}`}>{SiteDataInfo.our_service[1].our_service_title_single.value}</button>
                <button className={`nav-link  ${locationUrlHash == '#bankable' ? ' active': ''} `} data-bs-toggle="pill" data-bs-target="#bankable" type="button" role="tab" aria-controls="bankable" aria-selected={`${locationUrlHash == '#bankable' ? 'true':'false'}`}>{SiteDataInfo.our_service[2].our_service_title_single.value}</button>
                <button className={`nav-link  ${locationUrlHash == '#segregated' ? ' active': ''} `} data-bs-toggle="pill" data-bs-target="#segregated" type="button" role="tab" aria-controls="segregated" aria-selected={`${locationUrlHash == '#segregated' ? 'true':'false'}`}>{SiteDataInfo.our_service[3].our_service_title_single.value}</button>
                <button className={`nav-link  ${locationUrlHash == '#assetprotection' ? ' active': ''} `} data-bs-toggle="pill" data-bs-target="#assetprotection" type="button" role="tab" aria-controls="assetprotection" aria-selected={`${locationUrlHash == '#assetprotection' ? 'true':'false'}`}>{SiteDataInfo.our_service[4].our_service_title_single.value}</button>
                <button className={`nav-link  ${locationUrlHash == '#fees' ? ' active': ''} `} data-bs-toggle="pill" data-bs-target="#fees" type="button" role="tab" aria-controls="fees" aria-selected={`${locationUrlHash == '#fees' ? 'true':'false'}`}>{SiteDataInfo.our_service[5].our_service_title_single.value}</button>
                <button className={`nav-link  ${locationUrlHash == '#conratats' ? ' active': ''} `} data-bs-toggle="pill" data-bs-target="#conratats" type="button" role="tab" aria-controls="contracts" aria-selected={`${locationUrlHash == '#conratats' ? 'true':'false'}`}>{SiteDataInfo.our_service[6].our_service_title_single.value}</button>
            </div>


            <div className="col-md-10 tab-content" id="v-pills-tabContent">
                <div className={`tab-pane fade  ps-md-5 py-md-4 py-3 ${locationUrlHash == '#custody' || locationUrlHash == '' ? ' active show': ''} `} id="custody" role="tabpanel">
                    <div dangerouslySetInnerHTML={ { __html:SiteDataInfo.our_service[0].our_service_long_desc_single.value}}></div>
                </div>



                <div className={`tab-pane fade  ps-md-5 py-md-4 py-3 ${locationUrlHash == '#allrisk' ? ' active show': ''} `} id="allrisk" role="tabpanel">
                    <div dangerouslySetInnerHTML={ { __html:SiteDataInfo.our_service[1].our_service_long_desc_single.value}}></div>
                </div>



                <div className={`tab-pane fade  ps-md-5 py-md-4 py-3 ${locationUrlHash == '#bankable' ? ' active show': ''} `} id="bankable" role="tabpanel">
                <div dangerouslySetInnerHTML={ { __html:SiteDataInfo.our_service[2].our_service_long_desc_single.value}}></div>
                </div>




                <div className={`tab-pane fade  ps-md-5 py-md-4 py-3 ${locationUrlHash == '#segregated' ? ' active show': ''} `} id="segregated" role="tabpanel">
                <div dangerouslySetInnerHTML={ { __html:SiteDataInfo.our_service[3].our_service_long_desc_single.value}}></div>
                </div>




                <div className={`tab-pane fade  ps-md-5 py-md-4 py-3 ${locationUrlHash == '#assetprotection' ? ' active show': ''} `} id="assetprotection" role="tabpanel">
                <div dangerouslySetInnerHTML={ { __html:SiteDataInfo.our_service[4].our_service_long_desc_single.value}}></div>
                </div>





                <div className={`tab-pane fade  ps-md-5 py-md-4 py-3 ${locationUrlHash == '#fees' ? ' active show': ''} `} id="fees" role="tabpanel">
                <div dangerouslySetInnerHTML={ { __html:SiteDataInfo.our_service[5].our_service_long_desc_single.value}}></div>
                </div>




                <div className={`tab-pane fade  ps-md-5 py-md-4 py-3 ${locationUrlHash == '#conratats' ? ' active show': ''} `} id="conratats" role="tabpanel">
                <div dangerouslySetInnerHTML={ { __html:SiteDataInfo.our_service[6].our_service_long_desc_single.value}}></div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default OurServices;