import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ _id, title, picture }) {
  const addEllipses = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  }

  return (
    <Link to={`/post/${_id}`}>
      <div className="w-full md:w-72 p-4 bg-white rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <img src={picture} alt="featured image" className='w-full h-full object-contain rounded-t-lg' />

        <h2 className="font-mono font-bold text-xl text-[#424242]">{addEllipses(title, 30)}</h2>
      </div>
    </Link>
  )
}

export default PostCard