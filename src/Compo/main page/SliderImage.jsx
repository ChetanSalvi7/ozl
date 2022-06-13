import React, { useContext } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/core";
import "swiper/bundle";
import { SiteData } from "../../App";



const ImageUrl = 'https://ozl.v-protect.eu/ozl/storage/'

const SliderImage = () => {

  const SiteDataInfo = useContext(SiteData);


  //SiteDataInfo.bannner[0].image =   ''+SiteDataInfo.bannner[0].image;
  const homeImage = [{id:`${SiteDataInfo.bannner[0].id}`, text1: 'OZL -',text2:'Custody at the highest level' , image: `${ImageUrl+SiteDataInfo.bannner[0].image}`},
  {id:`${SiteDataInfo.bannner[1].id}`, text1: 'Trisuna Lagerhaus AG  and the Principality of Liechtenstein -',text2:'independent, secure and stable.' , image: `${ImageUrl+SiteDataInfo.bannner[1].image}` },
  {id:`${SiteDataInfo.bannner[2].id}`, text1: 'We can transport your valuables -',text2:' securely, reliably and inexpensively.' , image: `${ImageUrl+SiteDataInfo.bannner[2].image}` },
  {id:`${SiteDataInfo.bannner[3].id}`, text1: 'Precious Metals | Art | Diamonds -',text2:'we take care of your assets.' , image: `${ImageUrl+SiteDataInfo.bannner[3].image}` }];

  return (
    <>
      <section className="hero-section container-fluid px-lg-5">
        <div className="swiper heroSwiper">
          <div className="swiper-wrapper">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              autoplay={true}
              pagination={{ clickable: true }}
              speed={2000}
              grabCursor={true}
              effect={"auto"}
              
            >
              { React.Children.toArray(homeImage.map((showImage)=>{
                return(
                  <>
                        <SwiperSlide key={showImage.id}>
                        <div className="swiper-slide" >
                          <picture >
                            <img  src={showImage.image} alt="image" className="w-100" style={{ width: '100%' }} />
                          </picture>
                          <div className="banner-details">
                            <div>
                              <h2 className="h2 fw-bold text-shadow" >
                               {showImage.text1} <br className="d-none d-md-block" />
                                {showImage.text2}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>  
                  </>
                )
              }))}
              
            </Swiper>
          </div>
          <div className="heroSwiper-pagination"></div>
        </div>
      </section>
    </>
  );
};

export default SliderImage;
