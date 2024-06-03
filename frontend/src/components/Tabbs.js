import React, { useContext } from 'react'
import { AppBar, Tabs, Tab } from '@mui/material'
import gradeContext from '../context/gradeContext';

const Tabbs = () => {
    const context = useContext(gradeContext);
    const { subject, width, value1, handleChange1, value2, handleChange2, setpencil5 } = context;
  return (
    <>
        <AppBar position='static' color='inherit'>
            <Tabs value={value1}  onChange={handleChange1} variant='fullWidth' textColor='primary' indicatorColor='primary'>
                {subject.theoryCR && <Tab label='Lecture'/>}
                {subject.labCR && <Tab label='Lab'/>}
            </Tabs>
        </AppBar>
        <AppBar position='static' color='inherit'>
            <Tabs value={value2}  onChange={handleChange2} variant={width<600?'scrollable':'fullWidth'} textColor='primary' indicatorColor='primary' scrollButtons={width<600} allowScrollButtonsMobile={width<600}>
                {subject.theoryCR && subject.tTotalQuiz && value1===0 && <Tab label='Quizzes' onClick={()=>{setpencil5(0);}}/>}
                {subject.theoryCR && subject.totalAss && value1===0 && <Tab label='Assignments' onClick={()=>{setpencil5(1);}}/>}
                {subject.theoryCR && subject.tProjectWeightage && value1===0 && <Tab label='Project' onClick={()=>{setpencil5(2);}}/>}
                {subject.theoryCR && subject.tTotalMid && value1===0 && <Tab label='Mids' onClick={()=>{setpencil5(3);}}/>}
                {subject.theoryCR && subject.tFinalWeightage && value1===0 && <Tab label='Final' onClick={()=>{setpencil5(4);}}/>}
                {subject.theoryCR && value1===0 && <Tab label='Overall' onClick={()=>{setpencil5(5);}}/>}
                {!subject.theoryCR && subject.lTotalQuiz && value1===0 && <Tab label='Quizzes' onClick={()=>{setpencil5(6);}}/>}
                {!subject.theoryCR && subject.totalLabs && value1===0 && <Tab label='Labs' onClick={()=>{setpencil5(7);}}/>}
                {!subject.theoryCR && subject.lProjectWeightage && value1===0 && <Tab label='Project' onClick={()=>{setpencil5(8);}}/>}
                {!subject.theoryCR && subject.lTotalMid && value1===0 && <Tab label='Mids' onClick={()=>{setpencil5(9);}}/>}
                {!subject.theoryCR && subject.lFinalWeightage && value1===0 && <Tab label='Final' onClick={()=>{setpencil5(10);}}/>}
                {!subject.theoryCR && value1===0 && <Tab label='Overall' onClick={()=>{setpencil5(11);}}/>}
                {subject.lTotalQuiz && value1===1 && <Tab label='Quizzes' onClick={()=>{setpencil5(6);}}/>}
                {subject.totalLabs && value1===1 && <Tab label='Labs' onClick={()=>{setpencil5(7);}}/>}
                {subject.lProjectWeightage && value1===1 && <Tab label='Project' onClick={()=>{setpencil5(8);}}/>}
                {subject.lTotalMid && value1===1 && <Tab label='Mids' onClick={()=>{setpencil5(9);}}/>}
                {subject.lFinalWeightage && value1===1 && <Tab label='Final' onClick={()=>{setpencil5(10);}}/>}
                {subject.labCR && value1===1 && <Tab label='Overall' onClick={()=>{setpencil5(11);}}/>}
            </Tabs>
        </AppBar>
    </>
  )
}

export default Tabbs