import React from 'react'
import LogisticsLogo1 from '../../backend/img/logistic/01.jpg'
import LogisticsLogo2 from '../../backend/img/logistic/02.jpg'
import LogisticsLogo3 from '../../backend/img/logistic/03.jpg'
import LogisticsLogo4 from '../../backend/img/logistic/04.jpg'
import LogisticsLogo5 from '../../backend/img/logistic/05.jpg'
import LogisticsLogo6 from '../../backend/img/logistic/06.jpg'
import BannerLogo from '../../backend/img/hero-banner-1.jpg'

const Diamonds = () => {
    const Data2 = [{dataname: 'Optimum solutions via renowned partners',images: `${LogisticsLogo1}`},
        {dataname: 'State-of-the-art professional logistics infrastructure/Security and efficiency',images: `${LogisticsLogo2}`},
        {dataname: 'Global transportation of precious metals, art, and other valuables, including customs clearance',images: `${LogisticsLogo3}`},
        {dataname: 'International logistics within transit zones/Own customs specialists',images: `${LogisticsLogo4}`},
        {dataname: 'Global logistics and storage',images: `${LogisticsLogo5}`},
        {dataname: 'Full logistics service, from collection to delivery / All from a single source',images: `${LogisticsLogo6}`}];
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
                        <h2 className="h2 fw-bold text-shadow">Your diamonds in safe hands -<br className="d-none d-md-block"/>services ranging from collection to<br className="d-none d-md-block"/>customs clearance.</h2>
                        <p className="text-shadow">There are many variations of passages of Lorem Ipsum available.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="heroSwiper-pagination"></div>
    </div>
</section>
    {/* Banner--end */}
    <section className="py-3 py-lg-5">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-7">
                <div className="card mb-3 mb-lg-5">
                    <div className="card-body border border-2 border-primary text-center">
                        <h3 className="h2 text-center fw-bold mb-3">Update COVID-19</h3>
                        <p>The travel restriction due to the current COVID-19 situation does not apply to international security logistics. Worldwide security transports can be organized and carried out to and from Liechtenstein.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="img-grid mt-3 mt-lg-5">
            {Data2.map((showData2)=>{
                return(
                    <>
                        <div className="img-box">
                            <img src={showData2.images} alt="logo" className="img-fluid"/>
                            <div className="img-detail">
                                <h5 className="h4">{showData2.dataname}</h5>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    </div>
</section>
    
    </>
  )
}

export default Diamonds