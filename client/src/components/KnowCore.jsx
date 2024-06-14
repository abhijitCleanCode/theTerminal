import React from 'react';

import { Button } from "./index.js";
import { coreSubject } from "../constants/index.js";
import { Star } from '../assets/index.js';

// Data will come from backend
const FeatureCard = ({ id, title, content, index }) => (
  <div className={`flex flex-row p-4 ${index !== coreSubject.length - 1 ? "mb-6" : "mb-0"}`}>
    <div className='w-[64px] h-[64px] flex justify-center items-center rounded-full bg-dimBlue'>
      <img src={Star} alt="icon" className='w-[50%] h-[50%] object-contain' />
    </div>

    <div className='flex-1 flex-col ml-3'>
      <h4 className='font-semibold text-white text-[18px] leading-[23.4px] mb-1'>{title}</h4>
      <p className='font-normal text-dimWhite text-[16px] leading-[24px]'>{content}</p>
    </div>    
  </div>
)

const KnowCore = () => {
  return (
    <section className='flex flex-wrap md:flex-row-reverse justify-between'>
      <div>
        <h2 className='text-white font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full'>Know The Core</h2>
        <p className='font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px]'>Building Foundation In Computer Engineering</p>

        <Button className='mt-5'>Call to Action</Button>
      </div>

      <div className='flex-1 flex justify-center items-start flex-col md:ml-10 ml-0 md:mt-0 mt-10 relative md:max-w-[470px]'>
        {
          coreSubject.map((value, index) => (
            <FeatureCard key={value.id} {...value} index={index} />
          ))
        }
        <Button className='mx-auto mt-5'>Many More</Button>
      </div>
    </section>
  )
}

export default KnowCore