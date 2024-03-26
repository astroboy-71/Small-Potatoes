import React, { useEffect, useState } from 'react'
import { styles } from '../../styles'
import { Link } from 'react-router-dom'
import bgDrop from "../../assets/bg-grade.svg";

import bgImage1 from "../../assets/bg-image-1.jpg";
import bgImage2 from "../../assets/bg-image-2.jpg";
import bgImage3 from "../../assets/bg-image-3.jpg";

export default function Hero() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const bgImages = [bgImage1, bgImage2, bgImage3];

    const btnStyles = ["relative w-full md:w-[300px] h-[60px] flex items-center justify-center overflow-hidden rounded-full work-sans text-base md:text-lg md:font-medium font-light duration-200 ease-in-out transition-all"]


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(currentIndex => (currentIndex + 1) % bgImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [bgImages.length]);

    return (

        <>
            <section className='lg:h-[650px] w-full work-sans relative bg-white' id='home'>
            
                <div className='absolute w-full h-full top-0 left-0 bg-black/50 z-10'></div>

                <div className='absolute w-full h-full top-0 left-0 overflow-hidden bg-black'>
                    {bgImages.map((image, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                transition: 'opacity 1s ease-in-out',
                                opacity: index === currentImageIndex ? 1 : 0,
                            }}
                            className='absolute w-full h-full top-0 left-0'
                        />
                    ))}
                </div>
                
                <div className='overflow-hidden w-full'>
                    <div className='linear-shade absolute -top-[50px] md:-top-[400px] md:left-1/2 -translate-x-1/2'></div>
                    <div className='lg:block hidden linear-shade absolute md:-top-[700px] md:left-1/2 left-[150px] -top-[200px] -translate-x-[10%]'></div>
                    <img src={bgDrop} alt="Nothing" className='absolute z-40 left-0 top-0 md:left-[58%] -translate-x-1/2 md:-top-28 md:w-auto overflow-hidden' />
                </div>

                <div className={`${styles.maxWidth} text-white z-50 h-full flex lg:items-center justify-center relative lg:mt-0 mt-32 md:mt-40 lg:mb-0 md:mb-32 sm:mb-16`}>
                    <div className='lg:px-0 px-6 mt-12'>
                        <h1 className={`${styles.heroHeadText} font-bold text-center w-full max-w-[1120px] capitalize text-white`}>
                            Experiences Growing CPG<br/> Brands with
                            <span className='text-[#9b2948]'> Operations</span> & <span className='text-[#ff7251]'>Business</span> Support
                        </h1>
                        <p className={`text-base font-light md:text-lg md:font-normal w-full pt-6 max-w-[680px] text-center m-auto text-white`}>
                        We buy CPG brands and provide the resources and expertise to help them grow and succeed.
                        </p>
                        <div className='flex md:flex-row flex-col gap-y-4 justify-center items-center gap-x-4 mt-8 md:-mb-12 md:mt-12 overflow-hidden'>
                            <Link to="tel:0123456789" className='w-full md:w-auto'>
                                <button className={`${btnStyles} text-white bg-[#ff7251] hover:bg-[#dd5b3e]`}>
                                    <span className='relative z-10'>Call or Text 0123456789</span>
                                </button>
                            </Link>
                            <a href="https://calendly.com/masonarnold" target='_blank' className='w-full md:w-auto'>
                                <button className={`${btnStyles} bg-transparent border border-white before:absolute before:h-0 before:w-0 before:rounded-full hover:border-[#ff7251] text-white hover:text-[#ff7251]`}>
                                    <span className='relative z-10'>Schedule a 30 Minute Call</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>




            </section>
        </>
    )
}
