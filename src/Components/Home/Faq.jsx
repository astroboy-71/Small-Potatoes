import React, { useState } from 'react';
import { styles } from '../../styles';
import { Element } from 'react-scroll';
import { faqs } from '../../Data/Home/Faq';

export default function Faq() {

  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <>
      <section className="md:pt-20 pt-10 pb-20 work-sans bg-white" id='faqs'>
        <div className="pt-4 pb-6">
          <h1 className={`${styles.sectionHeadText} px-4 text-[#931E0B]`}>
            Frequently Asked Questions
          </h1>
        </div>
        <div className="w-full max-w-[880px] m-auto mt-4 md:mt-8 grid gap-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-solid border-0 border-b border-[#5E5E5E] mx-8 pr-4 pb-5 cursor-pointer transition-all duration-300 relative`}
              onClick={() => toggleAccordion(index)}
            >
              <div
                className={`${activeIndex === index ? "text-[#FE983B] minus after:bg-[#FE983B] before:bg-[#FE983B]" : "text-black"
                  } flex relative justify-between items-center faq-sign`}
              >
                <h1 className="text-base md:text-lg font-medium pr-6">
                  {faq.question}
                </h1>
              </div>
              <div
                className={`${activeIndex === index
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr] "
                  } w-full grid transition-[grid-template-rows] duration-300 ease-out`}
              >
                <div className={`${activeIndex === index ? "opacity-100" : "opacity-0"} opacity-0 transition-opacity delay-0 ease-linear duration-200 overflow-hidden`}>
                  <p className="pt-4 pb-2 pr-8 text-base md:text-lg font-normal text-[#BABABA]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}