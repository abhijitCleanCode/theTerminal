import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, setTotalPage, fetchNextPage, fetchPrevPage } from '../store/postSlice';

import { Container, Header as HeaderComponent, PostCard, Loader as LoaderComponent, Button } from '../components';
import { API } from '../service/api';

const Home = () => {
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
        <>
            <HeaderComponent />

            <div className='w-full py-8'>
                <Container>
                    <div className='flex flex-wrap'>
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
                <Button onClick={handlePrev}>Prev</Button>
                {
                    <p>Displaying page <strong>{currentPage}</strong> of <strong>{totalPage}</strong></p>
                }
                <Button onClick={handleNext}>Next</Button>
            </Container>

        </>
    ) : (
        <LoaderComponent />
    )
}

export default Home