import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import {Outlet} from 'react-router'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'


function Layout() {
  return (
    <>
    <Navbar/>
    <ScrollToTop/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout