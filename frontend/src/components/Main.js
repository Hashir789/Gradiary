import { Box, Card, CardContent, Container, Divider, Grid, Typography,Tooltip, Button, ButtonGroup } from '@mui/material'
import React, {useContext} from 'react'
import gradeContext from '../context/gradeContext'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Hashir from './Hashir.jpg'
const Main = () => {
  const context = useContext(gradeContext);
  const { width } = context;
  return (
    <>
    <Grid container spacing={2} direction={width>600?'row-reverse':'column'}>
      <Grid item xs={12} sm={4} display='flex' alignItems='center' justifyContent={{xs: 'center', sm: 'center'}} sx={{mt: {xs:2, sm: 2}, mb: {xs: 2, sm:0}}}>
        <Box>
          <Card sx={{boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.5)", m:2}}>
          <CardContent sx={{mx: 3}}>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', my: 1}}><img src={Hashir} alt="Hashir" style={{width: 150, height: 150, borderRadius: 100}}/></Box>
            <Typography variant='h6' mt={1} sx={{color:'#1565c0'}} align='center'>Muhammad Hashir Malik</Typography>
            <Divider sx={{my: 1}}/>
            <Typography mt={1} sx={{color:'text.secondary', fontWeight: 700}} align='center'>MERN Stack Developer</Typography>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', my:1}}><Box sx={{display: 'flex', flexDirection:'row'}}>
            <Tooltip title='LinkedIn'><a href='https://www.linkedin.com/in/i-hashir/' target="_blank" rel="noreferrer"><Box sx={{display: 'flex', alignItems:'center', justifyContent: 'center', color:'text.secondary', '&:hover': {color: 'black', cursor: 'pointer' }}}><AiFillLinkedin size={30}/></Box></a></Tooltip>
            <Tooltip title='GitHub'><a href='https://github.com/Hashirrr' target="_blank" rel="noreferrer"><Box sx={{display: 'flex', alignItems:'center', justifyContent: 'center', color:'text.secondary', mx:2, '&:hover': {color: 'black', cursor: 'pointer' }}}><AiFillGithub size={29}/></Box></a></Tooltip>
            <Tooltip title='Instagram'><a href='https://www.instagram.com/m_hashir_malik/' target="_blank" rel="noreferrer"><Box sx={{display: 'flex', alignItems:'center', justifyContent: 'center', color:'text.secondary', '&:hover': {color: 'black', cursor: 'pointer' }}}><AiFillInstagram size={30}/></Box></a></Tooltip>
            </Box>
          </Box>
          </CardContent>
        </Card>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Container align='justify' sx={{textIndent: 25, mt: {xs:0, sm: 7}, ml:{xs:0, sm:4}}}>
        Lack of knowledge about where you stand in class might result in unpredictably low grades, while making you feel helpless and hopeless. Therefore, if you have ever encountered this problem, let us introduce you to it's solution, i.e.
        </Container>
        <Container align='center' sx={{pointer: 'cursor', display:'flex', alignItems: 'center', justifyContent:'center', color: '#1976d2'}}>
          <FaUserGraduate size={60}/>
          <Typography variant='h2' sx={{pointer:'cursor', display:'flex', alignItems: 'center', justifyContent:'center', fontWeight: 500, my:3, ml:1}}>Gradiary</Typography>
        </Container>
        <Container align='justify' sx={{textIndent: 25, mt: {xs:0, sm: 0}, ml:{xs:0, sm:4}}}>
        Gradiary is a project by Muhammad Hashir Malik (Computer Engineering DE-42), a student at the National University of Science and Technology (NUST) who, with the goal of assisting students in obtaining the best grades without getting demotivated, created this web app for university students.
        </Container>
        <Container align='justify' sx={{textIndent: 25, ml:{xs:0, sm:4}, mt:2}}>
        Gradiary, which combines the words 'Grade' & 'Diary', serves as the perfect diary of grades for students who can update the app daily with their academic progress. This app will help the students see where they stand in the class. It can be a great source of motivation for hard working students and a warning for those who perform below average in the class as they will regularly know where they stand in the class, and encourage them to work as hard as they need to, in order to succeed.        
        </Container>
        <Container align='justify' sx={{textIndent: 25, mt:2, mb:3, ml:{xs:0, sm:4}}}>
        So why are you still waiting? Create a free Gradiary user account to start improving your grades right away.
        </Container>
        <Container align='center' sx={{ mb:5, mt: 4, ml:{xs:0, sm:4}}}>
          <ButtonGroup>
          <Button variant='contained'><a target='_blank' href='https://youtu.be/XWX1uSiRQok' rel="noreferrer" style={{textDecoration: 'none', color:'white'}}>How to use Gradiary</a></Button>
          <Button variant='contained'><Link to='/login' style={{textDecoration: 'none', color: 'white'}}>Get Started</Link></Button>
          </ButtonGroup>
        </Container>
      </Grid>
    </Grid>
    </>
  )
}

export default Main