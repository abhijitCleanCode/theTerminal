import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setPost } from '../store/allPostSlice';
import { API } from '../service/api';
import { Container, PostCard, Loader as LoaderComponent } from '../components';

const AllPosts = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const allPosts = useSelector(state => state.allPost.allPost);
  const totalPage = useSelector(state => state.post.totalPage);

  const handleInfiniteScroll = () => {
    try {
      if ((window.innerHeight + document.documentElement.scrollTop + 1) >= (document.documentElement.scrollHeight)) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log("client :: src :: pages :: AllPosts :: handleInfiniteScroll :: error: ", error);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);

    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, [])

  const fetchPost = async () => {
    try {
      setLoading(true);
      const response = await API.fetchEightPost({ page });
      console.log("page :: ", page);
      console.log("totalPage :: ", totalPage);

      if (response.isSuccess) {
        dispatch(setPost(response.data.posts));
      }
    } catch (error) {
      console.log("client :: src :: pages :: AllPosts :: fetchPost :: error: ", error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (page === totalPage) return 

    fetchPost();
  }, [page])

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {
                    allPosts.map((post) => (
                        <div key={post._id} className='p-2'>
                            <PostCard {...post} />
                        </div>
                    ))
                }
            </div>

            {
              loading && (
                <div className='m-4 flex justify-center'>
                  <LoaderComponent />
                </div>
              )
            }
        </Container>
    </div>
  )
}

export default AllPosts