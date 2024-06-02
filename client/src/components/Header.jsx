import React from 'react'

const Header = () => {
    return (
        <header className='min-h-screen content-center'>
                <div className="flex flex-col items-center justify-start w-full mb-9 gap-[30px] h-full w-full">
                    <h1 className="text-[50px] font-black !font-merriweather text-center pink-text-gradient">
                        The Future is You, Just Realize it
                    </h1>
                    <p className="text-2xl font-black w-[78%] text-center leading-[35px] blue-text-gradient">
                        Make It Happen
                    </p>
                </div>
        </header>
    )
}

export default Header