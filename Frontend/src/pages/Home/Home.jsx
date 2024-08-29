import React from "react";
import Navbar from "../../components/Navbar";
import LoginedNavbar from "../../components/LoginedNavbar";
import Leftbar from "../../components/Leftbar";
import PostArea from "../../components/PostArea";
import SharedPost from "../../components/SharedPost";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-1 h-full">
          {/* Fixed Leftbar */}
          <Leftbar />

          {/* Content area */}
          <div className="flex-1 ml-[15%] p-10 mt-20">
            <PostArea />
            <SharedPost />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
