import React from 'react'
import Rheingold from '../../backend/img/precious-metal/rheingold-logo.png'
import Banner from '../../backend/img/precious-metal/banner.jpg'
import ManufacturersMatels from './Manufacturers/ManufacturersMatels'
import OnlineMetals from './Online metals/OnlineMetals'

const PreciousMetals = () => {
    return (
        <>
        <section className="hero-section container-fluid px-lg-5">
    <div className="swiper heroSwiper">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <img src={Banner} alt="" className="w-100" style={{width: '100%'}}/>
                <div className="banner-details">
                    <div>
                        <h2 className="h2 fw-bold text-shadow">Buy and sell precious metals <br className="d-none d-md-block"/>very easily - directly at our domicile.</h2>
                        <p className="text-shadow">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="heroSwiper-pagination"></div>
    </div>
</section>
            <section className="py-3 py-lg-5">
                <div className="container-xxl px-lg-5 text-center">
                    <p className="mb-3">Our partner for precious metals</p>
                    <img src={Rheingold} alt="" className="img-fluid"/>
                </div>
            </section>
            <OnlineMetals />
            <ManufacturersMatels />
        </>
    )
}

export default PreciousMetals