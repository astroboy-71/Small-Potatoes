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
      <footer className='bg-[#FE983B] w-full work-sans'>
        <div className={`${styles.maxWidth} pt-14 2xl:px-0 md:px-4 px-8`}>
          <div className=' flex-col flex justify-between items-center'>
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
              </div>
            </div>

            {/* 2nd Column */}
            <div className='md:py-0 py-10'>
              <div>
                <ul className='pt-1 flex gap-5'>
                  {
                    NavLinks.map((FootLink, index) => (
                      <li key={index} className='font-normal text-base pb-6 sm:last:pb-6 last:pb-0'>
                        <ScrollLink
                          key={index}
                          to={FootLink.id}
                          spy={true}
                          smooth={true}
                          offset={-40}
                          duration={800}
                          className='text-black hover:text-white cursor-pointer transition-colors duration-200'
                        >
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
                <div className='flex pt-2 gap-x-4'>
                  <Icon icon="pajamas:twitter" className='md:text-[22px] text-lg hover:text-white cursor-pointer transition-all duration-150 text-black' />
                  <Icon icon="ic:outline-facebook" className='text-[22px] md:text-2xl hover:text-white cursor-pointer transition-all duration-150 text-black' />
                  <Icon icon="mingcute:youtube-fill" className='text-[22px] md:text-2xl hover:text-white cursor-pointer transition-all duration-150 text-black' />
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className='w-full bg-[#313131] h-[1px] my-4 block'></span>
            <p className='text-sm text-black text-center pb-4'>All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  )
}
