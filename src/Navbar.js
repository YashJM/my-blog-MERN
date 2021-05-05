import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './Navbar.css'

function Navbar() {
  return (
    <div style={{paddingBottom: "20px"}}>
      <AppBar position="static">
        <Toolbar className='toolbar'>
          <Typography variant="h6" >
            <Link className='links' to="/">Home</Link>
          </Typography>
          <Typography variant="h6" >
            <Link className='links' to="/About">About</Link>
          </Typography>
          <Typography variant="h6" >
            <Link className='links' to="/ArticlesPage">Articles</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
