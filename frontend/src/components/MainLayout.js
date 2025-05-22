import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Settings, AccountCircle } from '@mui/icons-material';
import SideBar from './SideBar';
import Dashboard from '../pages/Dashboard';
import Inventory from '../pages/Inventory';
import Orders from '../pages/Orders';

function MainLayout(props) {
  const [activePage, setActivePage] = useState('dashboard');
  const [SideBarOpen,setSideBarOpen] = useState(true)
  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'inventory':
        return <Inventory />;
      case 'orders':
        return <Orders />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Box display="flex" height="100vh" sx={{ gap: 2 }}>
      
      <Box sx={{ width: SideBarOpen ? 220 : 60 }}>
        <SideBar 
        Navigate={setActivePage} 
        activePage={activePage} 
        Menuicon = {(e)=>{
          setSideBarOpen(e)
        }}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          backgroundColor: '#fafafa',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            p: 2,
            borderBottom: '1px solid #ddd',
            backgroundColor: '#fff',
            zIndex: 1,
          }}
        >
          <IconButton color="primary" sx={{ mr: 1 }}>
            <Settings />
          </IconButton>
          <IconButton color="primary">
            <AccountCircle />
          </IconButton>
          <IconButton color="primary">
            <LogoutIcon onClick ={()=>props.LogOut(false)} />
          </IconButton>
        </Box>

        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            p: 2,
          }}
        >
          {renderPage()}
        </Box>
      </Box>
    </Box>
  );
}

export default MainLayout;