import React from 'react'



const BannerLogo = 'https://ozl.v-protect.eu/ozl/storage/banner/1654152384.jpg'
const ImageUrl = 'https://ozl.v-protect.eu/ozl/storage/diamonds/'



const ImageBox = [{LogisticsLogo1 : '1654146542.jpg',
 LogisticsLogo2 : '1654146586.jpg',
 LogisticsLogo3 : '1654146621.jpg',
 LogisticsLogo4 : '1654147113.jpg',
 LogisticsLogo5 : '1654147143.jpg',
 LogisticsLogo6 : '1654147168.jpg'}]



const Diamonds = () => {
    const Data2 = [{id:2, dataname: 'Optimum solutions via renowned partners',images: `${ImageUrl+ImageBox[0].LogisticsLogo1}`},
        {id:3,dataname: 'State-of-the-art professional logistics infrastructure/Security and efficiency',images: `${ImageUrl+ImageBox[0].LogisticsLogo2}`},
        {id:4,dataname: 'Global transportation of precious metals, art, and other valuables, including customs clearance',images: `${ImageUrl+ImageBox[0].LogisticsLogo3}`},
        {id:5,dataname: 'International logistics within transit zones/Own customs specialists',images: `${ImageUrl+ImageBox[0].LogisticsLogo4}`},
        {id:6,dataname: 'Global logistics and storage',images: `${ImageUrl+ImageBox[0].LogisticsLogo5}`},
        {id:7,dataname: 'Full logistics service, from collection to delivery / All from a single source',images: `${ImageUrl+ImageBox[0].LogisticsLogo6}`}];
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
                        <h2 className="h2 fw-bold text-shadow">Your diamonds in safe hands -<br className="d-none d-md-block"/>services ranging from collection to customs clearance.</h2>
                       
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
                        <h3 className="h2 text-center fw-bold mb-3">Why will your diamonds be in safe<br className="d-none d-md-block"/>hands with us?</h3>
                        <p>Storing your diamonds with OZL Offenes Zolllager in Liechtenstein AG not only brings benefits such as security, flexibility, maximum transparency in stock accounting and an attractive fee structure but also gives you the additional opportunity to use our own customs warehouse in Liechtenstein, so you can keep your diamonds in your name and separate from other customers (individual safe custody) in our Open Customs Warehouse. You can access your assets at any time and thus avoid having to pay VAT when buying or selling diamonds. Our specialists will be pleased to assist you with any further queries that you may have.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="img-grid mt-3 mt-lg-5">
            {React.Children.toArray( Data2.map((showData2)=>{
                return(
                    <>
                        <div className="img-box" key={showData2.id} >
                            <img src={showData2.images} alt="logo" className="img-fluid"/>
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

export default Diamonds