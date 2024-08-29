import React from 'react';
import Navbar from '../../components/Navbar';
import LoginedNavbar from '../../components/LoginedNavbar';
import Leftbar from '../../components/Leftbar';
import PostArea from '../../components/PostArea';
import SharedPost from '../../components/SharedPost';

const Home = () => {
  return (
    <>
     

      <div className="flex h-[100vh]">
        {/* Fixed Leftbar */}
        <Leftbar />

        {/* Content area */}
        <div className="flex-1 ml-[15%] p-10 mt-20"> {/* Added margin-left to accommodate Leftbar width */}
          <PostArea />
          <SharedPost />
        
        </div>
      </div>
    </>
  );
};

export default Home;
