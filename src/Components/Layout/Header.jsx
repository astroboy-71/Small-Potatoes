import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NewLogo } from '../../assets';
import { styles } from '../../styles';
import { NavLinks } from '../../Data/Layout/Index';
import MobileNav from './MobileNav';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const MenuStyles = ["flex justify-center items-center gap-x-12 font-normal text-lg font-medium"];
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const hideNav = windowWidth >= 850;

    const navigate = useNavigate();

    useEffect(() => {
        const handleScrollToTop = () => {
            window.scrollTo(0, 0);
        };

        // Attach scroll-to-top handler when the component mounts
        handleScrollToTop();

        // Attach scroll-to-top handler to the 'beforeRouteUpdate' event
        const unlisten = navigate((location) => {
            handleScrollToTop();
        });

        // Cleanup function to remove the navigation listener
        return unlisten;
    }, [navigate]);

    return (
        <>
            <header className='w-full work-sans absolute mt-2 z-10 overflow-x-clip'>
                {hideNav ? (
                    <nav className={`${styles.maxWidthNav} py-6 2xl:px-0 px-4 flex justify-between items-center`}>
                        <div className="left-menu menu-items flex w-auto">
                            <ul className={`list-items ${MenuStyles}`}>
                                {NavLinks.slice(0, 2).map((link, index) => (
                                    <ScrollLink
                                        key={index}
                                        to={link.id}
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={650}
                                        className='hover:text-[#00B6EF] text-black font-semibold cursor-pointer transition-all duration-150 ease-linear'
                                    >
                                        {link.title}
                                    </ScrollLink>
                                ))}
                            </ul>
                        </div>
                        <div className="logo">
                            <a
                                href="/"
                                className='hover:text-[#00B6EF] cursor-pointer transition-all duration-150 ease-linear'
                            >
                                <img src={NewLogo} alt="Small Potatoes Logo" className='cursor-pointer md:w-24 relative z-[1]' />
                            </a>
                        </div>
                        <div className="right-menu menu-items">
                            <ul className={`list-items ${MenuStyles}`}>
                                {NavLinks.slice(2, 4).map((link, index) => (
                                    <ScrollLink
                                        key={index}
                                        to={link.id}
                                        spy={true}
                                        smooth={true}
                                        offset={-40}
                                        duration={650}
                                        className='hover:text-[#00B6EF] text-black font-semibold cursor-pointer transition-all duration-150 ease-linear'
                                    >
                                        {link.title}
                                    </ScrollLink>
                                ))}
                            </ul>
                        </div>
                    </nav>
                ) : (
                    <>
                        <MobileNav />
                    </>
                )}
            </header>
        </>
    );
}
