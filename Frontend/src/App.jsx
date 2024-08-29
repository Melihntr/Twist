import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import { useState } from "react"
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar"
import LoginedNavbar from "./components/LoginedNavbar";
import Footer from "./components/Footer";

function App() {
  const [isLogin,setIsLogin] = useState(false);

  const handleUserLogin = ()=>{
    setIsLogin(true)
  }
  

  return (
    <>

    <Router>
       {/* Render appropriate Navbar based on login state */}
       {!isLogin ? <Navbar /> : <LoginedNavbar />}
      <Routes>
        <Route path="/" element={<Home isLogin={isLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
     
    </Router>
      
    </>
  )
}

export default App
