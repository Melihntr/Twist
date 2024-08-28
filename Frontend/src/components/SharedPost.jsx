import React, { useState } from 'react';
import Post from './Post';

const SharedPost = () => {
  // Example posts data
  const posts = [
    {
      id: 1,
      image: 'https://via.placeholder.com/600x300',
      content: 'This is an example of a shared post. Users can share their thoughts here.',
      comments: [
        { user: 'User1', text: 'This is a comment on the post.' },
        { user: 'User2', text: 'Another comment with some thoughts.' },
      ],
    },{
        id: 2,
        image: 'https://via.placeholder.com/600x300',
        content: 'This is an example of a shared post. Users can share their thoughts here.',
        comments: [
          { user: 'User1', text: 'This is a comment on the post.' },
          { user: 'User2', text: 'Another comment with some thoughts.' },
        ],
      },

    // Add more post objects as needed
  ];

  const [activePostId, setActivePostId] = useState(null);

  const toggleComments = (postId) => {
    setActivePostId(activePostId === postId ? null : postId);
  };

  return (
    <div className='w-full bg-white p-4 mb-6'>
      <div className='flex flex-col gap-6'>
        {posts.map((post) => (
          <Post
            key={post.id}
            image={post.image}
            content={post.content}
            comments={post.comments}
            showComments={activePostId === post.id}
            toggleComments={() => toggleComments(post.id)}
            className="border border-gray-300 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
          />
        ))}
        <br />
      </div>
    </div>
  );
};

export default SharedPost;
