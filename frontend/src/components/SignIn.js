import { Card, CardContent, Grid, Tab, Tabs, AppBar, TextField, InputAdornment, Button, Divider, Box, Typography, CircularProgress } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import { SnackbarProvider, useSnackbar } from 'notistack';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { RiUserFill } from "react-icons/ri";
import LockIcon from '@mui/icons-material/Lock';

const Formm = () => {
  const { enqueueSnackbar } = useSnackbar();
    const [bol, setBol] = useState(false);
    const [loading, setLoading] = useState(0);
    const navigate = useNavigate();
    const host = 'http://localhost:4000/';
    const handleSubmit = async(e) =>{
      e.preventDefault();
      let userr = {};
      userr.username = document.getElementById('user').value;
      userr.password=document.getElementById('pass').value;
      const response = await fetch(`${host}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userr)
      });
      const json = await response.json();      
      if (json.success) {
        localStorage.setItem('token', json.auth);
        loading?setLoading(0):setLoading(1);
        const variant = 'success'
        enqueueSnackbar('Login Successful!', {variant})
        setTimeout(()=>{
          navigate('/home');
        }, 1500)
      } else {
        const variant = 'error'
        enqueueSnackbar('Login using valid credentials!', {variant})
      }
    }
  return (
    <>
    <AppBar position='static' color='inherit'>
        <Tabs value={0} variant='fullWidth' textColor='primary' indicatorColor='primary'>
            <Tab label='Login'/>
        </Tabs>
    </AppBar>
    <React.Fragment>
    <Container sx={{my:6, display: 'flex', alignItems:'center', justifyContent:'center'}}>
      <Card sx={{ boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.5)", maxWidth: 400 }}>
        <CardContent>
          <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
                    <Grid xs={12} sm={12} item sx={{mt: 4}}>
                        <TextField
                        label="Username"
                        id="user"
                        variant='outlined'
                        type='text'
                        fullWidth
                        required
                        InputProps={{
                          startAdornment: <InputAdornment sx={{cursor: 'pointer'}} position="start" id='pw'><RiUserFill/></InputAdornment>,
                        }}
                        />  
                    </Grid>
                    <Grid xs={12} sm={12} item sx={{mt: 1}}>
                        <TextField
                        label="Password"
                        id="pass"
                        variant='outlined'
                        type={!bol?'password':'text'}
                        InputProps={{
                            startAdornment: <InputAdornment sx={{cursor: 'pointer'}} position="start"><LockIcon/></InputAdornment>,
                            endAdornment: <InputAdornment sx={{cursor: 'pointer'}}position="end" onClick={()=>{setBol(bol?false:true);}}>{bol?<VisibilityOffIcon/>:<VisibilityIcon/>}</InputAdornment>,
                          }}
                        fullWidth
                        required
                        />  
                    </Grid>
                    <Grid xs={12} sm={12} item sx={{mt: 4}}>
                      <Button fullWidth variant='contained' type='submit' disabled={Boolean(loading)}>{!loading?<>Login</>:<><CircularProgress size={20} sx={{color:'inherit', mr: 2}}/>Loading...</>}</Button>
                    </Grid>
          </Grid>
          </form>
          <Divider sx={{my:2}}/>
          <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}><Typography color='text.secondary'>Don't have an account? <Button onClick={()=>{navigate('/signup')}}>Sign Up</Button></Typography></Box>
        </CardContent>
      </Card>
    </Container>
    </React.Fragment>
    </>
  )
}

export default function SignIn() {
    return (
      <SnackbarProvider maxSnack={3}>
        <Formm />
      </SnackbarProvider>
    );
}  