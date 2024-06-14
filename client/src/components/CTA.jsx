import React from 'react';

import Container from "./container/Container";
import { Button } from "../components";

const CTA = () => {
  return (
    <Container className='flex flex-wrap justify-between items-center cta-gradient rounded-[30px] p-8'>
        <h3 className='font-bold text-[24px] text-white'>Step into the future</h3>

        <Button bgColor='bg-[#0B1531]'>Get Started</Button>
    </Container>
  )
}

export default CTA