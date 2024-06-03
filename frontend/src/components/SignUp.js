import { Card, CardContent, Grid, Tab, Tabs, AppBar, TextField, InputAdornment, Button, CircularProgress } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState, useContext } from 'react'
import { SnackbarProvider, useSnackbar } from 'notistack';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { RiUserFill } from "react-icons/ri";
import LockIcon from '@mui/icons-material/Lock';
import gradeContext from '../context/gradeContext';

const Formm = () => {
    const context = useContext(gradeContext);
    const { trimm } = context;
    const { enqueueSnackbar } = useSnackbar();
    const [loadingg, setloadingg] = useState(0);
    const [bol, setBol] = useState(false);
    const [bol2, setBol2] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async(e) =>{
      e.preventDefault();
      let v = 0;
      const w = document.getElementById("name").value;
      const x = document.getElementById("nUser").value;
      const y = document.getElementById("nPass").value;
      const z = document.getElementById("nCPass").value;
      if (y!==z && v===0) {
        const variant = 'error'
        enqueueSnackbar('Confirm Password doesn\'t match!', {variant})
        v++;
      }
      if (trimm(x)===0 && v===0) { 
        const variant = 'error'
        enqueueSnackbar('Username should not contain spaces!', {variant})
        v++;
      }
      if (v===0) {
        let newUser = {};
        newUser.name = w;
        newUser.username = x;
        newUser.password = y;
        const response = await fetch("http://localhost:4000/api/auth/createuser", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
        });
        const json = await response.json();
        if (json.success) {
          localStorage.setItem('token', json.auth);
          loadingg?setloadingg(0):setloadingg(1);
          const variant = 'success'
          enqueueSnackbar('Account created successfully!', {variant})
          setTimeout(()=>{
            navigate('/home');
          }, 1500)
        } else {
          const variant = 'error'
          enqueueSnackbar('The entered username already exists!', {variant})
        }
      }
    }
  return (
    <>
    <AppBar position='static' color='inherit'>
        <Tabs value={0} variant='fullWidth' textColor='primary' indicatorColor='primary'>
            <Tab label='Sign Up'/>
        </Tabs>
    </AppBar>
    <React.Fragment>
    <Container sx={{my: {xs: 6, sm: 3}, display: 'flex', alignItems:'center', justifyContent:'center'}}>
      <Card sx={{ boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.5)", maxWidth: 400 }}>
        <CardContent>
          <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
          <Grid xs={12} sm={12} item sx={{mt: 2}}>
                        <TextField
                        label="Name"
                        id='name'
                        variant='outlined'
                        type='text'
                        InputProps={{
                          startAdornment: <InputAdornment sx={{cursor: 'pointer'}} position="start"><RiUserFill/></InputAdornment>,
                        }}
                        inputProps={{ maxLength: 20, minLength:3 }}
                        fullWidth
                        required
                        />  
                    </Grid>
                    <Grid xs={12} sm={12} item sx={{mt: 1}}>
                        <TextField
                        label="Username"
                        id='nUser'
                        variant='outlined'
                        type='text'
                        InputProps={{
                          startAdornment: <InputAdornment sx={{cursor: 'pointer'}} position="start"><RiUserFill/></InputAdornment>,
                        }}
                        inputProps={{ maxLength: 20, minLength:3 }}
                        fullWidth
                        required
                        />  
                    </Grid>
                    <Grid xs={12} sm={12} item sx={{mt: 1}}>
                        <TextField
                        label="Password"
                        variant='outlined'
                        id='nPass'
                        type={!bol?'password':'text'}
                        InputProps={{
                          startAdornment: <InputAdornment sx={{cursor: 'pointer'}} position="start"><LockIcon/></InputAdornment>,
                          endAdornment: <InputAdornment sx={{cursor: 'pointer'}} position="end" onClick={()=>{setBol(bol?false:true);}}>{bol?<VisibilityOffIcon/>:<VisibilityIcon/>}</InputAdornment>,
                        }}
                        inputProps={{ minLength:8 }}
                        fullWidth
                        required
                        />  
                    </Grid>
                    <Grid xs={12} sm={12} item sx={{mt: 1}}>
                        <TextField
                        label="Confirm Password"
                        id='nCPass'
                        variant='outlined'
                        type={!bol2?'password':'text'}
                        InputProps={{
                          startAdornment: <InputAdornment sx={{cursor: 'pointer'}} position="start"><LockIcon/></InputAdornment>,
                          endAdornment: <InputAdornment sx={{cursor: 'pointer'}}position="end" onClick={()=>{setBol2(bol2?false:true);}}>{bol2?<VisibilityOffIcon/>:<VisibilityIcon/>}</InputAdornment>,
                        }}
                        inputProps={{ minLength:8 }}
                        fullWidth
                        required
                        />  
                    </Grid>
                    <Grid xs={12} sm={12} item sx={{mt: 2}}>
                    <Button fullWidth variant='contained' type='submit' disabled={Boolean(loadingg)}>{!loadingg?<>Signup</>:<><CircularProgress size={20} sx={{color:'inherit', mr: 2}}/>Loading...</>}</Button>
                    </Grid>
          </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
    </React.Fragment>
    </>
  )
}

export default function SignUp() {
    return (
      <SnackbarProvider maxSnack={3}>
        <Formm />
      </SnackbarProvider>
    );
}  