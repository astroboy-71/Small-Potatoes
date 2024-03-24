import React, { useEffect, useRef, useState } from 'react'
import { styles } from '../../styles'
// import { CardData } from '../../Data/Home/Services';
import { Player } from '@lordicon/react';
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

export default function Services() {

  const CardData = [
    {
      id: 1,
      animatedSvg: <lord-icon target=".card"
        src="https://cdn.lordicon.com/ajfmgpbq.json"
        trigger="loop-on-hover"
        delay="250"
        colors="primary:#00b6ef,secondary:#05e9be"
        style={
          {
            width: "100%",
            height: "100%"
          }
        }> </lord-icon>,
      head: "Accelerate your brand's growth",
      para: "Small Potatoes Unlimited helps CPG brands accelerate their growth by providing the right resources at the right time. Operational assets can reduce manufacturing costs and free up cash flow to focus on growth."
    },
    {
      id: 2,
      animatedSvg: <lord-icon target=".card"
        src="https://cdn.lordicon.com/nmguxqka.json"
        trigger="loop-on-hover"
        delay="250"
        colors="primary:#00b6ef,secondary:#05e9be"
        style={
          {
            width: "100%",
            height: "100%"
          }
        }> </lord-icon>,
      head: "Access to industry knowledge and experience",
      para: "With Small Potatoes Unlimited, you gain access to our extensive industry knowledge and experience. We have grown brands from zero to $50MM+ and have landed the #3 spot on Inc. 5,000 list of fastest growing companies in the country."
    },
    {
      id: 3,
      animatedSvg: <lord-icon target=".card"
        src="https://cdn.lordicon.com/bfqujiem.json"
        trigger="loop-on-hover"
        delay="250"
        colors="primary:#00b6ef,secondary:#05e9be"
        style={
          {
            width: "100%",
            height: "100%"
          }
        }> </lord-icon>,
      head: "Expand your distribution network",
      para: "We can help your brand expand its distribution network by leveraging our existing partnerships and connections. With Small Potatoes Unlimited, you can reach new markets and increase your brand's visibility."
    },
  ]



  return (
    <>
      <section className="bg-[#EEF5F9] pt-0 py-6 sm:py-12 md:pb-6 md:pt-0" id='services'>
        <div className={`${styles.maxWidth} py-12`}>
          <div className="">
            <h1 className={styles.sectionHeadText}>Services</h1>
            <p className="text-[#848484] text-base px-6 md:text-lg text-center pt-4">
              Play your best hand by leveraging the services we offer.
            </p>
          </div>

          <div className="mt-8 flex gap-x-2 lg:gap-x-12 gap-y-4 md:gap-y-12 flex-wrap justify-center items-start">
            {CardData.map((cards, index) => (
              <div
                key={index}
                className="cursor-pointer card bg-gradient-to-b mt-4 w-[100%] sm:w-[360px] rounded-xl from-[#B3CDF8] to-[#000210] p-[1px] hover:bg-gradient-to-b hover:from-[#00FFFF] hover:to-[#000210] card-hover lg:mx-0 mx-8 transition-all duration-200 ease-out"
              >
                <div className="bg-white rounded-xl  py-6 px-5 h-full sm:h-[450px] flex flex-col items-center justify-evenly text-center"
                  onMouseEnter={() => MouseEnter(index)}
                  onMouseLeave={() => MouseLeave(index)}
                >
                  <div
                    className={`w-full h-14 sm:h-[70px] sm:mb-0 flex items-center justify-center`}
                  >
                    {cards.animatedSvg}
                  </div>
                  <div className="pt-3 flex flex-col gap-y-3">
                    <h1 className="work-sans text-xl font-semibold text-black">
                      {cards.head}
                    </h1>
                    <p className="text-base md:text-lg text-[#898989] font-normal w-full">
                      {cards.para}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
