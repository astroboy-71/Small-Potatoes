import React, { useEffect, useState , Fragment} from 'react'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import Header from "./Components/Layout/Header"
import Footer from "./Components/Layout/Footer"
import GoTop from './Components/Layout/GoTop'

function App() {

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
      <GoTop />
    </React.Fragment>
  )
}

export default App
