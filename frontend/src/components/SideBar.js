import React, { useState } from 'react';
import { List, ListItem, ListItemText, IconButton, Tooltip } from '@mui/material';
import { Dashboard, Inventory, ShoppingCart, Menu } from '@mui/icons-material';
import '../styles/Sidebar.css';

function Sidebar(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggle = () => {
    const updatedState = !isSidebarOpen;
    setIsSidebarOpen(updatedState);
    props.Menuicon(updatedState);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'expanded' : 'collapsed'}`}>
      <div className="sidebar-header">
        {isSidebarOpen && <h3>Pharmacy</h3>}
        <IconButton color="primary" onClick={handleToggle}>
          <Menu />
        </IconButton>
      </div>

      <List>
        <ListItem
          button
          className={props.activePage === 'dashboard' ? 'active' : ''}
          onClick={() => props.Navigate('dashboard')}
        >
          <Tooltip title="Dashboard" placement="right" disableHoverListener={isSidebarOpen}>
            <Dashboard />
          </Tooltip>
          {isSidebarOpen && <ListItemText primary="Dashboard" />}
        </ListItem>

        <ListItem
          button
          className={props.activePage === 'inventory' ? 'active' : ''}
          onClick={() => props.Navigate('inventory')}
        >
          <Tooltip title="Inventory" placement="right" disableHoverListener={isSidebarOpen}>
            <Inventory />
          </Tooltip>
          {isSidebarOpen && <ListItemText primary="Inventory" />}
        </ListItem>

        <ListItem
          button
          className={props.activePage === 'orders' ? 'active' : ''}
          onClick={() => props.Navigate('orders')}
        >
          <Tooltip title="Orders" placement="right" disableHoverListener={isSidebarOpen}>
            <ShoppingCart />
          </Tooltip>
          {isSidebarOpen && <ListItemText primary="Orders" />}
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
