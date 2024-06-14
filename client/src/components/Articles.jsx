import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, setTotalPage, fetchNextPage, fetchPrevPage } from '../store/postSlice';

import { Container, PostCard, Button, Loader as LoaderComponent } from '../components';
import { API } from '../service/api';
import { sarvagyaArticles } from '../assets';

const Articles = () => {
    const [loader, setLoader] = useState(false);
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.postData);
    const currentPage = useSelector(state => state.post.currentPage);
    const totalPage = useSelector(state => state.post.totalPage);

    useEffect(() => {
        try {
            const totalPage = async () => {
                // Get total page via API call
                const response = await API.fetchEightPost({ page: currentPage })

                if (response.isSuccess) {
                    dispatch(setTotalPage(Math.ceil(response.data.total / 8)));
                }
            }
            totalPage();
        } catch (error) {
            console.log("client :: src :: pages :: home :: useEffect :: totalPage :: catch: ", error);
        }
    }, [])

    useEffect(() => {
        try {
            setLoader(true);
            // Get posts via API call, 8 at a time
            const fetchEightPost = async () => {
                let response = await API.fetchEightPost({ page: currentPage });

                if (response.isSuccess) {
                    dispatch(getPost(response.data.posts));
                }
            }

            fetchEightPost();
        } catch (error) {
            console.log("client :: src :: pages :: home :: useEffect :: fetchEightPost :: catch: ", error);
        } finally {
            setLoader(false);
        }
    }, [currentPage])

    const handleNext = async () => {
        dispatch(fetchNextPage());
    }
    const handlePrev = async () => {
        dispatch(fetchPrevPage());
    }

    return !loader ? (
        <article className='mb-16'>
            <Container className='mt-8'>
                <p className='text-2xl font-bold w-[78%] leading-[35px] text-white'>How Innovation is Shaping Our Future</p>
                <h2 className='violet-text-gradient font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Tech Time Wrap</h2>
            </Container>

            <div className="pt-8 flex justify-center items-center">
                <h3 className=" border-b-2 border-[#00cea8] flex items-center justify-center text-center violet-text-gradient font-bold text-xl md:text-2xl">
                    Some Of Our Most Impactful Stories
                </h3>
            </div>

            <div className='w-full py-8'>
                <Container>
                    <div className='flex flex-wrap justify-center items-center gap-2'>
                        {
                            posts.map((post) => (
                                <div key={post._id} className='p-2'>
                                    <PostCard {...post} />
                                </div>
                            ))
                        }
                    </div>
                </Container>
            </div>

            <Container className="flex justify-between">
                <Button onClick={handlePrev} className='text-xl md:text-2xl'>Prev</Button>
                <p className='text-[#CC51D6] text-lg md:text-xl'>Displaying page <strong>{currentPage}</strong> of <strong>{totalPage}</strong></p>
                <Button onClick={handleNext} className='button-neumorphism font-bold text-xl md:text-2xl'>Next</Button>
            </Container>
        </article>
    ) : (
        <LoaderComponent />
    )
}

export default Articles