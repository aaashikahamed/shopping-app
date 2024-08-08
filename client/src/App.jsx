import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import Header from "./components/Header"
import FooterSec from "./components/Footer"
import SignUp from "./pages/SignUp"

function App() {


  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <FooterSec/>
    </BrowserRouter>
  )
}

export default App
