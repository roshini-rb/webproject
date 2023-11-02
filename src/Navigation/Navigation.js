import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
function Navigation() {
  return (
    <AppBar position="static" className="toolbar">
      <Toolbar>
        <Typography variant="h6" component="div">
          TAJ RESORT
        </Typography>
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contacts">Contact</Link>
            </li>
            <li>
              <Link to="/aboutus">aboutus</Link>
            </li>
            <li>
              <Link to="/menubar">menubar</Link>
            </li>
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;