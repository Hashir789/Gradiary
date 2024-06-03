import React, { useContext } from 'react'
import { TableBody, TableCell, TableHead, TableRow, Paper, Table, TableContainer, Container } from '@mui/material'
import gradeContext from '../context/gradeContext'

const TableC = () => {
  const context = useContext(gradeContext);
  const { subject, pencil5, arrayCount, arrayPercentage } = context;
  return (
    <>
    {pencil5===11 && <Container sx={{ my:7 }}>
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
          {subject.lTotalQuiz?<TableRow>
            <TableCell align='center' sx={{fontWeight: 700}}>Quizzes</TableCell>
            <TableCell align='center'>{subject.lQuizWeightage}</TableCell>
            <TableCell align='center'>{((arrayCount(subject.lQuizTotM))*((subject.lQuizWeightage)/(subject.lTotalQuiz))).toFixed(2)}</TableCell>
            <TableCell align='center'>{(arrayPercentage(subject.lQuizObtM, subject.lQuizTotM)*(arrayCount(subject.lQuizTotM))*((subject.lQuizWeightage)/(subject.lTotalQuiz))/100).toFixed(2)}</TableCell>
            <TableCell align='center'>{(arrayPercentage(subject.lQuizAvgM, subject.lQuizTotM)*(arrayCount(subject.lQuizTotM))*((subject.lQuizWeightage)/(subject.lTotalQuiz))/100).toFixed(2)}</TableCell>
          </TableRow>:""}
          {subject.totalLabs?<TableRow>
            <TableCell align='center' sx={{fontWeight: 700}}>Labs</TableCell>
            <TableCell align='center'>{subject.labsWeightage}</TableCell>
            <TableCell align='center'>{((arrayCount(subject.labsTotM))*((subject.labsWeightage)/(subject.totalLabs))).toFixed(2)}</TableCell>
            <TableCell align='center'>{(arrayPercentage(subject.labsObtM, subject.labsTotM)*(arrayCount(subject.labsTotM))*((subject.labsWeightage)/(subject.totalLabs))/100).toFixed(2)}</TableCell>
            <TableCell align='center'>{(arrayPercentage(subject.labsAvgM, subject.labsTotM)*(arrayCount(subject.labsTotM))*((subject.labsWeightage)/(subject.totalLabs))/100).toFixed(2)}</TableCell>
          </TableRow>:""}
          {subject.lProjectWeightage?<TableRow>
            <TableCell align='center' sx={{fontWeight: 700}}>Project</TableCell>
            <TableCell align='center'>{subject.lProjectWeightage}</TableCell>
            <TableCell align='center'>{(subject.lProjectTotM?subject.lProjectWeightage:0).toFixed(2)}</TableCell>
            <TableCell align='center'>{(subject.lProjectTotM?(((subject.lProjectObtM)/(subject.lProjectTotM))*100*(subject.lProjectWeightage/100)):0).toFixed(2)}</TableCell>
            <TableCell align='center'>{(subject.lProjectTotM?(((subject.lProjectAvgM)/(subject.lProjectTotM))*100*(subject.lProjectWeightage/100)):0).toFixed(2)}</TableCell>
          </TableRow>:""}
          {subject.lTotalMid?<TableRow>
            <TableCell align='center' sx={{fontWeight: 700}}>Mids</TableCell>
            <TableCell align='center'>{subject.lMidWeightage}</TableCell>
            <TableCell align='center'>{((arrayCount(subject.lMidTotM))*((subject.lMidWeightage)/(subject.lTotalMid))).toFixed(2)}</TableCell>
            <TableCell align='center'>{(arrayPercentage(subject.lMidObtM, subject.lMidTotM)*(arrayCount(subject.lMidTotM))*((subject.lMidWeightage)/(subject.lTotalMid))/100).toFixed(2)}</TableCell>
            <TableCell align='center'>{(arrayPercentage(subject.lMidAvgM, subject.lMidTotM)*(arrayCount(subject.lMidTotM))*((subject.lMidWeightage)/(subject.lTotalMid))/100).toFixed(2)}</TableCell>
          </TableRow>:""}
          {subject.lFinalWeightage?<TableRow>
            <TableCell align='center' sx={{fontWeight: 700}}>Final</TableCell>
            <TableCell align='center'>{subject.lFinalWeightage}</TableCell>
            <TableCell align='center'>{(subject.lFinalTotM?subject.lFinalWeightage:0).toFixed(2)}</TableCell>
            <TableCell align='center'>{(subject.lFinalTotM?(((subject.lFinalObtM)/(subject.lFinalTotM))*100*(subject.lFinalWeightage/100)):0).toFixed(2)}</TableCell>
            <TableCell align='center'>{(subject.lFinalTotM?(((subject.lFinalAvgM)/(subject.lFinalTotM))*100*(subject.lFinalWeightage/100)):0).toFixed(2)}</TableCell>
          </TableRow>:""}
          {subject.labCR?<TableRow>
            <TableCell align='center' sx={{fontWeight: 700}}>Overall</TableCell>
            <TableCell align='center'>{subject.labsWeightage + subject.lQuizWeightage + subject.lProjectWeightage + subject.lMidWeightage + subject.lFinalWeightage}</TableCell>
            <TableCell align='center'>{(((arrayCount(subject.lQuizTotM))*((subject.lQuizWeightage)/(subject.lTotalQuiz?subject.lTotalQuiz:1))) + ((arrayCount(subject.labsTotM))*((subject.labsWeightage)/(subject.totalLabs?subject.totalLabs:1))) + (subject.lProjectTotM?subject.lProjectWeightage:0) + ((arrayCount(subject.lMidTotM))*((subject.lMidWeightage)/(subject.lTotalMid?subject.lTotalMid:1))) + (subject.lFinalTotM?subject.lFinalWeightage:0)).toFixed(2)}</TableCell>
            <TableCell align='center'>{((arrayPercentage(subject.lQuizObtM, subject.lQuizTotM)*(arrayCount(subject.lQuizTotM))*((subject.lQuizWeightage)/(subject.lTotalQuiz?subject.lTotalQuiz:1))/100) + (arrayPercentage(subject.labsObtM, subject.labsTotM)*(arrayCount(subject.labsTotM))*((subject.labsWeightage)/(subject.totalLabs?subject.totalLabs:1))/100) + (subject.lProjectTotM?(((subject.lProjectObtM)/(subject.lProjectTotM?subject.lProjectTotM:1))*100*(subject.lProjectWeightage/100)):0) + (arrayPercentage(subject.lMidObtM, subject.lMidTotM)*(arrayCount(subject.lMidTotM))*((subject.lMidWeightage)/(subject.lTotalMid?subject.lTotalMid:1))/100) + (subject.lFinalTotM?(((subject.lFinalObtM)/(subject.lFinalTotM?subject.lFinalTotM:1))*100*(subject.lFinalWeightage/100)):0)).toFixed(2)}</TableCell>
            <TableCell align='center'>{((arrayPercentage(subject.lQuizAvgM, subject.lQuizTotM)*(arrayCount(subject.lQuizTotM))*((subject.lQuizWeightage)/(subject.lTotalQuiz?subject.lTotalQuiz:1))/100) + (arrayPercentage(subject.labsAvgM, subject.labsTotM)*(arrayCount(subject.labsTotM))*((subject.labsWeightage)/(subject.totalLabs?subject.totalLabs:1))/100) + (subject.lProjectTotM?(((subject.lProjectAvgM)/(subject.lProjectTotM?subject.lProjectTotM:1))*100*(subject.lProjectWeightage/100)):0) + (arrayPercentage(subject.lMidAvgM, subject.lMidTotM)*(arrayCount(subject.lMidTotM))*((subject.lMidWeightage)/(subject.lTotalMid?subject.lTotalMid:1))/100) + (subject.lFinalTotM?(((subject.lFinalAvgM)/(subject.lFinalTotM?subject.lFinalTotM:1))*100*(subject.lFinalWeightage/100)):0)).toFixed(2)}</TableCell>
          </TableRow>:""}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>}
    </>
  )
}

export default TableC