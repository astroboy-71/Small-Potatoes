import React from 'react'
import Hero from '../Components/Home/Hero'
import Logo_Slider from '../Components/Home/Logo_Slider'
import Services from '../Components/Home/Services'
import Faq from '../Components/Home/Faq'
import About from '../Components/Home/AboutUs'
import Testimonial from '../Components/Home/Testimonial'

export default function Home() {
    return (
        <>
            <Hero />
            <Logo_Slider />
            <About />
            <Services />
            <Testimonial />
            <Faq />
        </>
    )
}
