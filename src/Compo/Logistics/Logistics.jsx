import React, { useContext } from 'react'
import { SiteData } from '../../App'

const ImageBox = [{
    LogisticsLogo1: '1654147318.jpg',
    LogisticsLogo2: '1654147375.jpg',
    LogisticsLogo3: '1654147408.jpg',
    LogisticsLogo4: '1654147475.jpg',
    LogisticsLogo5: '1654147506.jpg',
    LogisticsLogo6: '1654147539.jpg'
}]


const LogoBox = [{
    InternationSecurity: '1654166350.svg',
    WorldwideCustomCreation: '1654166392.svg',
    Insurance: '1654166436.svg',
    SecurityLocations: '1654166490.svg',
    Logistics1: '1654166535.svg',
    Partners: '1654166573.svg',
    TrailorMadeTransport: '1654166609.svg',
    GlobalPro: '1654166640.svg'
}]




const Logistics = () => {
    const BannerUrl = 'https://ozl.v-protect.eu/ozl/storage/'
    const ImageUrl = 'https://ozl.v-protect.eu/ozl/storage/logistics/'

    const SiteDataInfo = useContext(SiteData);

    const Data1 = [{ id: 2, name: 'International security transportats', Logo: `${ImageUrl + LogoBox[0].InternationSecurity}` },
    { id: 3, name: 'Worldwide customs clearance', Logo: `${ImageUrl + LogoBox[0].WorldwideCustomCreation}` },
    { id: 4, name: 'Door to Door insurance coverage', Logo: `${ImageUrl + LogoBox[0].Insurance}` },
    { id: 5, name: 'Museum standard storage', Logo: `${ImageUrl + LogoBox[0].SecurityLocations}` },
    { id: 6, name: 'Allocated vaults/ studios available', Logo: `${ImageUrl + LogoBox[0].Logistics1}` },
    { id: 7, name: 'Domestic & customs warehousing', Logo: `${ImageUrl + LogoBox[0].Partners}` },
    { id: 8, name: 'High Security Standards', Logo: `${ImageUrl + LogoBox[0].TrailorMadeTransport}` },
    { id: 9, name: 'Global professional logistics', Logo: `${ImageUrl + LogoBox[0].GlobalPro}` }];

    const Data2 = [{ id: 2, dataname: 'Optimum solutions via renowned partners', images: `${ImageUrl + ImageBox[0].LogisticsLogo1}` },
    { id: 3, dataname: 'State-of-the-art professional logistics infrastructure/Security and efficiency', images: `${ImageUrl + ImageBox[0].LogisticsLogo2}` },
    { id: 4, dataname: 'Global transportation of precious metals, art, and other valuables, including customs clearance', images: `${ImageUrl + ImageBox[0].LogisticsLogo3}` },
    { id: 5, dataname: 'International logistics within transit zones/Own customs specialists', images: `${ImageUrl + ImageBox[0].LogisticsLogo4}` },
    { id: 6, dataname: 'Global logistics and storage', images: `${ImageUrl + ImageBox[0].LogisticsLogo5}` },
    { id: 7, dataname: 'Full logistics service, from collection to delivery / All from a single source', images: `${ImageUrl + ImageBox[0].LogisticsLogo6}` }];

    return (
        <>
            {/* Banner--start*/}
            <section className="hero-section container-fluid px-lg-5">
                <div className="swiper heroSwiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src={BannerUrl + SiteDataInfo.bannner[2].image} alt="" className="w-100" style={{ width: '100%' }} />
                            <div className="banner-details">
                                <div>
                                    <h2 className="h2 fw-bold text-shadow">Our range of storage facilities - <br className="d-none d-md-block" />individual and versatile.</h2>

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
                        {React.Children.toArray(Data1.map((showData1) => {
                            return (
                                <>
                                    <div className="col-6 col-md-3 mb-3 d-flex" key={showData1.id}>
                                        <div className="card text-center flex-fill style-1">
                                            <div className="card-body" >
                                                <img src={showData1.Logo} alt="logo" className="img-fluid mb-4" />
                                                <h5 className="h5" >{showData1.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }))}
                    </div>

                    <div className="img-grid mt-3 mt-lg-5">
                        {React.Children.toArray(Data2.map((showData2) => {
                            return (
                                <>
                                    <div className="img-box" key={showData2.id} >
                                        <img src={showData2.images} alt="logo" className="img-fluid" />
                                        <div className="img-detail">
                                            <h5 className="h4">{showData2.dataname}</h5>
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

export default Logistics;