import React from 'react'
import { FaThumbsUp, FaThumbsDown, FaCommentAlt } from 'react-icons/fa';
const Post = ({toggleComments,showComments}) => {
  return (
    <>
     {/* Image Section */}
     <div className='w-full h-44 bg-red-400 rounded-lg overflow-hidden mb-4'>
        <img
          src='https://via.placeholder.com/600x300'
          alt='Shared Post'
          className='w-full h-full object-cover'
        />
      </div>

      {/* Post Content */}
      <div className='w-full mb-4'>
        <p className='text-gray-800 text-lg'>
          This is an example of a shared post. Users can share their thoughts here.
        </p>
      </div>

      {/* Interaction Buttons */}
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center gap-4'>
          <button className='flex items-center text-blue-500 hover:text-blue-600 transition-colors'>
            <FaThumbsUp className='mr-2' />
            <span>Like</span>
          </button>
          <button className='flex items-center text-red-500 hover:text-red-600 transition-colors'>
            <FaThumbsDown className='mr-2' />
            <span>Dislike</span>
          </button>
        </div>
        <button
          className='flex items-center text-gray-500 hover:text-gray-600 transition-colors'
          onClick={toggleComments}
        >
          <FaCommentAlt className='mr-2' />
          <span>{showComments ? 'Hide Comments' : 'Show Comments'}</span>
        </button>
      </div>

      {/* Comment Section */}
      {showComments && (
        <div className='w-full bg-gray-100 p-4 rounded-lg shadow-inner transition-all duration-500'>
          <div className='mb-4'>
            <p className='text-gray-700'>
              <strong>User1:</strong> This is a comment on the post.
            </p>
          </div>
          <div className='mb-4'>
            <p className='text-gray-700'>
              <strong>User2:</strong> Another comment with some thoughts.
            </p>
          </div>
          <input
            type='text'
            placeholder='Add a comment...'
            className='w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          
        </div>
      )}
    </>
  )
}

export default Post