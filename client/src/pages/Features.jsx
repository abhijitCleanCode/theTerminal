import React from 'react'

import { KnowCore as KnowCoreComponent, Dev as DevComponent, LevelUp as LevelUPComponent } from '../components'

const Features = () => {
  return (
    <section>
        <div className='flex flex-col md:flex-row'>
            <div className='flex-1 flex-col py-[6px] px-4 mb-2'>
                <h3 className='ml-2 text-gray-300'>Make it Happen</h3>
            </div>
        </div>

        <KnowCoreComponent />
        <DevComponent />
        <LevelUPComponent />
    </section>
  )
}

export default Features