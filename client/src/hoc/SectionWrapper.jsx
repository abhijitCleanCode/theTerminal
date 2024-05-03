import React from 'react'

const SectionWrapper = (Component) => 
    function HOC() {
        return (
            <div className='px-6 py-10'>
                <Component />
            </div>
        )
    }


export default SectionWrapper