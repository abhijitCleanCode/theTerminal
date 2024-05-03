import { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { Header as HeaderComponent, PostCard } from '../components'



const Home = () => {
  return (
    <div>
        <HeaderComponent />

        <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {
                    posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))
                }
            </div>
        </Container>
    </div>
    </div>
  )
}

export default Home