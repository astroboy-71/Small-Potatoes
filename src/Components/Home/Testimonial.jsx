import React, { useState, useRef, useEffect } from 'react';
import { styles } from '../../styles'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { TESTIMONIAL_DATA } from '../../Data/Home/Testimonial';

import { Icon } from '@iconify/react';

function Testimonial() {

  return (
    <>
      <section className='work-sans relative bg-white pt-20' id='reviews'>
        <div className={`w-full max-w-[1340px] overflow-hidden m-auto relative`}>
          <div>
            <h1 className={`${styles.sectionHeadText} px-8 sm:px-4 text-[#00B6EF]`}>
              Reviews
            </h1>
            <p className={`${styles.sectionSubText} text-center pt-4 px-6 text-black`}>
              Our work speaks for itself through our client successes.
            </p>
          </div>

          <div className='mt-10 md:mt-16 testimonial w-full lg:-ml-12 px-1'>
            <div className='bg-white w-[3.2rem] absolute h-full -left-5 z-10 lg:block hidden'></div>
            <Swiper
              effect={'coverflow'}
              centeredSlides={true}
              loop={true}
              spaceBetween={0}
              initialSlide={1}
              slidesPerView={3}
              coverflowEffect={{
                rotate: 0,
                stretch: -120,
                depth: 400,
                modifier: 1,
                slideShadows: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: "1"
                },
                650: {
                  slidesPerView: "1.5"
                },
                800: {
                  slidesPerView: "2",
                },
                1000: {
                  slidesPerView: "3",
                }
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={400}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              pagination={{ clickable: true, enabled: true }}
              className="mySwiper cursor-default"
            >
              {
                TESTIMONIAL_DATA.map((data, index) => (
                  <SwiperSlide key={index} className='mb-10 sm:mb-16 sm:w-[440px] lg:w-[550px] lg:h-[350px]'>
                    <div
                      className="card bg-gradient-to-b w-auto sm:w-[440px] lg:w-[550px] rounded-xl from-[#00FFFF] to-[#000210] p-[1px] lg:mx-0 mx-6 transition-all duration-200 ease-out h-full"
                    >
                      <div className='bg-white rounded-xl py-8 px-8 h-full shadow-[rgba(0,0,0,0.45)_0px_25px_20px_-20px]'>
                        <div className='flex md:justify-between md:items-center md:flex-row flex-col items-start md:gap-y-0 gap-y-6'>
                          <div className='flex items-center justify-start gap-x-4'>
                            <img src={data.img} alt="Profile Image" className='w-14' />
                            <div>
                              <h1 className='text-lg font-bold'>{data.name}</h1>
                              <p className='text-base font-normal text-[#5d5d5d]'>{data.occupation}</p>
                            </div>
                          </div>
                          <div className='flex items-center gap-x-1'>
                            <Icon icon="typcn:star" className='text-[#E56E01] text-2xl' />
                            <Icon icon="typcn:star" className='text-[#E56E01] text-2xl' />
                            <Icon icon="typcn:star" className='text-[#E56E01] text-2xl' />
                            <Icon icon="typcn:star" className='text-[#E56E01] text-2xl' />
                            <Icon icon="typcn:star" className='text-[#E56E01] text-2xl' />
                          </div>
                        </div>
                        <div>
                          <p className='text-base md:text-lg font-normal py-4 text-black'>
                            {data.review}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </section >
    </>
  )
}

export default Testimonial
