import React, { useState } from 'react';
import { FaRegSmile, FaImage } from 'react-icons/fa';

const PostArea = () => {
  const [postText, setPostText] = useState('');

  const handlePostTextChange = (e) => {
    setPostText(e.target.value);
  };

  const handleShare = () => {
    console.log('Shared:', postText);
    // Implement your sharing logic here
  };

  return (
    <div className='w-full bg-white shadow-lg rounded-lg p-4 mb-6'>
      {/* Post Input Area */}
      <div className='mb-4'>
        <textarea
          className='w-full h-20 p-3 text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
          placeholder='Share Something...'
          value={postText}
          onChange={handlePostTextChange}
        />
      </div>

      {/* Post Options */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <button className='flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors'>
            <FaRegSmile className='text-xl' />
            <span>Add Emoji</span>
          </button>
          <button className='flex items-center gap-2 text-green-500 hover:text-green-600 transition-colors'>
            <FaImage className='text-xl' />
            <span>Add Image</span>
          </button>
        </div>
        <button
          className='bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors'
          onClick={handleShare}
        >
          Share
        </button>
      </div>
    </div>
  );
};

export default PostArea;
