import React from 'react'
import Rheingold from '../../backend/img/precious-metal/rheingold-logo.png'
import Banner from '../../backend/img/precious-metal/banner.jpg'
import ManufacturersMatels from './Manufacturers/ManufacturersMatels'
import OnlineMetals from './Online metals/OnlineMetals'

const PreciousMetals = () => {
    return (
        <>
        <section class="hero-section container-fluid px-lg-5">
    <div class="swiper heroSwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src={Banner} alt="" class="w-100" style={{width: '100%'}}/>
                <div class="banner-details">
                    <div>
                        <h2 class="h2 fw-bold text-shadow">Buy and sell precious metals <br class="d-none d-md-block"/>very easily - directly at our domicile.</h2>
                        <p class="text-shadow">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="heroSwiper-pagination"></div>
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