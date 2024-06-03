import React, { useContext } from 'react'
import { Button, Box, TableBody, TableCell, TableHead, TableRow, Paper, Table, TableContainer, Container } from '@mui/material'
import gradeContext from '../context/gradeContext'
import Roww from './Roww'

const TableA = () => {
  const context = useContext(gradeContext);
  const { subject, pencil5, pointer2 } = context;
  let a = 0;
  return (
    <>
    {(pencil5!==5 && pencil5!==11)?<Container sx={{ my:7 }}>
    <TableContainer component={Paper} sx={{boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.5)"}}>
      <Table aria-label="simple table" size='small'>
        <TableHead>
          <TableRow>
            <TableCell align='center' sx={{color: "white", bgcolor: '#1976d2', fontWeight: 500}}>No.</TableCell>
            <TableCell align='center' sx={{color: "white", bgcolor: '#1976d2', fontWeight: 500}}>Obtained Marks</TableCell>
            <TableCell align='center' sx={{color: "white", bgcolor: '#1976d2', fontWeight: 500}}>Total Marks</TableCell>
            <TableCell align='center' sx={{color: "white", bgcolor: '#1976d2', fontWeight: 500}}>Average Marks</TableCell>
            <TableCell align='center' sx={{color: "white", bgcolor: '#1976d2', fontWeight: 500}}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(pencil5===0 && subject.tTotalQuiz)?subject.tQuizTotM.map(()=>{
            return <Roww a={a=a+1} key={a}/>
          }):""}
          {pencil5===1 && subject.totalAss && subject.AssTotM.map(()=>{
            return <Roww a={a=a+1} key={a}/>
          })}
          {pencil5===2 && subject.tProjectWeightage && <Roww a={a=a+1} key={a}/> }
          {pencil5===3 && subject.tTotalMid && subject.tMidTotM.map(()=>{
            return <Roww a={a=a+1} key={a}/>
          })}
          {pencil5===4 && subject.tFinalWeightage && <Roww a={a=a+1} key={a}/> }
          {pencil5===6 && subject.lTotalQuiz && subject.lQuizTotM.map(()=>{
            return <Roww a={a=a+1} key={a}/>
          })}
          {pencil5===7 && subject.totalLabs && subject.labsTotM.map(()=>{
            return <Roww a={a=a+1} key={a}/>
          })}
          {pencil5===8 && subject.lProjectWeightage && <Roww a={a=a+1} key={a}/> }
          {pencil5===9 && subject.lTotalMid && subject.lMidTotM.map(()=>{
            return <Roww a={a=a+1} key={a}/>
          })}
          {pencil5===10 && subject.lFinalWeightage && <Roww a={a=a+1} key={a}/> }
        </TableBody>
      </Table>
    </TableContainer>
    </Container>:""}
    {!subject.tTotalQuiz && <Box sx={{display:'flex', justifyContent:'center'}}><Button id='g' color='primary' variant='contained' onClick={()=>{document.getElementById('g').style.display='none'; pointer2();}}>Click here!</Button></Box>}
    </>
  )
}

export default TableA