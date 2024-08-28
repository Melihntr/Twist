import React from 'react';
import Navbar from '../../components/Navbar';
import LoginedNavbar from '../../components/LoginedNavbar';
import Leftbar from '../../components/Leftbar';
import PostArea from '../../components/PostArea';

const Home = ({ isLogin }) => {
  return (
    <>
      
      {!isLogin ? <Navbar /> : <LoginedNavbar />}

      
      <div className="flex h-[100vh]"> 
        <Leftbar />

        <div className="w-[60%] bg-gray-100 p-10">
          <PostArea />
        </div>
      </div>
    </>
  );
};

export default Home;
