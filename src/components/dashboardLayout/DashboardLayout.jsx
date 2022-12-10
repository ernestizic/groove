import React from 'react'
import Sidebar from '../sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { MainContainer } from './DashboardLayout.styled'
import Header from '../header/Header';
import MobileNav from '../mobileNav/MobileNav';

const DashboardLayout = () => {
  return (
    <div>
        <Sidebar />
        <MainContainer>
            <Header />
            <Outlet />
            <MobileNav />
        </MainContainer>
    </div>
  )
}

export default DashboardLayout