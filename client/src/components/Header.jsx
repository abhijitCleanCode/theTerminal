import React from 'react'

import Container from './container/Container'

const Header = () => {
    return (
        <header>
            <Container>
                <div className="flex flex-col items-center justify-start w-[80%] md:w-full mb-9 gap-[30px]">
                    <h1 className="text-[50px] font-black !font-merriweather text-center">
                        Share via writing, hope you enjoy
                    </h1>
                    <p className="text-2xl font-normal w-[78%] !text-gray-600 text-center leading-[35px]">
                        Increase your knowledge by reading new things and I will share whatever I know for you, as long as I
                        enjoy it
                    </p>
                </div>
            </Container>
        </header>
    )
}

export default Header