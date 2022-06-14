import React,{useContext} from 'react'
import { SiteData } from '../../App'

const ImageBox =[{logo1 : '1654146106.jpg',
logo2 : '1654146130.jpg',
logo3 : '1654146176.jpg',
logo4 : '1654146210.jpg',
logo5 : '1654146249.jpg',
logo6 : '1654146277.jpg',
logo7 : '1654146321.jpeg',
logo8 : '1654146350.jpeg',
logo9 : '1654146373.jpg'}];

const LogoBox =[{PngLogo1 : '1654166717.svg',
 PngLogo2 : '1654166763.svg',
 PngLogo3 : '1654166794.svg',
 PngLogo4 : '1654166837.svg',
 PngLogo5 : '1654166871.svg',
 PngLogo6 : '1654166898.svg',
 PngLogo7 : '1654166926.svg',
 PngLogo8 : '1654166982.png'}];

const Art = () => {

    const BannerUrl = 'https://ozl.v-protect.eu/ozl/storage/'

    const LogoUrl = 'https://ozl.v-protect.eu/ozl/storage/art/'

    const SiteDataInfo = useContext(SiteData);

    const Data1 =[{id:2,name:'Museum standard storage',Logo: `${LogoUrl+LogoBox[0].PngLogo1}`},
        {id:3,name:'Allocated vaults/ studios available',Logo: `${LogoUrl+LogoBox[0].PngLogo2}`},
        {id:4,name:'Domestic & customs warehousing',Logo: `${LogoUrl+LogoBox[0].PngLogo3}`},
        {id:5,name:'High Security Standards',Logo: `${LogoUrl+LogoBox[0].PngLogo4}`},
        {id:6,name:'Global professional logistics',Logo: `${LogoUrl+LogoBox[0].PngLogo5}`},
        {id:7,name:'Handling by renowned partners',Logo: `${LogoUrl+LogoBox[0].PngLogo6}`},
        {id:8,name:'Multiple locations in Liechtenstein',Logo: `${LogoUrl+LogoBox[0].PngLogo7}`},
        {id:9,name:'GRASP-certified storage',Logo: `${LogoUrl+LogoBox[0].PngLogo8}`}];

    const Data2 = [{id:12,dataname: 'Optimum solutions via renowned partners',images: `${LogoUrl+ImageBox[0].logo1}`},
        {id:13,dataname: 'State-of-the-art professional logistics infrastructure/Security and efficiency',images: `${LogoUrl+ImageBox[0].logo2}`},
        {id:14,dataname: 'Global transportation of precious metals, art, and other valuables, including customs clearance',images: `${LogoUrl+ImageBox[0].logo3}`},
        {id:15,dataname: 'International logistics within transit zones/Own customs specialists',images: `${LogoUrl+ImageBox[0].logo4}`},
        {id:16,dataname: 'Global logistics and storage',images: `${LogoUrl+ImageBox[0].logo5}`},
        {id:17,dataname: 'Full logistics service, from collection to delivery / All from a single source',images: `${LogoUrl+ImageBox[0].logo6}`},
        {id:18,dataname: 'International security transportats',images: `${LogoUrl+ImageBox[0].logo7}`},
        {id:19,dataname: 'Worldwide customs clearance',images: `${LogoUrl+ImageBox[0].logo8}`},
        {id:20,dataname: 'Door to Door insurance coverage',images: `${LogoUrl+ImageBox[0].logo9}`}];
    return (
        <>
        {/* Banner--start*/}
    <section className="hero-section container-fluid px-lg-5">
    <div className="swiper heroSwiper">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <img src={BannerUrl+SiteDataInfo.bannner[3].image} alt="" className="w-100" style={{width: '100%'}}/>
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