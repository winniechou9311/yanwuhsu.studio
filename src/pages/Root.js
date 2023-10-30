import React from 'react'
import { Outlet } from 'react-router-dom';
import MainNavbar from 'src/components/MainNavbar';
import Footer from 'src/footer';

const RootLayout = () => {
  return (
    <>
    <MainNavbar />
    <main>
    <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default RootLayout; 