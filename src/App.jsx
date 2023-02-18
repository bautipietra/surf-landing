import { Route, Routes } from "react-router-dom"
import Footer from "./pages/Footer/Footer"
import Nav from "./pages/HeaderUI/Nav"
import Home from "./pages/Home/Home"

function App() {
  return (
    <div className="w-full grid items-center min-h-screen ">
      <Nav></Nav>
      <Routes>
        <Route path="" element={<Home></Home>} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
