import React, { useEffect, useRef } from 'react';
import { styles } from '../../styles';
import { PortFolio } from '../../Data/Home/Portfolio';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Icon } from '@iconify/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';

export default function Portfolio() {
  let swiper; // Reference to the swiper instance

  const handlePrevClick = () => {
    if (swiper) swiper.slidePrev();
  };

  const handleNextClick = () => {
    if (swiper) swiper.slideNext();
  };

  const cardRefs = PortFolio.map(() => useRef(null));

  const CardActive = (index) => {
    // Remove "active" class from all cards except the clicked one
    cardRefs.forEach((ref, i) => {
      if (i !== index && ref.current) {
        ref.current.classList.remove("active");
      }
    });

    // Toggle "active" class for the clicked card
    const portfolioCardElement = cardRefs[index].current;
    if (portfolioCardElement) {
      portfolioCardElement.classList.toggle("active");
    }
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      // Check if the click is outside of any portfolio card
      if (!cardRefs.some((ref) => ref.current && ref.current.contains(event.target))) {
        // Remove "active" class from all cards
        cardRefs.forEach((ref) => {
          if (ref.current) {
            ref.current.classList.remove("active");
          }
        });
      }
    };

    document.body.addEventListener('click', handleDocumentClick);

    return () => {
      document.body.removeEventListener('click', handleDocumentClick);
    };
  }, [cardRefs]);


  return (
    <>
      <section className="work-sans bg-white" id='portfolio'>
        <div className={`${styles.maxWidth} w-full pt-4 md:pt-16 md:pb-16 pb-10 text-left work-sans relative`}>
          <div className={`mb-8 md:mb-16 px-6 lg:px-0 relative`}>
            <h1 className={`${styles.sectionHeadText} pb-6 lg:px-0 px-6 flex items-center justify-center 2xl:justify-start 2xl:items-start text-[#931E0B]`}>
             Our Track Records
            </h1>
            <p className={`${styles.sectionSubText} w-full capitalize text-center 2xl:text-left text-black`}>
            Victory in Every Venture: Unveiling Our Track Records.
            </p>
          </div>
          <div className="mb-10 w-full relative pot-margin">
            {/* <div className='bg-[#000210] lg:w-[2rem] 2xl:w-[15rem] absolute h-full right-0 z-10 lg:block hidden select-none pointer-events-auto'></div> */}
            <Swiper
              slidesPerView={3}
              spaceBetween={0}
              slidesPerGroup={1}
              loop={true}
              // slideToClickedSlide={true}
              speed={540}
              breakpoints={{
                0: {
                  slidesPerView: 1.25,
                  spaceBetween: 20,
                  slidesPerGroup: 1
                },
                500: {
                  slidesPerView: 1.5,
                },
                600: {
                  slidesPerView: 2.25,
                  slidesPerGroup: 2,
                },
                1200: {
                  slidesPerView: 2.5,
                },
                1500: {
                  slidesPerView: 3,
                  spaceBetween: 35
                }
              }}
              autoplay={{
                delay: 3225,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                prevEl: '.your-prev-button-class',
                nextEl: '.your-next-button-class',
              }}
              modules={[Autoplay, Navigation]}
              className="relative"
              onSwiper={(swiperInstance) => {
                swiper = swiperInstance;
              }}
            >
              {PortFolio.slice(0, 4).map((data, index) => (
                <SwiperSlide key={index} onClick={() => CardActive(index)}>
                  <div ref={cardRefs[index]} className="cursor-pointer overflow-hidden transition-all duration-150 ease-in relative w-full mx-6 md:mx-0 portfolio-card">
                    <img src={data.img} alt="Kagan" className="w-full" />
                    <h1 className='w-[calc(100%-50px)] py-2 absolute z-30 bottom-4 left-1/2
                            -translate-x-1/2
                            text-white font-extrabold'>{data.name}</h1>
                    <a href={data.GoTo} target='_blank'>
                      <p
                        className={` w-[calc(100%-50px)] py-2 absolute z-10 bottom-4 left-1/2 flex gap-2 items-center
                            -translate-x-1/2
                            text-white font-semibold
                            `}
                      >
                        Visit Site
                        <svg fill="#fff" height="30px" width="30px"  
                          viewBox="0 0 330 330">
                        <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
                          s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
                          c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
                        </svg>
                      </p>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex items-center justify-center gap-x-8 2xl:pt-0 pt-6 2xl:absolute -top-24 z-20 right-0">
              <Icon icon="gravity-ui:arrow-up" className="your-prev-button-class rotate-[270deg] text-3xl cursor-pointer text-[#BABABA] hover:text-white transition-all" onClick={handlePrevClick} />
              <Icon icon="gravity-ui:arrow-up" className="your-next-button-class rotate-[90deg] text-3xl cursor-pointer text-[#BABABA] hover:text-white transition-all" onClick={handleNextClick} />
            </div>
          </div>
        </div>
        <div className={`${styles.maxWidth} w-full pt-4 md:pt-16 md:pb-16 pb-10 text-left work-sans relative`}>
          <div className={`mb-8 md:mb-16 px-6 lg:px-0 relative`}>
            <h1 className={`${styles.sectionHeadText} pb-6 lg:px-0 px-6 flex items-center justify-center 2xl:justify-start 2xl:items-start text-[#931E0B]`}>
              Explore Our Portfolio
            </h1>
            <p className={`${styles.sectionSubText} w-full capitalize text-center 2xl:text-left text-black`}>
              View the outcomes of our approach and attention to detail.
            </p>
          </div>
          <div className="mb-10 w-full relative pot-margin">
            {/* <div className='bg-[#000210] lg:w-[2rem] 2xl:w-[15rem] absolute h-full right-0 z-10 lg:block hidden select-none pointer-events-auto'></div> */}
            <Swiper
              slidesPerView={3}
              spaceBetween={0}
              slidesPerGroup={1}
              loop={true}
              // slideToClickedSlide={true}
              speed={540}
              breakpoints={{
                0: {
                  slidesPerView: 1.25,
                  spaceBetween: 20,
                  slidesPerGroup: 1
                },
                500: {
                  slidesPerView: 1.5,
                },
                600: {
                  slidesPerView: 2.25,
                  slidesPerGroup: 2,
                },
                1200: {
                  slidesPerView: 2.5,
                },
                1500: {
                  slidesPerView: 3,
                  spaceBetween: 35
                }
              }}
              autoplay={{
                delay: 3225,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                prevEl: '.your-prev-button-class',
                nextEl: '.your-next-button-class',
              }}
              modules={[Autoplay, Navigation]}
              className="relative"
              onSwiper={(swiperInstance) => {
                swiper = swiperInstance;
              }}
            >
              {PortFolio.slice(4,8).map((data, index) => (
                <SwiperSlide key={index} onClick={() => CardActive(index)}>
                  <div ref={cardRefs[index]} className="cursor-pointer overflow-hidden transition-all duration-150 ease-in relative w-full mx-6 md:mx-0 portfolio-card">
                    <img src={data.img} alt={data.name} className="w-full" />
                    <h1 className='w-[calc(100%-50px)] py-2 absolute z-30 bottom-4 left-1/2
                            -translate-x-1/2
                            text-white font-extrabold'>{data.name}</h1>
                    <a href={data.GoTo} target='_blank'>
                      <p
                        className={` w-[calc(100%-50px)] py-2 absolute z-10 bottom-4 left-1/2 flex gap-2 items-center
                            -translate-x-1/2
                            text-white font-semibold
                            `}
                      >
                        Visit Site
                        <svg fill="#fff" height="30px" width="30px"  
                          viewBox="0 0 330 330">
                        <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
                          s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
                          c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
                        </svg>
                      </p>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex items-center justify-center gap-x-8 2xl:pt-0 pt-6 2xl:absolute -top-24 z-20 right-0">
              <Icon icon="gravity-ui:arrow-up" className="your-prev-button-class rotate-[270deg] text-3xl cursor-pointer text-[#BABABA] hover:text-white transition-all" onClick={handlePrevClick} />
              <Icon icon="gravity-ui:arrow-up" className="your-next-button-class rotate-[90deg] text-3xl cursor-pointer text-[#BABABA] hover:text-white transition-all" onClick={handleNextClick} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
