import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ _id, title, picture }) {
  const addEllipses = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  }

  return (
    <Link to={`/post/${_id}`}>
      <div className="max-w-sm min-w-[340px] rounded-3xl p-2 mx-1 my-3 transform hover:scale-105 transition-transform duration-300 ease-in-out card-neumorphism">

        <div className="h-3/6 rounded-2xl">
          <img src={picture} alt="featured image" className='w-full h-40 object-cover rounded-t-2xl' />
        </div>

        <h2 className="mt-4 pl-2 mb-2 font-mono font-bold text-2xl text-[#FCAFDC]">{addEllipses(title, 30)}</h2>
      </div>
    </Link>
  )
}

export default PostCard

{/* <div class="relative max-w-xl mx-auto mt-20">
    <img class="h-64 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1680725779155-456faadefa26" alt="Random image">
    <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
    <div class="absolute inset-0 flex items-center justify-center">
        <h2 class="text-white text-3xl font-bold">Get Lost in Mountains</h2>
    </div>
</div> */}