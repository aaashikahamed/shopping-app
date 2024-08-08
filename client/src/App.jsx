import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import Header from "./components/Header"
import FooterSec from "./components/Footer"
import SignUp from "./pages/SignUp"
import Products from "./pages/Products"
import Product from "./pages/Product"

function App() {


  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={< Products/>} />
        <Route path="/product" element={< Product/>} />
      </Routes>
      <FooterSec/>
    </BrowserRouter>
  )
}

export default App
