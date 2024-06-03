import React, { useContext, useState } from 'react'
import { Card, CardContent, Container, Grid, Box, CircularProgress, Typography, Fab, Tooltip } from '@mui/material'
import gradeContext from '../context/gradeContext';
import Buttonn from './Buttonn';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

const MySubjects = () => {
  const context = useContext(gradeContext);
  const { subjectArray, labAvgMarks, theoryAvgMarks, labObtMarks, theoryObtMarks, labTotM, theoryTotM, setValue3, getSubjects, getUser } = context;
  let a = 0;
  const navigate = useNavigate();
  const [b, setB] = useState(0);
  if (b===0) { getSubjects(); getUser(); setB(b+1);};
  return (
    <>
    <Container sx={{my:5}}>
      <Grid container spacing={2}>
        {subjectArray.length > 0 ? subjectArray.map(()=>{ return <Grid xs={12} sm={3} item key={a=a+1}>
          <Card sx={{ boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.5)" }}>
            <CardContent>
              <Box sx={{bgcolor:'#1976d2', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, p: 1, borderRadius: 1, fontStyle: "oblique"}}>{subjectArray[a].subjectName}</Box>
              <Box sx={{display: 'flex', alignItems: 'center', justifyContent:'center', my: 1}}>Completed</Box>
              <Box position='relative' sx={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                <CircularProgress variant="determinate" value={((theoryTotM(a)*(subjectArray[a].theoryCR/(parseInt(subjectArray[a].theoryCR + subjectArray[a].labCR)?(subjectArray[a].theoryCR + subjectArray[a].labCR):1))) + (labTotM(a)*(subjectArray[a].labCR/(parseInt(subjectArray[a].theoryCR + subjectArray[a].labCR)?(subjectArray[a].theoryCR + subjectArray[a].labCR):1))))} />
                <Typography id='full' sx={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9 }} color="text.secondary">{(((theoryTotM(a)*(subjectArray[a].theoryCR/(parseInt(subjectArray[a].theoryCR + subjectArray[a].labCR)?(subjectArray[a].theoryCR + subjectArray[a].labCR):1))) + (labTotM(a)*(subjectArray[a].labCR/(parseInt(subjectArray[a].theoryCR + subjectArray[a].labCR)?(subjectArray[a].theoryCR + subjectArray[a].labCR):1)))).toFixed(2))}%</Typography>
              </Box>
              <Box sx={{display: 'flex', alignItems: 'center', justifyContent:'center', my: 1}}>Obtained</Box>
              <Box position='relative' sx={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                <CircularProgress variant="determinate" value={((theoryObtMarks(a)*(subjectArray[a].theoryCR/(parseInt(subjectArray[a].theoryCR + subjectArray[a].labCR)?(subjectArray[a].theoryCR + subjectArray[a].labCR):1))) + (labObtMarks(a)*(subjectArray[a].labCR/(parseInt(subjectArray[a].theoryCR + subjectArray[a].labCR)?(subjectArray[a].theoryCR + subjectArray[a].labCR):1))))} />
                <Typography sx={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9 }} color="text.secondary">{((theoryObtMarks(a)*(subjectArray[a].theoryCR/(parseInt(subjectArray[a].theoryCR + subjectArray[a].labCR)?(subjectArray[a].theoryCR + subjectArray[a].labCR):1))) + (labObtMarks(a)*(subjectArray[a].labCR/(parseInt(subjectArray[a].theoryCR + subjectArray[a].labCR)?(subjectArray[a].theoryCR + subjectArray[a].labCR):1)))).toFixed(2)}%</Typography>
              </Box>
              <Box sx={{display: 'flex', alignItems: 'center', justifyContent:'center', my: 1}}>Average</Box>
              <Box position='relative' sx={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                <CircularProgress variant="determinate" value={((theoryAvgMarks(a)*(subjectArray[a].theoryCR/(parseInt(subjectArray[a].theoryCR + subjectArray[a].labCR)?(subjectArray[a].theoryCR + subjectArray[a].labCR):1))) + (labAvgMarks(a)*(subjectArray[a].labCR/(parseInt(subjectArray[a].theoryCR + subjectArray[a].labCR)?(subjectArray[a].theoryCR + subjectArray[a].labCR):1))))} />
                <Typography sx={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9 }} color="text.secondary">{((theoryAvgMarks(a)*(subjectArray[a].theoryCR/(parseInt(subjectArray[a].theoryCR + subjectArray[a].labCR)?(subjectArray[a].theoryCR + subjectArray[a].labCR):1))) + (labAvgMarks(a)*(subjectArray[a].labCR/(parseInt(subjectArray[a].theoryCR + subjectArray[a].labCR)?(subjectArray[a].theoryCR + subjectArray[a].labCR):1)))).toFixed(2)}%</Typography>
              </Box>
              <Box sx={{mt: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontStyle: 'normal'}}>
                <Buttonn a={a}/>
              </Box>
            </CardContent>
          </Card>
        </Grid>}):<Container align='center' sx={{display:'flex', alignItems:'center', justifyContent:'center', color:'text.secondary', mt: 25}}>Nothing to show yet. Click on the + button below to add subjects</Container>}
      </Grid>
      <Tooltip title="Add" sx={{position:"fixed", bottom:20, right:{xs:"43%", md:30}}}>
      <Fab color="primary" aria-label="add" position="sticky" onClick={()=>{ setValue3(0); navigate('/subjectiterations')}}>
          <AddIcon />
      </Fab>
      </Tooltip>
    </Container>
    </>
  )
}

export default MySubjects