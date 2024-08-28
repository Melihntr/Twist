import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import { useState } from "react"

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
      </Routes>

    </Router>
      
    </>
  )
}

export default App
