import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/core";
import "swiper/bundle";



import CompanyLogo1 from '../storage/banner/1654151559.jpg';
import CompanyLogo2 from '../storage/banner/1654151603.jpg';
import CompanyLogo3 from '../storage/banner/1654151655.jpg';
import CompanyLogo4 from '../storage/banner/1654151738.jpg';

const SliderImage = () => {

  const homeImage = [{ text1: 'OZL -{<br className="d-none d-md-block" />} Custody at the highest level' , image: `${CompanyLogo1}`},
  { text1: 'Trisuna Lagerhaus AG  and the Principality of Liechtenstein -<br className="d-none d-md-block" />independent, secure and stable.' , image: `${CompanyLogo2}` },
  { text1: 'We can transport your valuables -<br className="d-none d-md-block" /> securely, reliably and inexpensively.' , image: `${CompanyLogo3}` },
  { text1: 'Precious Metals | Art | Diamonds -<br className="d-none d-md-block" />we take care of your assets.' , image: `${CompanyLogo4}` }];

  return (
    <>

      <section className="hero-section container-fluid px-lg-5">
        <div className="swiper heroSwiper">
          <div className="swiper-wrapper">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={true}
              pagination={{ clickable: true }}
              speed={2000}
              grabCursor={true}
              effect={"auto"}
              
            >
              {homeImage.map((showImage)=>{
                return(
                  <>
                        <SwiperSlide>
                        <div className="swiper-slide">
                          <picture>
                            <img src={showImage.image} alt="image" className="w-100" style={{ width: '100%' }} />
                          </picture>
                          <div className="banner-details">
                            <div>
                              <h2 className="h2 fw-bold text-shadow">
                               {showImage.text1} 
                              </h2>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>  
                  </>
                )
              })}
              
            </Swiper>
          </div>
          <div className="heroSwiper-pagination"></div>
        </div>
      </section>
    </>
  );
};

export default SliderImage;
