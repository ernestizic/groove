import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { MainContainer } from './DashboardLayout.styled'

const DashboardLayout = () => {
  return (
    <div>
        <Sidebar />
        <MainContainer>
            <h1>THis is the main container</h1>
        </MainContainer>
    </div>
  )
}

export default DashboardLayout