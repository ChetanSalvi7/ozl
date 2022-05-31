import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PartnerLogo1 from '../../backend/img/partner/01.png';
import PartnerLogo2 from '../../backend/img/partner/02.png';
import PartnerLogo3 from '../../backend/img/partner/03.png';
import PartnerLogo4 from '../../backend/img/partner/04.png';
import PartnerLogo5 from '../../backend/img/partner/05.jpg';
import PartnerLogo6 from '../../backend/img/partner/06.jpg';

const OurPartners = () => {

    const PartnerData = [
    {name:'Allianz Suisse',image:`${PartnerLogo1}`},
    {name:'Basler',image:`${PartnerLogo2}`},
    {name:'Marsh',image:`${PartnerLogo3}`},
    {name:'AXA',image:`${PartnerLogo4}`},]

  return (
    <>
    <section className="py-3 py-lg-5 our-partner">
        <div className="container-xxl px-lg-5">
            <h3 className="h2 text-center fw-bold mb-3 mb-lg-5">Our Partners</h3>
            <div className="row">
                <div className="col-lg-4">
                    <div className="swiper partnerSwiperText">
                        <div className="swiper-wrapper">
                        <Swiper   
                            spaceBetween={10}  
                            slidesPerView={1}  >
                                <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="bg-primary text-white p-3">
                                    <h4 className="h3 fw-bold">Insurance</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                        suffered alteration in some form, by injected humour</p>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="bg-primary text-white p-3">
                                    <h4 className="h3 fw-bold">Security Logistics</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                                </div>
                            </div>
                            </SwiperSlide>
                            </Swiper>
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-8">
                    <div thumbsSlider="" className="swiper partnerSwiperImage">
                        <div className="swiper-wrapper">

                        <Swiper   
                            spaceBetween={10}  
                            slidesPerView={1}  >
                                <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="row">
                                    {PartnerData.map((showData)=>{
                                        return(
                                            <>
                                            <div className="col-6 mb-3">
                                                <div className="partner-box">
                                                    <div className="partner-box-item">
                                                        <img src={showData.image} alt="logo"
                                                    className="mt-lg-5"/>
                                                <div>{showData.name}</div>
                                            </div>
                                        </div>
                                    </div>
                                            
                                            </>
                                        )
                                    })}
                                    
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="row">
                                    <div className="col-6 mb-3">
                                        <div className="partner-box">
                                            <div className="partner-box-item">
                                                <img src={PartnerLogo5} alt=""
                                                    className="mt-lg-5"/>
                                                <div>Allianz Suisse</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <div className="partner-box">
                                            <div className="partner-box-item">
                                                <img src={PartnerLogo6} alt=""
                                                    className="mt-lg-5"/>
                                                <div>Basler</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default OurPartners