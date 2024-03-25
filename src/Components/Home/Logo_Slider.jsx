import React from 'react'
import { styles } from '../../styles'
import { LogoSlider } from '../../Data/Layout/Index'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';

export default function Logo_Slider() {
    return (
        <>
            <section className='bg-[#00B6EF] relative w-full md:mt-0 sm:mt-0 mt-16'>
                <div className='bg-gradient-to-r from-white to-[#11101600] w-[30px] md:w-[330px] h-full absolute top-0 z-[5]'></div>
                <div className='bg-gradient-to-l from-white to-[#11101600] w-[30px] md:w-[310px] h-full absolute top-0 right-0 z-[5]'></div>
                <div className={`py-5 logos w-full max-w-[2000px] mx-auto`}>
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={0}
                        loop={true}
                        speed={3000}
                        noSwiping={true}
                        noSwipingClass='swiper-wrapper'
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },
                            500: {
                                slidesPerView: 3,
                            },
                            865: {
                                slidesPerView: 4,
                            },
                            1500: {
                                slidesPerView: 6
                            },
                        }}
                        modules={[Autoplay]}
                        className='flex gap-2 w-full items-center justify-center mySwiper relative'>

                        {LogoSlider.map((imagess, index) => (
                            <SwiperSlide className='w-full flex items-center justify-center' key={imagess.id} >
                                <img
                                    src={imagess.img}
                                    className={`flex select-none pointer-events-none items-center justify-center
                                        ${index === 0 ? "w-14 md:w-16" : ""}
                                        ${index === 1 ? "w-14 md:w-16" : ""}
                                        ${index === 2 ? "w-14 md:w-16" : ""}
                                        ${index === 3 ? "w-14 md:w-16" : ""}
                                        ${index === 4 ? "w-14 md:w-16" : ""}
                                        ${index === 5 ? "w-14 md:w-16" : ""}
                                        ${index === 6 ? "w-14 md:w-16" : ""}
                                    `}
                                    alt={imagess.id}
                                />

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    )
}
