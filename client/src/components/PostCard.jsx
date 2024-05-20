import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ _id, title, picture }) {
  const addEllipses = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  }

  return (
    <Link to={`/post/${_id}`}>
      <div className="pb-2 w-full md:w-72 transform hover:scale-105 transition-transform duration-300 ease-in-out card-neumorphism">

        <div className="h-3/6 rounded-lg">
          <img src={picture} alt="featured image" className='w-full h-full object-contain rounded-t-lg' />
        </div>

        <h2 className="px-4 pt-2 font-mono font-bold text-2xl text-[#C68DCB]">{addEllipses(title, 30)}</h2>
      </div>
    </Link>
  )
}

export default PostCard