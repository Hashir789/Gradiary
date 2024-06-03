import React from 'react'
import { FaUserGraduate } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { AppBar, Typography, Box, Tooltip } from '@mui/material'
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menuu from '../components/Menuu'

const AppBarr = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
    <AppBar color='primary' position='sticky' sx={{display: "flex", flexDirection: "row", p: 1, justifyContent: 'space-between', alignItems: 'center'}}>
        <Box>
          <Link style={{textDecoration: 'none'}} to={(location.pathname==='/login' || location.pathname==='/signup' || location.pathname==='/')?'/':'/home'}>
          <Tooltip title='Gradiary - Excel your grades'>
          <Box sx={{ mx: 1, color:'white', display: "flex", alignItems: 'center', justifyContent: "center", cursor: 'pointer', flexDirection: 'row'}}>
                <FaUserGraduate size={20}/>
                <Typography variant='h6' color='white' sx={{ml:1}}>Gradiary</Typography>
          </Box>
          </Tooltip>
          </Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Menuu/>
        <Tooltip title='Login'>
        <Box sx={{ display: `${(location.pathname==='/login' || location.pathname==='/signup' || location.pathname==='/')?"flex":"none"}`, alignItems: 'center', justifyContent: 'center', mr: 1, mt: 0.5, mb:0.5, cursor: 'pointer'}} onClick={()=>{navigate('/login')}}><BiLogIn size={30}/></Box>
        </Tooltip>
        </Box>
    </AppBar>
    </>
  )
}

export default AppBarr