import React from 'react'
import LogisticsLogo1 from '../../backend/img/logistic/01.jpg'
import LogisticsLogo2 from '../../backend/img/logistic/02.jpg'
import LogisticsLogo3 from '../../backend/img/logistic/03.jpg'
import LogisticsLogo4 from '../../backend/img/logistic/04.jpg'
import LogisticsLogo5 from '../../backend/img/logistic/05.jpg'
import LogisticsLogo6 from '../../backend/img/logistic/06.jpg'
import BannerLogo from '../../backend/img/hero-banner-4.jpg';
import InternationSecurity from '../../backend/img/logistic/Internation-Security.svg'
import WorldwideCustomCreation from '../../backend/img/logistic/Worldwide_custom_creation.svg'
import Insurance from '../../backend/img/logistic/Insurance.svg'
import SecurityLocations from '../../backend/img/logistic/Security-Locations.svg'
import Logistics1 from '../../backend/img/logistic/Logistics.svg'
import Partners from '../../backend/img/logistic/Partners.svg'
import TrailorMadeTransport from '../../backend/img/logistic/Trailor-made_Transport.svg'

const Art = () => {
    const Data1 =[{name:'International security transportats',Logo: `${InternationSecurity}`},
        {name:'Worldwide customs clearance',Logo: `${WorldwideCustomCreation}`},
        {name:'Door to Door insurance coverage',Logo: `${Insurance}`},
        {name:'High Security Standards',Logo: `${SecurityLocations}`},
        {name:'Global professional logistics',Logo: `${Logistics1}`},
        {name:'Handling by renowned partners',Logo: `${Partners}`},
        {name:'Multiple high security locations',Logo: `${SecurityLocations}`},
        {name:'Tailor-made special transports',Logo: `${TrailorMadeTransport}`}];

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
                        <h2 className="h2 fw-bold text-shadow">Your art in the hands of the<br className="d-none d-md-block"/>professionals -<br className="d-none d-md-block"/>
                        we will take care of it for you.</h2>
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
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="card">
                                <div className="card-body border border-2 border-primary text-center">
                                    <h3 className="h2 text-center fw-bold mb-3">Logistics</h3>
                                    <p>Our internal logistics specialists take care of the entire logistics process chain, from collection to customs clearance. From our customs warehouse, we can transport valuables to national or international destinations. Multiple locations worldwide enable you to achieve optimal diversification when it comes to storing your valuables. Working with renowned partners enables us to guarantee a professional service in terms of security, handling, insurance and time management during the transportation of valuables.</p>
                                    <p>We offer regular routes from Triesen to Zurich, Frankfurt, London, Hong Kong, Singapore and New York, for example.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3 mt-lg-5">
                        {Data1.map((showData1) => {
                            return (
                                <>
                                    <div className="col-6 col-md-3 mb-3 d-flex">
                                        <div className="card text-center flex-fill style-1">
                                            <div className="card-body">
                                                <img src={showData1.Logo} alt="logo" className="img-fluid mb-4" />
                                                <h5 className="h5">{showData1.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>

                    <div className="img-grid mt-3 mt-lg-5">
                        {Data2.map((showData2) => {
                            return (
                                <>
                                    <div className="img-box">
                                        <img src={showData2.images} alt="logo" className="img-fluid" />
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

export default Art