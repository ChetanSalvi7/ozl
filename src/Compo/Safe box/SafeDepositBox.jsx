import React from 'react'
import WeightLogo from '../../backend/img/Weight.svg';
import DimensionsLogo from '../../backend/img/Dimensions.svg';
import BannerLogo from '../../backend/img/hero-banner-2.jpg';

const SafeDepositBox = () => {

    const BoxsData = [{name1:'Safe',name2:'deposit box',weight:'20 kg',dimensions:'4.5 x 27 x 39 cm (4.7 litres)',link: 'https://www.onboarding.li/en/identification/?aes=yes&language=en&client=ozl-offenes-zolllager-in-liechtenstein-f4kf9enyfh4jsf6',offerText1:'Starting From',offerprice:'CHF 750.55',offerText2:'per year'},
    {name1:'VAULT',name2:'SMALL',weight:'100 kg',dimensions:'25.6 x 35.6 x 29.5 cm (27 litres)',link: 'https://www.onboarding.li/en/identification/?aes=yes&language=en&client=ozl-offenes-zolllager-in-liechtenstein-f4kf9enyfh4jsf6',offerText1:'Starting From',offerprice:"CHF 1'650.00",offerText2:'per year'},
    {name1:'VAULT',name2:'MEDIUM',weight:'250 kg',dimensions:'47 x 46 x 36 cm (78 litres)',link: 'https://www.onboarding.li/en/identification/?aes=yes&language=en&client=ozl-offenes-zolllager-in-liechtenstein-f4kf9enyfh4jsf6',offerText1:'',offerprice:'ON REQUEST',offerText2:''},
    {name1:'Vault',name2:'large',weight:'1500 kg',dimensions:'167 x 56 x 37 cm(336 litres)',link: 'https://www.onboarding.li/en/identification/?aes=yes&language=en&client=ozl-offenes-zolllager-in-liechtenstein-f4kf9enyfh4jsf6',offerText1:'',offerprice:'ON REQUEST',offerText2:''}]

  return (
    <>
    {/* Banner--start*/}
    <section className="hero-section container-fluid px-lg-5">
    <div className="swiper heroSwiper">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <img src={BannerLogo} alt="" className="w-100" style={{width: '100%'}}/>
                <div className="banner-details">
                    <div>
                        <h2 className="h2 fw-bold text-shadow">Our range of storage facilities - <br className="d-none d-md-block"/>individual and versatile.</h2>
                        <p className="text-shadow">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="heroSwiper-pagination"></div>
    </div>
</section>
    {/* Banner--end */}

    <section className="py-3 py-lg-5">
    <div className="container-xxl">
        <h3 className="h2 text-center fw-bold mb-3 mb-lg-5">Your solution - Our services</h3>
        <p className="text-center">Our range of storage facilities specially tailored to our customers' needs includes individual vaults, vault spaces and safe deposit boxes in various sizes. Technical development involves individual adaptation to the storage requirements of the relevant valuables. Whether you have precious metals, art, documents or other personal valuables - we can store any of these at OZL AG.</p>

        <div className="row mt-5">
            {BoxsData.map((showData)=>{
                return(
                    <>
                    <div className="col-md-6 col-lg-3 d-flex mb-4">
                        <div className="pricing bg-primary-extra-light p-3">
                            <h4 className="h4 fw-bold text-uppercase mb-5">{showData.name1} <br className="d-n0ne d-lg-block"/>{showData.name2}</h4>
                            <ul className="list-unstyled p-0 mt-3">
                                <li className="mb-3 d-flex">
                                    <span className="avatar align-middle me-2">
                                        <img src={WeightLogo} alt="" className="img-fluid"/>
                                    </span>
                                    <span>max. storage weight: <b>{showData.weight}</b></span>
                                </li>
                                <li className="d-flex">
                                    <span className="avatar align-middle me-2">
                                        <img src={DimensionsLogo} alt="" className="img-fluid"/>
                                    </span>
                                    <span>Dimensions:<br/><b>{showData.dimensions}</b></span>
                                </li>
                            </ul>
                            <a href={showData.link} className="btn btn-primary btn-lg mt-auto w-100" target="_blank">Enquire now</a>
                            <div className="offer-price">
                                <div className="text-white small">{showData.offerText1}</div>
                                <div className="h4 fw-bold mb-0">{showData.offerprice}</div>
                                <div className="text-white small">{showData.offerText2}</div>
                            </div>
                        </div>
                    </div>
                    </>
                )
            })}
        </div>

        <div className="process bg-primary mt-5 p-3 py-lg-5">
            <div className="row text-white">
                <div className="mb-3 mb-lg-0 col-md-6 col-lg-3 align-self-center">
                    <h3 className="h2 fw-bold text-uppercase">order process</h3>
                </div>
                <div className="mb-3 mb-lg-0 col-md-6 col-lg-3 box">
                    <div className="avatar avatar-sm bg-primary position-relative border border-1 border-white h3">1</div>
                    <h4 className="h4">Select product</h4>
                    <p>Please observe the total weight as well as the volume to be stored.</p>
                </div>
                <div className="mb-3 mb-lg-0 col-md-6 col-lg-3 box">
                    <div className="avatar avatar-sm bg-primary position-relative border border-1 border-white h3">2</div>
                    <h4 className="h4">Select additional services</h4>
                    <p>You can arrange storage and request an audit or other services remotely.</p>
                </div>
                <div className="mb-3 mb-lg-0 col-md-6 col-lg-3">
                    <div className="avatar avatar-sm bg-primary position-relative border border-1 border-white h3">3</div>
                    <h4 className="h4">Complete and return contract/documents</h4>
                    <p>Complete and sign documents and enclose additional information.</p>
                </div>
            </div>
        </div>

        <div className="accordion mt-3 mt-lg-5" id="orderProcess">
            <div className="accordion-item">
                <h2 className="accordion-header">
                	<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#one" aria-expanded="true" aria-controls="one">Safe deposit boxes</button>
                </h2>
                <div id="one" className="accordion-collapse collapse show" data-bs-parent="#orderProcess">
					<div className="accordion-body">
					We can offer you safe deposit boxes in various sizes for storing your precious metals and other valuables, as well as documents of all types, up to a volume of 24.5 litres. Should you require further information on additional services, you will find further details under "Additional services".
					</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                	<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#two" aria-expanded="false" aria-controls="two">Vaults</button>
                </h2>
                <div id="two" className="accordion-collapse collapse" data-bs-parent="#orderProcess">
					<div className="accordion-body">
					Within our building, you have three vault categories to choose from (storage capacity of up to 100 kg, up to 250 kg and up to 1500 kg). Other bookable options such as extended powers of attorney, unrestricted access, etc. can be found under the heading "Additional services".
					</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#three" aria-expanded="false" aria-controls="three">Additional services</button>
                </h2>
                <div id="three" className="accordion-collapse collapse" data-bs-parent="#orderProcess">
					<div className="accordion-body">
					The services that we offer range from the opening of safe deposit boxes to the safekeeping of your code by an auditing company. Further contractual arrangements such as special powers of attorney complete our portfolio. Please write to us or call us with your request. We will be pleased to provide you with further information on the services shown below.
					<ul>
						<li>Lifetime package (extended powers of attorney)</li>
						<li>Access package (ongoing access authorisations, unlimited number of visits)</li>
						<li>Audit package (safekeeping of key/code, opening/closing, storage/removal, audit)</li>
						<li>Asset package (ongoing withdrawal arrangements)</li>
					</ul>
					</div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default SafeDepositBox