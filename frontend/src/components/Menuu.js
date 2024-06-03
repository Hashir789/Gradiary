import * as React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { Tooltip, IconButton, MenuItem, Menu, Box, Typography, Divider, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import gradeContext from '../context/gradeContext';
import { useContext } from 'react';
export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const location = useLocation();
  const context = useContext(gradeContext);
  const { userInfo, editDate } = context;
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ display: `${!(location.pathname==='/login' || location.pathname==='/signup' || location.pathname==='/')?"flex":"none"}`, alignItems: 'center', textAlign: 'center' }}>
          <Tooltip title='User Info'>
          <IconButton
            onClick={handleClickMenu}
            size="small"
            sx={{ color: 'white', mr: 1 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            >
            <FaUserCircle size={30}/>
          </IconButton>
          </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleCloseMenu}
        onClick={handleCloseMenu}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            borderRadius: 2,
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
        <MenuItem sx={{'&:hover':{bgcolor:'white'}}}>
          <Box sx={{display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Box sx={{width: 75, bgcolor: '#1976d2', color: 'white', height: 75, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', my:1}}><Typography align='center' variant='h4' sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{userInfo[0]?userInfo[0].charAt(0).toUpperCase():""}</Typography></Box>
            <Typography sx={{fontWeight: 500}}>{userInfo[0]!==''?userInfo[0]:""}</Typography>
            <Typography sx={{color: 'text.secondary'}}>{userInfo[1]!==''?userInfo[1]:""}</Typography>
          </Box>
        </MenuItem>
        <Divider/>
        <MenuItem sx={{'&:hover':{bgcolor:'white'}}}>
          <Button variant='contained' fullWidth onClick={()=>{localStorage.removeItem('token'); navigate('/')}}>Log out</Button>
        </MenuItem>
        <Divider/>
        <MenuItem sx={{color: 'text.secondary', fontSize: 12, '&:hover':{bgcolor:'white'}}}>
          Created on {userInfo[2]?editDate(userInfo[2]):""}
        </MenuItem>
      </Menu>
    </>
  );
}
