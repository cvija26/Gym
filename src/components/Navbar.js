import React from 'react';
import {NavLink} from 'react-router-dom';
import {Stack} from '@mui/material';
import '../App.css'

import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  const NavLinkStyle = ({isActive}) => {
    return {
      borderBottom: isActive ? '3px solid #FF2625' : 'none'
    }
  }
  return (
    <Stack direction='row'
    justifyContent='space-around' sx={{gap: {sm: '122px', xs:'40px'}, 
    mt: { sm: '32px', xs:'20px'}, justifyContent: 'none'}} px='20px'>
      <NavLink to='/'>
        <img src={Logo} style={{width: '48px', height: '48px', margin: '0 20px'}} />
      </NavLink>
        <Stack
        direction='row'
        gap='40px'
        fontSize='24px'
        alignItems='flex-end'>
          <NavLink className='nav-link' to='/' style={NavLinkStyle}>Home</NavLink>
          <NavLink className='nav-link' to='/exercises' style={NavLinkStyle}>Exercises</NavLink>
        </Stack>
    </Stack>
    
  )
}

export default Navbar