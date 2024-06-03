import React, { useContext } from 'react'
import { TableBody, TableCell, TableHead, TableRow, Paper, Table, TableContainer, Container } from '@mui/material'
import gradeContext from '../context/gradeContext'

const TableB = () => {
  const context = useContext(gradeContext);
  const { subject, pencil5, arrayCount, arrayPercentage } = context;
  return (
    <>
    {pencil5===5 && <Container sx={{ my:7 }}>
    <TableContainer component={Paper} sx={{boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.5)"}}>
      <Table aria-label="simple table" size='small'>
        <TableHead>
          <TableRow>
            <TableCell align='center' sx={{color: "white", bgcolor: '#1976d2', fontWeight: 500}}></TableCell>
            <TableCell align='center' sx={{color: "white", bgcolor: '#1976d2', fontWeight: 500}}>Total Percentage</TableCell>
            <TableCell align='center' sx={{color: "white", bgcolor: '#1976d2', fontWeight: 500}}>Completed Percentage</TableCell>
            <TableCell align='center' sx={{color: "white", bgcolor: '#1976d2', fontWeight: 500}}>Obtained Percentage</TableCell>
            <TableCell align='center' sx={{color: "white", bgcolor: '#1976d2', fontWeight: 500}}>Average Percentage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subject.tTotalQuiz?<TableRow>
            <TableCell align='center' sx={{fontWeight: 700}}>Quizzes</TableCell>
            <TableCell align='center'>{subject.tQuizWeightage}</TableCell>
            <TableCell align='center'>{((arrayCount(subject.tQuizTotM))*((subject.tQuizWeightage)/(subject.tTotalQuiz?subject.tTotalQuiz:1))).toFixed(2)}</TableCell>
            <TableCell align='center'>{(arrayPercentage(subject.tQuizObtM, subject.tQuizTotM)*(arrayCount(subject.tQuizTotM))*((subject.tQuizWeightage)/(subject.tTotalQuiz?subject.tTotalQuiz:1))/100).toFixed(2)}</TableCell>
            <TableCell align='center'>{(arrayPercentage(subject.tQuizAvgM, subject.tQuizTotM)*(arrayCount(subject.tQuizTotM))*((subject.tQuizWeightage)/(subject.tTotalQuiz))/100).toFixed(2)}</TableCell>
          </TableRow>:""}
          {subject.totalAss?<TableRow>
            <TableCell align='center' sx={{fontWeight: 700}}>Assignments</TableCell>
            <TableCell align='center'>{subject.AssWeightage}</TableCell>
            <TableCell align='center'>{((arrayCount(subject.AssTotM))*((subject.AssWeightage)/(subject.totalAss))).toFixed(2)}</TableCell>
            <TableCell align='center'>{(arrayPercentage(subject.AssObtM, subject.AssTotM)*(arrayCount(subject.AssTotM))*((subject.AssWeightage)/(subject.totalAss))/100).toFixed(2)}</TableCell>
            <TableCell align='center'>{(arrayPercentage(subject.AssAvgM, subject.AssTotM)*(arrayCount(subject.AssTotM))*((subject.AssWeightage)/(subject.totalAss))/100).toFixed(2)}</TableCell>
          </TableRow>:""}
          {subject.tProjectWeightage?<TableRow>
            <TableCell align='center' sx={{fontWeight: 700}}>Project</TableCell>
            <TableCell align='center'>{subject.tProjectWeightage}</TableCell>
            <TableCell align='center'>{(subject.tProjectTotM?subject.tProjectWeightage:0).toFixed(2)}</TableCell>
            <TableCell align='center'>{(subject.tProjectTotM?(((subject.tProjectObtM)/(subject.tProjectTotM))*100*(subject.tProjectWeightage/100)):0).toFixed(2)}</TableCell>
            <TableCell align='center'>{(subject.tProjectTotM?(((subject.tProjectAvgM)/(subject.tProjectTotM))*100*(subject.tProjectWeightage/100)):0).toFixed(2)}</TableCell>
          </TableRow>:""}
          {subject.tTotalMid?<TableRow>
            <TableCell align='center' sx={{fontWeight: 700}}>Mids</TableCell>
            <TableCell align='center'>{subject.tMidWeightage}</TableCell>
            <TableCell align='center'>{((arrayCount(subject.tMidTotM))*((subject.tMidWeightage)/(subject.tTotalMid))).toFixed(2)}</TableCell>
            <TableCell align='center'>{(arrayPercentage(subject.tMidObtM, subject.tMidTotM)*(arrayCount(subject.tMidTotM))*((subject.tMidWeightage)/(subject.tTotalMid))/100).toFixed(2)}</TableCell>
            <TableCell align='center'>{(arrayPercentage(subject.tMidAvgM, subject.tMidTotM)*(arrayCount(subject.tMidTotM))*((subject.tMidWeightage)/(subject.tTotalMid))/100).toFixed(2)}</TableCell>
          </TableRow>:""}
          {subject.tFinalWeightage?<TableRow>
            <TableCell align='center' sx={{fontWeight: 700}}>Final</TableCell>
            <TableCell align='center'>{subject.tFinalWeightage}</TableCell>
            <TableCell align='center'>{(subject.tFinalTotM?subject.tFinalWeightage:0).toFixed(2)}</TableCell>
            <TableCell align='center'>{(subject.tFinalTotM?(((subject.tFinalObtM)/(subject.tFinalTotM))*100*(subject.tFinalWeightage/100)):0).toFixed(2)}</TableCell>
            <TableCell align='center'>{(subject.tFinalTotM?(((subject.tFinalAvgM)/(subject.tFinalTotM))*100*(subject.tFinalWeightage/100)):0).toFixed(2)}</TableCell>
          </TableRow>:""}
          {subject.theoryCR?<TableRow>
            <TableCell align='center' sx={{fontWeight: 700}}>Overall</TableCell>
            <TableCell align='center'>{subject.AssWeightage + subject.tQuizWeightage + subject.tProjectWeightage + subject.tMidWeightage + subject.tFinalWeightage}</TableCell>
            <TableCell align='center'>{(((arrayCount(subject.tQuizTotM))*((subject.tQuizWeightage)/(parseInt(subject.tTotalQuiz)?subject.tTotalQuiz:1))) + ((arrayCount(subject.AssTotM))*((subject.AssWeightage)/(parseInt(subject.totalAss)?subject.totalAss:1))) + (subject.tProjectTotM?subject.tProjectWeightage:0) + ((arrayCount(subject.tMidTotM))*((subject.tMidWeightage)/(parseInt(subject.tTotalMid)?subject.tTotalMid:1))) + (parseInt(subject.tFinalTotM)?subject.tFinalWeightage:0)).toFixed(2)}</TableCell>
            <TableCell align='center'>{((arrayPercentage(subject.tQuizObtM, subject.tQuizTotM)*(arrayCount(subject.tQuizTotM))*((subject.tQuizWeightage)/(subject.tTotalQuiz?subject.tTotalQuiz:1))/100) + (arrayPercentage(subject.AssObtM, subject.AssTotM)*(arrayCount(subject.AssTotM))*((subject.AssWeightage)/(subject.totalAss?subject.totalAss:1))/100) + (subject.tProjectTotM?(((subject.tProjectObtM)/(subject.tProjectTotM?subject.tProjectTotM:1))*100*(subject.tProjectWeightage/100)):0) + (arrayPercentage(subject.tMidObtM, subject.tMidTotM)*(arrayCount(subject.tMidTotM))*((subject.tMidWeightage)/(subject.tTotalMid?subject.tTotalMid:1))/100) + (subject.tFinalTotM?(((subject.tFinalObtM)/(subject.tFinalTotM?subject.tFinalTotM:1))*100*(subject.tFinalWeightage/100)):0)).toFixed(2)}</TableCell>
            <TableCell align='center'>{((arrayPercentage(subject.tQuizAvgM, subject.tQuizTotM)*(arrayCount(subject.tQuizTotM))*((subject.tQuizWeightage)/(subject.tTotalQuiz?subject.tTotalQuiz:1))/100) + (arrayPercentage(subject.AssAvgM, subject.AssTotM)*(arrayCount(subject.AssTotM))*((subject.AssWeightage)/(subject.totalAss?subject.totalAss:1))/100) + (subject.tProjectTotM?(((subject.tProjectAvgM)/(subject.tProjectTotM?subject.tProjectTotM:1))*100*(subject.tProjectWeightage/100)):0) + (arrayPercentage(subject.tMidAvgM, subject.tMidTotM)*(arrayCount(subject.tMidTotM))*((subject.tMidWeightage)/(subject.tTotalMid?subject.tTotalMid:1))/100) + (subject.tFinalTotM?(((subject.tFinalAvgM)/(subject.tFinalTotM?subject.tFinalTotM:1))*100*(subject.tFinalWeightage/100)):0)).toFixed(2)}</TableCell>
          </TableRow>:""}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>}
    </>
  )
}

export default TableB