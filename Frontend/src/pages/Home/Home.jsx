import React from 'react'
import Navbar from '../../components/Navbar'
import LoginedNavbar from '../../components/LoginedNavbar'

const Home = ({isLogin}) => {
  return (
    <>
    {!isLogin? <Navbar />: <LoginedNavbar />}
    </>
  )
}

export default Home