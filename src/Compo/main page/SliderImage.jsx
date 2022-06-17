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
  //get data from site data and store in SiteDataInfo .
  //create array object and store data in array and use map function .
  const homeImage = [{id:`${SiteDataInfo.bannner[0].id}`, text1: `${SiteDataInfo.bannner[0].banner_title_single.value}` , image: `${ImageUrl+SiteDataInfo.bannner[0].image}`},
  {id:`${SiteDataInfo.bannner[1].id}`, text1:`${SiteDataInfo.bannner[1].banner_title_single.value}`  , image: `${ImageUrl+SiteDataInfo.bannner[1].image}` },
  {id:`${SiteDataInfo.bannner[2].id}`, text1: `${SiteDataInfo.bannner[2].banner_title_single.value}` , image: `${ImageUrl+SiteDataInfo.bannner[2].image}` },
  {id:`${SiteDataInfo.bannner[3].id}`, text1: `${SiteDataInfo.bannner[3].banner_title_single.value}`  , image: `${ImageUrl+SiteDataInfo.bannner[3].image}` }];

  return (
    <>
      <section className="hero-section container-fluid px-lg-5">
        <div className="swiper heroSwiper">
          <div className="swiper-wrapper">
            {/* use react swiper  */}
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
                // react.children.toarray ka use index value ko match krne k liye or 
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
                              <div dangerouslySetInnerHTML={ { __html:showImage.text1}}></div>
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
