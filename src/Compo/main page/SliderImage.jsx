import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CompanyLogo1 from "../../backend/img/hero-banner-1.jpg";
import CompanyLogo2 from "../../backend/img/hero-banner-2.jpg";
import CompanyLogo3 from "../../backend/img/hero-banner-3.jpg";
import CompanyLogo4 from "../../backend/img/hero-banner-4.jpg";

const SliderImage = () => {

  const homeImage = [{text: '',image: '',style: 'd-none d-md-block'},
  {text: '',image: ''},
  {text: '',image: ''},
  {text: '',image: ''}];
 
  return (
    <>
    
      <section className="hero-section container-fluid px-lg-5">
        <div className="swiper heroSwiper">
          <div className="swiper-wrapper">
          <Swiper
                spaceBetween={10}
                slidesPerView={1} 
                loop = {true}
              >
                <SwiperSlide>
              <div className="swiper-slide">
                <picture>
                  {/* <!-- <source media="(min-width:650px)" srcset="img_pink_flowers.jpg"> --> */}
                  <img src={CompanyLogo1} alt="image" className="w-100" style={{width: '100%'}} />
                </picture>
                <div className="banner-details">
                  <div>
                  <h2 className="h2 fw-bold text-shadow">
                      OZL <br className="d-none d-md-block" />
                      Custody at the highest level
                    </h2>
                    <p className="text-shadow">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour
                    </p>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="swiper-slide">
                <img src={CompanyLogo2} alt="image" className="w-100" style={{width: '100%'}} />
                <div className="banner-details">
                  <div>
                    <h2 className="h2 fw-bold text-shadow">
                      Trisuna Lagerhaus AG  and <br className="d-none d-md-block" />the Principality of Liechtenstein -<br className="d-none d-md-block" />
                      independent, secure, stable.
                    </h2>
                    
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="swiper-slide">
                <img src={CompanyLogo3} alt="image" className="w-100" style={{width: '100%'}} />
                <div className="banner-details">
                  <div>
                  <h2 className="h2 fw-bold text-shadow">
                    We transport your valuables -<br className="d-none d-md-block" />
                    safely, reliably and inexpensively. 
                    </h2>
                    
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="swiper-slide">
                <img src={CompanyLogo4} alt="image" className="w-100" style={{width: '100%'}} />
                <div className="banner-details">
                  <div>
                    <h2 className="h2 fw-bold text-shadow">
                    precious metal | art | Diamonds -<br className="d-none d-md-block" />
                    we take care of your investments. 
                    </h2>
                  </div>
                </div>
              </div>
              </SwiperSlide>
             </Swiper>
          </div>
          <div className="heroSwiper-pagination"></div>
        </div>
      </section>

      

      
  
    </>
  );
};

export default SliderImage;
