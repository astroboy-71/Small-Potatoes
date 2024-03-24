import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';

function GoTop() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 2000) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <button
                className={`fixed bottom-8 right-8 sm:bottom-20 sm:right-20 p-3 md:p-4 bg-gray-800 border border-gray-700/30
           text-white rounded-full opacity-0 transform transition-all duration-300 ease-out
           hover:bg-gray-700 z-10
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                onClick={scrollToTop}
            >
                <Icon icon="octicon:arrow-up-16" className='text-xl md:text-2xl relative z-10' />
            </button>
        </div>
    )
}

export default GoTop
