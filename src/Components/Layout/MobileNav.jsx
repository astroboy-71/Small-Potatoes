import React, { useEffect, useState } from 'react'
import { styles } from '../../styles';
import { NewLogo } from '../../assets';
import { Turn as Hamburger } from 'hamburger-react'
import { NavLinks } from '../../Data/Layout/Index';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

export default function MobileNav() {

    const [isActive, SetisActive] = useState(false);

    useEffect(() => {
        if (isActive === true) {
            document.documentElement.classList.add('overflow-hidden');
        } else {
            document.documentElement.classList.remove('overflow-hidden');
            document.documentElement.classList.add('overflow-x-hidden');
        }
    }, [isActive]);


    const btnStyles = ["relative text-white w-[90%] m-auto md:w-[300px] h-[60px] flex items-center justify-center overflow-hidden rounded-full work-sans text-base md:text-lg md:font-medium font-normal duration-300 ease-in-out transition-all"]


    return (
        <>
            {/* {
                isActive === true ? (
                    <>
                        <div className={`absolute w-full h-screen bg-black/75
                            ${isActive ? "opacity-100 visible" : "opacity-0 invisible"}
                         transition-all duration-300 backdrop-blur-md` }
                            onClick={() => SetisActive(false)}
                        ></div>
                    </>
                ) : (
                    <>
                    </>
                )
            } */}
            <nav className={`${styles.maxWidth} py-6 px-8 flex justify-between items-center relative work-sans`}>
                <div className="logo relative z-10 w-full flex items-center justify-center">
                    <Link
                        to="/"
                        className='hover:text-[#00B6EF] cursor-pointer transition-all duration-150 ease-linear'
                    >
                        <img src={NewLogo} alt="Small Potatoes Logo" className='cursor-pointer sm:w-36 w-32' />
                    </Link>
                </div>
                <div className='w-auto absolute right-6 flex items-start justify-end'>
                    <div className='relative z-10'>
                        <Hamburger
                            rounded
                            distance='sm'
                            size={22}
                            easing='ease'
                            duration={0.3}
                            onToggle={(toggled) => {
                                SetisActive(toggled);
                            }}
                            toggled={isActive}
                        />
                    </div>

                </div>
                <div className={`w-full absolute top-0 bg-[#1A1A26] h-screen backdrop-blur-md transition-all duration-300 ease
                    ${isActive ? "right-0" : "-right-full"}
                `}>
                    <ul className={`px-8 pt-28 ${isActive ? "opacity-100 " : "opacity-0"} transition-opacity duration-200 ease-in delay-100 opacity-0`}>
                        {NavLinks.map((links, index) => (
                            <li key={index} className='text-lg pb-8 font-medium'>
                                <ScrollLink
                                    key={index}
                                    to={links.id}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={650}
                                    className='cursor-pointer'
                                    onClick={() => SetisActive(false)}
                                >
                                    {links.title}
                                </ScrollLink>
                            </li>
                        ))}
                        <div className='absolute bottom-20 w-full text-center left-0'>
                            <button className={`${btnStyles} bg-custom-blue hover:bg-light-green/80`}>
                                <Link to={"tel:(323) 595-3041"}>
                                    <span className='relative z-10'>Text Us (323) 595-3041</span>
                                </Link>
                            </button>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    )
}
