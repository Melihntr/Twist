import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import { useState } from "react"
import Signup from "./pages/Signup/Signup";

function App() {
  const [isLogin,setIsLogin] = useState(false);

  const handleUserLogin = ()=>{
    setIsLogin(true)
  }
  

  return (
    <>

    <Router>
      <Routes>
        <Route path="/" element={<Home isLogin={isLogin} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

    </Router>
      
    </>
  )
}

export default App
