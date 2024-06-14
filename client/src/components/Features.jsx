import React from 'react'

import { SectionWrapper } from '../hoc'

const ServiceCard = ({ title }) => (
    <div className='w-full green-pink-gradient p-[1px] rounded-[15px]'>
        <div className='bg-[#070d2b] rounded-[15px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <button className='text-gray-300 text-[20px] font-black text-center'>
          {title}
        </button>
        </div>
    </div>
)

const Features = () => {
    return (
        <div className='bg-[#0B1531] shadow rounded-[30px] p-8' id='features'>
            <h3 className='text-2xl font-black w-[78%] leading-[35px] text-gray-300'>What do we do</h3>
            <h1 className='violet-text-gradient font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>We Turn Stories into Code</h1>
            <div className='py-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
                <ServiceCard title="Know the core"/>
                <ServiceCard title="Level Up"/>
                <ServiceCard title="Dev"/>
                <ServiceCard title="Test Us"/>
            </div>
        </div>
    )
}

export default SectionWrapper(Features);