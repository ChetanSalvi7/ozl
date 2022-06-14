import React, { useState } from 'react'
import 'swiper/css';
import "swiper/core";
import "swiper/bundle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper';
import 'swiper/css';

const ImageUrl = 'https://ozl.v-protect.eu/ozl/storage/our-partner-content/'

const ImageBox = [{ PartnerLogo1: '1654164826.png',PartnerLogo2: '1654165127.png',PartnerLogo3: '1654165155.jpg', PartnerLogo4: '1654165174.jpg',PartnerLogo5: '1654165198.jpg',
PartnerLogo6: '1654165211.jpg',PartnerLogo7: '1654165233.jpg',PartnerLogo8: '1654165245.png',PartnerLogo9: '1654165276.jpg',PartnerLogo10: '1654165310.jpg',
PartnerLogo11: '1654165340.png',PartnerLogo12: '1654165359.png',PartnerLogo13: '1654165388.jpg',PartnerLogo14: '1654165410.jpg',PartnerLogo15: '1654165455.png'
}]



const OurPartners = () => {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

    const PartnerName = [{ id: '4', name: 'Storage' },
    { id: '5', name: 'Security' },
    { id: '6', name: 'Insurance' },
    { id: '7', name: 'Security Logistics' },
    { id: '8', name: 'Precious metals trading' },
    { id: '9', name: 'Art logistics' }];

    const PartnerInfo = [
        { id: 2, name1: 'Schweiz AG', image1: `${ImageUrl + ImageBox[0].PartnerLogo1}`, PartnerName_id: 4 },
        { id: 3, name1: ' ARGUS', image1: `${ImageUrl + ImageBox[0].PartnerLogo2}`, PartnerName_id: 4 },
        { id: 4, name1: 'Marsh', image1: `${ImageUrl + ImageBox[0].PartnerLogo3}`, PartnerName_id: 5 },
        { id: 5, name1: 'OWD', image1: `${ImageUrl + ImageBox[0].PartnerLogo4}`, PartnerName_id: 5 },
        { id: 6, name1: 'Allianz Suisse', image1: `${ImageUrl + ImageBox[0].PartnerLogo5}`, PartnerName_id: 6 },
        { id: 7, name1: 'Basler', image1: `${ImageUrl + ImageBox[0].PartnerLogo6}`, PartnerName_id: 6 },
        { id: 8, name1: 'Marsh', image1: `${ImageUrl + ImageBox[0].PartnerLogo7}`, PartnerName_id: 6 },
        { id: 9, name1: 'AXA', image1: `${ImageUrl + ImageBox[0].PartnerLogo8}`, PartnerName_id: 6 },
        { id: 10, name1: 'Loomis', image1: `${ImageUrl + ImageBox[0].PartnerLogo9}`, PartnerName_id: 7 },
        { id: 11, name1: 'Prosegur', image1: `${ImageUrl + ImageBox[0].PartnerLogo10}`, PartnerName_id: 7 },
        { id: 12, name1: 'Rheingold Edelmetall', image1: `${ImageUrl + ImageBox[0].PartnerLogo11}`, PartnerName_id: 8 },
        { id: 13, name1: 'Edelmetallhandel ', image1: `${ImageUrl + ImageBox[0].PartnerLogo12}`, PartnerName_id: 8 },
        { id: 14, name1: 'Crozier', image1: `${ImageUrl + ImageBox[0].PartnerLogo13}`, PartnerName_id: 9 },
        { id: 15, name1: 'Kunsttrans', image1: `${ImageUrl + ImageBox[0].PartnerLogo14}`, PartnerName_id: 9 },
        { id: 16, name1: 'HAAS', image1: `${ImageUrl + ImageBox[0].PartnerLogo15}`, PartnerName_id: 9 },]

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
                                            {React.Children.toArray(PartnerName.map((showName) => {
                                                return (
                                                    <>
                                                        <SwiperSlide key={showName.id}>
                                                            <div className="swiper-slide">
                                                                <div className="bg-primary d-flex flex-column h-100 text-white">
                                                                    <h4 className="h3 fw-bold" >{showName.name}</h4>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    </>
                                                )
                                            }))}

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
                                        {/* partnername map for how many time swiper silde */}
                                        {React.Children.toArray(PartnerName.map((index) => {
                                            return (
                                                <>
                                                    <SwiperSlide key={index.id}>
                                                        <div className="swiper-slide">
                                                            <div className="row">
                                                                {/* Partnerinfo map function  */}
                                                                {React.Children.toArray(PartnerInfo.map((showInfo) => {
                                                                    {/* partnerinfo me vhi print ho jisme partnername ki id ho */ }
                                                                    if (index.id == showInfo.PartnerName_id) {
                                                                        return (
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
                                                                    }

                                                                }))}
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                </>
                                            )
                                        }))}

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







