import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Container, Header as HeaderComponent, PostCard } from '../components';

const Home = () => {
    useEffect(() => {
    
    }, [])

    const posts = useSelector(state => state.post.postData);

  return (
    <div>
        <HeaderComponent />

        <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {
                    posts.map((post) => (
                        <div key={post._id} className='p-2 w-1/4'>
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