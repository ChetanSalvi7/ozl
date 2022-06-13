import React,{useContext} from 'react'
import { SiteData } from '../../App'
import logo1 from '../storage/art/1654146106.jpg'
import logo2 from '../storage/art/1654146130.jpg'
import logo3 from '../storage/art/1654146176.jpg'
import logo4 from '../storage/art/1654146210.jpg'
import logo5 from '../storage/art/1654146249.jpg'
import logo6 from '../storage/art/1654146277.jpg'
import logo7 from '../storage/art/1654146321.jpeg'
import logo8 from '../storage/art/1654146350.jpeg'
import logo9 from '../storage/art/1654146373.jpg'



import PngLogo1 from '../storage/art/1654166717.svg'
import PngLogo2 from '../storage/art/1654166763.svg'
import PngLogo3 from '../storage/art/1654166794.svg'
import PngLogo4 from '../storage/art/1654166837.svg'
import PngLogo5 from '../storage/art/1654166871.svg'
import PngLogo6 from '../storage/art/1654166898.svg'
import PngLogo7 from '../storage/art/1654166926.svg'
import PngLogo8 from '../storage/art/1654166982.png'

const Art = () => {

    const ImageUrl = 'http://localhost/ozl/storage/'

    const SiteDataInfo = useContext(SiteData);

    const Data1 =[{id:2,name:'Museum standard storage',Logo: `${PngLogo1}`},
        {id:3,name:'Allocated vaults/ studios available',Logo: `${PngLogo2}`},
        {id:4,name:'Domestic & customs warehousing',Logo: `${PngLogo3}`},
        {id:5,name:'High Security Standards',Logo: `${PngLogo4}`},
        {id:6,name:'Global professional logistics',Logo: `${PngLogo5}`},
        {id:7,name:'Handling by renowned partners',Logo: `${PngLogo6}`},
        {id:8,name:'Multiple locations in Liechtenstein',Logo: `${PngLogo7}`},
        {id:9,name:'GRASP-certified storage',Logo: `${PngLogo8}`}];

    const Data2 = [{id:12,dataname: 'Optimum solutions via renowned partners',images: `${logo1}`},
        {id:13,dataname: 'State-of-the-art professional logistics infrastructure/Security and efficiency',images: `${logo2}`},
        {id:14,dataname: 'Global transportation of precious metals, art, and other valuables, including customs clearance',images: `${logo3}`},
        {id:15,dataname: 'International logistics within transit zones/Own customs specialists',images: `${logo4}`},
        {id:16,dataname: 'Global logistics and storage',images: `${logo5}`},
        {id:17,dataname: 'Full logistics service, from collection to delivery / All from a single source',images: `${logo6}`},
        {id:18,dataname: 'International security transportats',images: `${logo7}`},
        {id:19,dataname: 'Worldwide customs clearance',images: `${logo8}`},
        {id:20,dataname: 'Door to Door insurance coverage',images: `${logo9}`}];
    return (
        <>
        {/* Banner--start*/}
    <section className="hero-section container-fluid px-lg-5">
    <div className="swiper heroSwiper">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <img src={ImageUrl+SiteDataInfo.bannner[3].image} alt="" className="w-100" style={{width: '100%'}}/>
                <div className="banner-details">
                    <div>
                        <h2 className="h2 fw-bold text-shadow">Your art in the hands of the professionals -<br className="d-none d-md-block"/>
                        we will take care of it for you</h2>
                        
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
                                    <h3 className="h2 text-center fw-bold mb-3">Why your art will be in good hands.</h3>
                                    <p>Our team of specialists will be pleased to provide you with an individual quotation. No matter whether you are looking for customs warehousing, 
                                        domestic warehousing or your own allocated vault/ studio or you want to use your safe deposit box. With multiple GRASP-certified locations in Liechtenstein,
                                         we guarantee to provide the optimum solution for your paintings, sculptures or other works of art.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3 mt-lg-5">
                        {React.Children.toArray( Data1.map((showData1) => {
                            return (
                                <>
                                    <div className="col-6 col-md-3 mb-3 d-flex" key={showData1.id} >
                                        <div className="card text-center flex-fill style-1">
                                            <div className="card-body" >
                                                <img  src={showData1.Logo} alt="logo" className="img-fluid mb-4" />
                                                <h5 className="h5" >{showData1.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }))}
                    </div>

                    <div className="img-grid mt-3 mt-lg-5">
                        {React.Children.toArray( Data2.map((showData2) => {
                            return (
                                <>
                                    <div className="img-box" key={showData2.id} >
                                        <img  src={showData2.images} alt="logo" className="img-fluid" />
                                        <div className="img-detail">
                                            <h5 className="h4" >{showData2.dataname}</h5>
                                        </div>
                                    </div>
                                </>
                            )
                        }))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Art