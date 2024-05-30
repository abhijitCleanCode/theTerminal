import React from 'react'

const SectionWrapper = (Component) => 
    function HOC() {
        return (
            <div className='max-w-7xl m-auto'>
                <Component />
            </div>
        )
    }


export default SectionWrapper