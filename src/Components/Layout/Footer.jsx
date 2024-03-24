import React from 'react'
import { styles } from '../../styles'
import NewLogo from '../../assets/logo.png'

import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { NavLinks } from '../../Data/Layout/Index';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

export default function footer() {
  return (

    <>
      <footer className='bg-mid-night w-full work-sans'>
        <div className={`${styles.maxWidth} pt-14 2xl:px-0 md:px-4 px-8`}>
          <div className='sm:text-left sm:items-start md:gap-x-0 sm:gap-x-6 md:flex-row flex-col flex justify-between items-start'>
            {/* 1st Column */}
            <div className='sm:w-auto w-full'>
              <div className='sm:text-left md:gap-y-1 gap-y-2 sm:w-auto'>
                <a
                  href="/"
                  className='hover:text-[#00B6EF] cursor-pointer transition-all duration-150 ease-linear flex md:block items-center justify-center pb-4 md:pb-0'
                >
                  <img
                    src={NewLogo}
                    className="cursor-pointer md:w-38 w-[9rem]"
                    alt="Small Potatoes Logo"
                  />
                </a>
                <div className='flex flex-col gap-y-6'>
                  <div className='flex items-center justify-start pt-8 sm:pt-6'>
                    <Link to="tel:0123456789" className='flex items-center justify-start'>
                      <Icon icon="mdi:phone-outline" className='text-xl' />
                      <p className=' relative'>
                        <span className='text-base md:text-lg pl-2 pr-4'>0123456789</span>
                        <span className='border border-neal-blue rounded py-1 px-2'>Call or Text Us!</span>
                      </p>
                    </Link>
                  </div>
                  <div className='flex items-center justify-start'>
                    <Link to="#" target='_blank' className='flex items-start justify-start transition-all group'>
                      <Icon icon="mingcute:location-line" className='text-xl transition-all duration-200 mt-1' />
                      <p className='text-base pl-2 pr-4 transition-all duration-200 w-full max-w-64'>address
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd Column */}
            <div className='md:py-0 py-10'>
              <div>
                <p className='text-xl font-bold pb-4'>Navigation</p>
                <ul className='pt-1'>
                  {
                    NavLinks.slice(0, 2).map((FootLink, index) => (
                      <li key={index} className='font-normal text-base pb-6 sm:last:pb-6 last:pb-0'>
                        <ScrollLink
                          key={index}
                          to={FootLink.id}
                          spy={true}
                          smooth={true}
                          offset={-40}
                          duration={800}
                          className='text-[#868686] hover:text-white cursor-pointer transition-colors duration-200'
                        >
                          {FootLink.title}
                        </ScrollLink>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>

            {/* 3rd Column */}
            <div className='md:pb-0 pb-10'>
              <div>
                <p className='text-xl font-bold pb-4'>Company</p>
                <ul className='pt-1'>
                  {
                    NavLinks.slice(2, 4).map((FootLink, index) => (
                      <li key={index} className='font-normal text-base pb-6 sm:last:pb-6 last:pb-0'>
                        <ScrollLink
                          key={index}
                          to={FootLink.id}
                          spy={true}
                          smooth={true}
                          offset={-40}
                          duration={800}
                          className='text-[#868686] hover:text-white cursor-pointer transition-colors duration-200'>
                          {FootLink.title}
                        </ScrollLink>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>

            {/* Social Icons  */}
            <div className='md:pb-0 pb-6'>
              <div>
                <p className='text-xl font-bold pb-4'>Follow Us</p>
                <div className='flex pt-2 gap-x-4'>
                  <Icon icon="pajamas:twitter" className='md:text-[22px] text-lg hover:text-light-green cursor-pointer transition-all duration-150 text-[#BABABA]' />
                  <Icon icon="ic:outline-facebook" className='text-[22px] md:text-2xl hover:text-light-green cursor-pointer transition-all duration-150 text-[#BABABA]' />
                  <Icon icon="mingcute:youtube-fill" className='text-[22px] md:text-2xl hover:text-light-green cursor-pointer transition-all duration-150 text-[#BABABA]' />
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className='w-full bg-[#313131] h-[1px] my-4 block'></span>
            <p className='text-sm text-[#868686] text-center pb-4'>All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  )
}
