import React, { memo, useRef } from "react";
import { useState, useEffect } from "react";
import { AboutCard } from "../../Data/Home/About";
import { styles } from "../../styles";
import { NewLogo } from '../../assets';
import Greening from '../../assets/greening.png';
import Veggie from '../../assets/veggie.jpeg';
import Mason from '../../assets/Mason.jpeg';

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      const intervalId = setInterval(tick, delay);
      return () => clearInterval(intervalId);
    }
  }, [delay]);
};

const AboutUs = memo(() => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());

  const ToggleCard = (index) => {
    if (index === activeIndex) {
      // Reset the loading bar and timer for the already opened card
      setLoadingProgress(0);
      setStartTime(Date.now());
      setActiveIndex(activeIndex === -1 ? -1 : -2);
    } else {
      // Switch to the clicked card and reset loading bar and timer
      setActiveIndex(index);
      setLoadingProgress(0);
      setStartTime(Date.now());
    }
  };


  const updateLoadingProgress = () => {
    const currentTime = Date.now();
    const elapsed = currentTime - (startTime + 300);
    const progress = (elapsed / 10000) * 100;

    setLoadingProgress(progress >= 100 ? 100 : progress);

    if (progress >= 100 && activeIndex !== -1) {
      ToggleCard((activeIndex + 1) % AboutCard.length);
      setStartTime(Date.now());
    }
  };

  useInterval(updateLoadingProgress, 1000 / 60); // 60 FPS


  return (
    <section className="md:py-4 work-sans bg-white" id="about-us">
      <div className={`${styles.maxWidth} mt-16 mb-8 md:mt-16 md:mb-24 px-6`}>
        <div className="pb-8 md:pb-12">
          <h1 className={`${styles.sectionHeadText} flex md:justify-start justify-center items-start text-[#ff7251]`}>About Us</h1>
        </div>

        <div className="flex items-start justify-start gap-x-6 md:flex-row flex-col 2xl:h-[450px] h-auto">
          <div>
            {/* Cards */}
            {AboutCard.map((cardData, index) => (
              <div key={index} className="relative mb-2 w-full md:w-[600px]">
                {/* Loading Bar */}
                <div
                  className="absolute bottom-0 left-0 h-[1px]"
                  style={{
                    width: activeIndex === index ? `${loadingProgress}%` : "0%",
                    backgroundImage: cardData.loadingBarColor || 'blue',
                  }}
                />

                {/* Card Content */}
                <div
                  className={`md:px-8 px-6 mb-8 cursor-pointer
                    bg-white shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]
                   transition-all duration-200 ease-linear py-5`}
                  onClick={() => ToggleCard(index)}
                >
                  <div>
                    <h1
                      className={`${activeIndex === index
                        ? `${cardData.HeadColor}`
                        : "text-[#2f2f2f]"
                        } transition-all capitalize duration-200 ease-out text-xl md:text-2xl font-bold delay-150`}
                    >{cardData.Tab}</h1>
                  </div>
                  <div
                    className={`${activeIndex === index
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr] "
                      } w-full grid transition-[grid-template-rows] delay-75 duration-[350ms] ease-out`}
                  >
                    <div className={`${activeIndex === index ? "opacity-100" : "opacity-0"} opacity-0 transition-opacity delay-100 ease-linear duration-200 overflow-hidden`}>
                      <p className="md:text-lg text-base pb-3 pt-4 font-normal text-black">{cardData.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-start items-end relative">
            <img src={Veggie} alt="Small Potatoes Logo" className="select-none pointer-events-none w-auto rounded-2xl ml-6 -mt-10" />
            <img src={Greening} alt="Small Potatoes Logo" className="select-none pointer-events-none h-5/6 w-auto rounded-2xl absolute -mb-32" />
            <img src={Mason} alt="Small Potatoes Logo" className="select-none pointer-events-none w-auto rounded-2xl absolute h-[30%] ml-60 -mb-16" />
          </div>
        </div>
      </div>
    </section>
  );
});



export default AboutUs

