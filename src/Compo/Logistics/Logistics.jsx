import React,{useContext} from 'react'
import LogisticsLogo1 from '../storage/logistics/1654147318.jpg'
import LogisticsLogo2 from '../storage/logistics/1654147375.jpg'
import LogisticsLogo3 from '../storage/logistics/1654147408.jpg'
import LogisticsLogo4 from '../storage/logistics/1654147475.jpg'
import LogisticsLogo5 from '../storage/logistics/1654147506.jpg'
import LogisticsLogo6 from '../storage/logistics/1654147539.jpg'

import BannerLogo from '../../backend/img/hero-banner-3.jpg';

import InternationSecurity from '../storage/logistics/1654166350.svg'
import WorldwideCustomCreation from '../storage/logistics/1654166392.svg'
import Insurance from '../storage/logistics/1654166436.svg'
import SecurityLocations from '../storage/logistics/1654166490.svg'
import Logistics1 from '../storage/logistics/1654166535.svg'
import Partners from '../storage/logistics/1654166573.svg'
import TrailorMadeTransport from '../storage/logistics/1654166609.svg'
import GlobalPro from '../storage/logistics/1654166640.svg'


import { SiteData } from '../../App'

const Logistics = () => {
    const ImageUrl = 'https://ozl.v-protect.eu/ozl/storage/'

    const SiteDataInfo = useContext(SiteData);

    const Data1 =[{name:'International security transportats',Logo: `${InternationSecurity}`},
        {name:'Worldwide customs clearance',Logo: `${WorldwideCustomCreation}`},
        {name:'Door to Door insurance coverage',Logo: `${Insurance}`},
        {name:'Museum standard storage',Logo: `${SecurityLocations}`},
        {name:'Allocated vaults/ studios available',Logo: `${Logistics1}`},
        {name:'Domestic & customs warehousing',Logo: `${Partners}`},
        {name:'High Security Standards',Logo: `${TrailorMadeTransport}`},
        {name:'Global professional logistics',Logo: `${GlobalPro}`}];

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
                <img src={ImageUrl+SiteDataInfo.bannner[2].image} alt="" className="w-100" style={{width: '100%'}}/>
                <div className="banner-details">
                    <div>
                        <h2 className="h2 fw-bold text-shadow">Our range of storage facilities - <br className="d-none d-md-block"/>individual and versatile.</h2>
                        
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

                <div className="card">
                    <div className="card-body border border-2 border-primary text-center">
                        <h3 className="h2 text-center fw-bold mb-3">Logistics</h3>
                        <p>Our internal logistics specialists take care of the entire logistics process chain, from collection to customs clearance. 
                            From our customs warehouse, we can transport valuables to national or international destinations. Multiple locations worldwide enable you to achieve 
                            optimal diversification when it comes to storing your valuables. Working with renowned partners enables us to 
                            guarantee a professional service in terms of security, handling, insurance and time management during the transportation of valuables.</p>
                            <p>We offer regular routes from Triesen to Zurich, Frankfurt, London, Hong Kong, Singapore and New York, for example.</p>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="row mt-3 mt-lg-5">
            {Data1.map((showData1)=>{
                return(
                    <>
                    <div className="col-6 col-md-3 mb-3 d-flex">
                        <div className="card text-center flex-fill style-1">
                            <div className="card-body" key={showData1.toString()}>
                                <img src={showData1.Logo} alt="logo" className="img-fluid mb-4"/>
                                <h5 className="h5" key={showData1.name.toString()}>{showData1.name}</h5>
                            </div>
                        </div>
                    </div>
                    </>
                )
            })}
        </div>

        <div className="img-grid mt-3 mt-lg-5">
            {Data2.map((showData2)=>{
                return(
                    <>
                        <div className="img-box" key={showData2.toString()}>
                            <img src={showData2.images} alt="logo" className="img-fluid"/>
                            <div className="img-detail">
                                <h5 className="h4" key={showData2.dataname.toString()}>{showData2.dataname}</h5>
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

export default Logistics;