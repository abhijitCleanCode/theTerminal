import React from 'react'

import { SectionWrapper } from '../hoc'
import { KnowCore as KnowCoreComponent, Dev as DevComponent, Project as ProjectComponent} from '../components'
import { frustrationToFlawless } from '../assets'

const Features = () => {
  return (
    <section className='space-y-8'>
      <div className='flex flex-col md:flex-row p-8'>
        <div className='flex-1 flex-col justify-center items-start py-[6px] px-4 mb-2 text-gray-300 space-y-3'>
        <h3 className='text-2xl font-black w-[78%] text-gray-300'>Make It Happen</h3>
        <h1 className='font-black ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]'>From <span className='features-text-gradient'>Frustration</span> To <span className='features-text-gradient'>Flawless</span></h1>
        </div>

        <div className='flex-1 flex justify-center items-center my-10 md:my-0 relative'>
          <img src={frustrationToFlawless} alt="compile code flawlessly" className='rounded-[15px]'/>
        </div>
      </div>

      <KnowCoreComponent />
      <DevComponent />
      <ProjectComponent />
    </section>
  )
}

export default SectionWrapper(Features)