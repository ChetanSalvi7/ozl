import React, { useState } from 'react'
import 'swiper/css';
import "swiper/core";
import "swiper/bundle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper';
import 'swiper/css';

import PartnerLogo1 from '../storage/our-partner-content/1654164826.png';
import PartnerLogo2 from '../storage/our-partner-content/1654165127.png';
import PartnerLogo3 from '../storage/our-partner-content/1654165155.jpg';
import PartnerLogo4 from '../storage/our-partner-content/1654165174.jpg';
import PartnerLogo5 from '../storage/our-partner-content/1654165198.jpg';
import PartnerLogo6 from '../storage/our-partner-content/1654165211.jpg';
import PartnerLogo7 from '../storage/our-partner-content/1654165233.jpg';
import PartnerLogo8 from '../storage/our-partner-content/1654165245.png';
import PartnerLogo9 from '../storage/our-partner-content/1654165276.jpg';
import PartnerLogo10 from '../storage/our-partner-content/1654165310.jpg';
import PartnerLogo11 from '../storage/our-partner-content/1654165340.png';
import PartnerLogo12 from '../storage/our-partner-content/1654165359.png';
import PartnerLogo13 from '../storage/our-partner-content/1654165388.jpg';
import PartnerLogo14 from '../storage/our-partner-content/1654165410.jpg';
import PartnerLogo15 from '../storage/our-partner-content/1654165455.png';



const OurPartners = () => {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

    const PartnerName = [{id:'4',name: 'Storage' }, 
    {id:'5',name: 'Security' },
    {id:'6', name: 'Insurance' },
    {id:'7', name: 'Security Logistics' },
    {id:'8', name: 'Precious metals trading' },
    {id:'9',name: 'Art logistics' }];

    const PartnerInfo = [
        {name1:'Schweiz AG', image1: `${PartnerLogo1}` },
        { name1: ' ARGUS',image1: `${PartnerLogo2}` },
        {name1: 'Marsh', image1: `${PartnerLogo3}`, image2: `${PartnerLogo1}`, image3: `${PartnerLogo3}`, image4: `${PartnerLogo4}` },
        // {name1: 'OWD', image1: `${PartnerLogo4}` },
        // {name1:'AG', image1: `${PartnerLogo5}` },
        {name1: 'AXA', image1: `${PartnerLogo6}` },]

    return (
        <>
            <section className="py-3 py-lg-5 our-partner">
                <div className="container-xxl px-lg-5">
                    <div className="row">
                        <div className="col-lg-4 position-relative">
                            <div className="bg-primary p-3 h-100">
                                <h3 className="h2 fw-bold text-white mb-3 ">Our Partners</h3>
                                <Swiper className='mySwiper'
                                    modules={[Controller]} onSwiper={setFirstSwiper}
                                    controller={{ control: secondSwiper }}
                                    effect={"fade"}
                                    autoplay={true}
                                    // pagination={{ clickable: false }}
                                    speed={2000}
                                    grabCursor={true}
                                >
                                    <div className="swiper partnerSwiperText">
                                        <div className="swiper-wrapper">
                                            {PartnerName.map((showName, index) => {
                                                return (
                                                    <>
                                                        <SwiperSlide key={index}>
                                                            <div className="swiper-slide">
                                                                <div className="bg-primary d-flex flex-column h-100 text-white">
                                                                    <h4 className="h3 fw-bold" >{showName.name}</h4>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    </>
                                                )
                                            })}

                                        </div>
                                    </div>
                                </Swiper>
                            </div>
                            <div className="partnerSwiperText-pagination"></div>
                        </div>
                        <div className="col-lg-8">
                            <Swiper className='mySwiper'
                                spaceBetween={50}
                                modules={[Controller]}
                                onSwiper={setSecondSwiper}
                                controller={{ control: firstSwiper }}
                               
                                grabCursor={true}
                            >
                                <div thumbsSlider="" className="swiper partnerSwiperImage">
                                    <div className="swiper-wrapper">
                                        {PartnerName.map((index) => {
                                            return (
                                                <>
                                                    <SwiperSlide key={index}>
                                                        <div className="swiper-slide">
                                                            <div className="row">
                                                            {PartnerInfo.map((showInfo)=>{
                                                                return(
                                                                    <>
                                                                    <div className="col-6 col-sm-3 mb-3 mb-sm-0" key={showInfo.name1.toString()}>
                                                                        <div className="partner-box">
                                                                            <div className="partner-box-item">
                                                                                <img src={showInfo.image1} alt=""
                                                                                    className="mt-lg-5" />
                                                                                <div >{showInfo.name1}</div>
                                                                            </div>
                                                                        </div>
                                                                     </div>
                                                                    </>
                                                                )
                                                            })}
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                </>
                                            )
                                        })}

                                    </div>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurPartners