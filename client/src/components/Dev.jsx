import React from 'react'

import { Button } from "./index.js";
import { buildZone } from "../constants/index.js";
import { Star } from '../assets/index.js';

// Data will come from backend
const FeatureCard = ({ id, title, content, index }) => (
  <div className={`flex justify-center items-center flex-row gap-4 p-4 ${index !== buildZone.length - 1 ? "mb-2" : "mb-0"}`}>
    <div className='w-[64px] h-[64px] flex justify-center items-center rounded-full bg-dimBlue'>
      <img src={Star} alt="icon" className='w-[50%] h-[50%] object-contain' />
    </div>

      <h4 className='font-semibold text-white text-[18px] leading-[23.4px]'>{title}</h4>   
  </div>
)

const Dev = () => {
  return (
    <section className='flex flex-wrap justify-between'>
      <div>
        <h2 className='text-white font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full'>Build Zone</h2>
        <p className='font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px]'>Master the Art of Software Craftmanship</p>

        <Button className='mt-5'>Call to Action</Button>
      </div>

      <div className='flex-1 flex justify-center items-start flex-col md:ml-10 ml-0 md:mt-0 mt-10 relative md:max-w-[470px]'>
        {
          buildZone.map((value, index) => (
            <FeatureCard key={value.id} {...value} index={index} />
          ))
        }
        <Button className='mx-auto'>Many More</Button>
      </div>
    </section>
  )
}

export default Dev