import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/home"
import House from "../pages/house"
import Footer from "../components/layouts/Footer/Footer"
import SignUp from "../pages/SignUp/SignUp"
import SendCode from "../pages/SendCode/SendCode"

const RouterControl = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/house" element={<House />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/sendCode/:userId' element={<SendCode />} />
        <Route path="*" element={<Navigate to="/signup" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default RouterControl