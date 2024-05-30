import React from 'react'

const Header = () => {
    return (
        <header className='min-h-screen content-center'>
                <div className="flex flex-col items-center justify-start w-full mb-9 gap-[30px] h-full w-full">
                    <h1 className="text-[50px] font-black !font-merriweather text-center pink-text-gradient">
                        Let's paint the canvas of internet
                    </h1>
                    <p className="text-2xl font-black w-[78%] text-center leading-[35px] pink-text-gradient">
                        Great things take time, you don't have much to spend. Spend wisely!
                    </p>
                </div>
        </header>
    )
}

export default Header