import React, { useContext } from 'react'
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import { TableCell, TableRow, Box, IconButton, Tooltip } from '@mui/material'
import gradeContext from '../context/gradeContext'

const Roww = (props) => {
    const context = useContext(gradeContext);
    const { subject, trash, setpencil1, setpencil2, setpencil3, setpencil4, pencil5, setOpen, setClose } = context;
    let { a } = props;
  return (
    <>
        { (pencil5===0 && subject.tTotalQuiz)?<TableRow>
          <TableCell align="center">{a}.</TableCell>
          <TableCell align="center">{subject.tQuizTotM[a-1]?subject.tQuizObtM[a-1]:""}</TableCell>
          <TableCell align="center">{subject.tQuizTotM[a-1]?subject.tQuizTotM[a-1]:""}</TableCell>
          <TableCell align="center">{subject.tQuizTotM[a-1]?subject.tQuizAvgM[a-1]:""}</TableCell>
          <TableCell align="center" sx={{ display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>{subject.tQuizTotM[a-1]?<Box sx={{ mr: 3 }} ><Tooltip title="Delete"><IconButton color='inherit' onClick={()=>{ trash(a-1);}}><FaTrashAlt size={20}/></IconButton></Tooltip></Box>:""}{subject.tQuizTotM[a-1]?<Box sx={{ mr: 3 }}><Tooltip title='Edit'><IconButton color='inherit' onClick={()=>{setClose(false); setOpen(true); setpencil1(a-1); setpencil2(subject.tQuizObtM[a-1]); setpencil3(subject.tQuizTotM[a-1]); setpencil4(subject.tQuizAvgM[a-1]);}}><FaPencilAlt size={20}/></IconButton></Tooltip></Box>:<Box sx={{ ml: 5 }}><Tooltip title='Edit'><IconButton color='inherit' onClick={()=>{setClose(false); setOpen(true); setpencil1(a-1); setpencil2(subject.tQuizObtM[a-1]); setpencil3(subject.tQuizTotM[a-1]); setpencil4(subject.tQuizAvgM[a-1]);}}><FaPencilAlt size={20}/></IconButton></Tooltip></Box>}</TableCell>
        </TableRow>:""}
        { pencil5===1?<TableRow>
          <TableCell align="center">{a}.</TableCell>
          <TableCell align="center">{subject.AssTotM[a-1]?subject.AssObtM[a-1]:""}</TableCell>
          <TableCell align="center">{subject.AssTotM[a-1]?subject.AssTotM[a-1]:""}</TableCell>
          <TableCell align="center">{subject.AssTotM[a-1]?subject.AssAvgM[a-1]:""}</TableCell>
          <TableCell align="center" sx={{ display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>{subject.AssTotM[a-1]?<Box sx={{ mr: 3 }} ><Tooltip title="Delete"><IconButton color='inherit' onClick={()=>{ trash(a-1)}}><FaTrashAlt size={20}/></IconButton></Tooltip></Box>:""}{subject.AssTotM[a-1]?<Box sx={{ mr: 3 }}><Tooltip title='Edit'><IconButton color='inherit' onClick={()=>{setClose(false); setOpen(true); setpencil1(a-1); setpencil2(subject.AssObtM[a-1]); setpencil3(subject.AssTotM[a-1]); setpencil4(subject.AssAvgM[a-1]);}}><FaPencilAlt size={20}/></IconButton></Tooltip></Box>:<Box sx={{ ml: 5 }}><Tooltip title='Edit'><IconButton color='inherit' onClick={()=>{setClose(false); setOpen(true); setpencil1(a-1); setpencil2(subject.AssObtM[a-1]); setpencil3(subject.AssTotM[a-1]); setpencil4(subject.AssAvgM[a-1]); }}><FaPencilAlt size={20}/></IconButton></Tooltip></Box>}</TableCell>
        </TableRow>:""}
        { pencil5===2?<TableRow>
          <TableCell align="center">1.</TableCell>
          <TableCell align="center">{subject.tProjectTotM?subject.tProjectObtM:""}</TableCell>
          <TableCell align="center">{subject.tProjectTotM?subject.tProjectTotM:""}</TableCell>
          <TableCell align="center">{subject.tProjectTotM?subject.tProjectAvgM:""}</TableCell>
          <TableCell align="center" sx={{ display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>{subject.tProjectTotM?<Box sx={{ mr: 3 }} ><Tooltip title="Delete"><IconButton color='inherit' onClick={()=>{ trash(a-1)}}><FaTrashAlt size={20}/></IconButton></Tooltip></Box>:""}{subject.tProjectTotM?<Box sx={{ mr: 3 }}><Tooltip title='Edit'><IconButton color='inherit' onClick={()=>{setClose(false); setOpen(true); setpencil1(a-1); setpencil2(subject.tProjectObtM); setpencil3(subject.tProjectTotM); setpencil4(subject.tProjectAvgM);}}><FaPencilAlt size={20}/></IconButton></Tooltip></Box>:<Box sx={{ ml: 5 }}><Tooltip title='Edit'><IconButton color='inherit' onClick={()=>{setClose(false); setOpen(true); setpencil1(a-1); setpencil2(subject.tProjectObtM); setpencil3(subject.tProjectTotM); setpencil4(subject.tProjectAvgM);}}><FaPencilAlt size={20}/></IconButton></Tooltip></Box>}</TableCell>
        </TableRow>:""}
        { pencil5===3?<TableRow>
          <TableCell align="center">{a}.</TableCell>
          <TableCell align="center">{subject.tMidTotM[a-1]?subject.tMidObtM[a-1]:""}</TableCell>
          <TableCell align="center">{subject.tMidTotM[a-1]?subject.tMidTotM[a-1]:""}</TableCell>
          <TableCell align="center">{subject.tMidTotM[a-1]?subject.tMidAvgM[a-1]:""}</TableCell>
          <TableCell align="center" sx={{ display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>{subject.tMidTotM[a-1]?<Box sx={{ mr: 3 }} ><Tooltip title="Delete"><IconButton color='inherit' onClick={()=>{ trash(a-1)}}><FaTrashAlt size={20}/></IconButton></Tooltip></Box>:""}{subject.tMidTotM[a-1]?<Box sx={{ mr: 3 }}><Tooltip title='Edit'><IconButton color='inherit' onClick={()=>{setClose(false); setOpen(true); setpencil1(a-1); setpencil2(subject.tMidObtM[a-1]); setpencil3(subject.tMidTotM[a-1]); setpencil4(subject.tMidAvgM[a-1]);}}><FaPencilAlt size={20}/></IconButton></Tooltip></Box>:<Box sx={{ ml: 5 }}><Tooltip title='Edit'><IconButton color='inherit' onClick={()=>{setClose(false); setOpen(true); setpencil1(a-1); setpencil2(subject.tMidObtM[a-1]); setpencil3(subject.tMidTotM[a-1]); setpencil4(subject.tMidAvgM[a-1]);}}><FaPencilAlt size={20}/></IconButton></Tooltip></Box>}</TableCell>
        </TableRow>:""}
        { pencil5===4?<TableRow>
          <TableCell align="center">1.</TableCell>
          <TableCell align="center">{subject.tFinalTotM?subject.tFinalObtM:""}</TableCell>
          <TableCell align="center">{subject.tFinalTotM?subject.tFinalTotM:""}</TableCell>
          <TableCell align="center">{subject.tFinalTotM?subject.tFinalAvgM:""}</TableCell>
          <TableCell align="center" sx={{ display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>{subject.tFinalTotM?<Box sx={{ mr: 3 }} ><Tooltip title="Delete"><IconButton color='inherit' onClick={()=>{ trash(a-1)}}><FaTrashAlt size={20}/></IconButton></Tooltip></Box>:""}{subject.tFinalTotM?<Box sx={{ mr: 3 }}><Tooltip title='Edit'><IconButton color='inherit' onClick={()=>{setClose(false); setOpen(true); setpencil1(a-1); setpencil2(subject.tFinalObtM); setpencil3(subject.tFinalTotM); setpencil4(subject.tFinalAvgM);}}><FaPencilAlt size={20}/></IconButton></Tooltip></Box>:<Box sx={{ ml: 5 }}><Tooltip title='Edit'><IconButton color='inherit' onClick={()=>{setClose(false); setOpen(true); setpencil1(a-1); setpencil2(subject.tFinalObtM); setpencil3(subject.tFinalTotM); setpencil4(subject.tFinalAvgM);}}><FaPencilAlt size={20}/></IconButton></Tooltip></Box>}</TableCell>
        </TableRow>:""}
        { pencil5===6?<TableRow>
          <TableCell align="center">{a}.</TableCell>
          <TableCell align="center">{subject.lQuizTotM[a-1]?subject.lQuizObtM[a-1]:""}</TableCell>
          <TableCell align="center">{subject.lQuizTotM[a-1]?subject.lQuizTotM[a-1]:""}</TableCell>
          <TableCell align="center">{subject.lQuizTotM[a-1]?subject.lQuizAvgM[a-1]:""}</TableCell>
          <TableCell align="center" sx={{ display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>{subject.lQuizTotM[a-1]?<Box sx={{ mr: 3 }} ><Tooltip title="Delete"><IconButton color='inherit' onClick={()=>{ trash(a-1)}}><FaTrashAlt size={20}/></IconButton></Tooltip></Box>:""}{subject.lQuizTotM[a-1]?<Box sx={{ mr: 3 }}><Tooltip title='Edit'><IconButton color='inherit' onClick={()=>{setClose(false); setOpen(true); setpencil1(a-1); setpencil2(subject.lQuizObtM[a-1]); setpencil3(subject.lQuizTotM[a-1]); setpencil4(subject.lQuizAvgM[a-1]);}}><FaPencilAlt size={20}/></IconButton></Tooltip></Box>:<Box sx={{ ml: 5 }}><Tooltip title='Edit'><IconButton color='inherit' onClick={()=>{setClose(false); setOpen(true); setpencil1(a-1); setpencil2(subject.lQuizObtM[a-1]); setpencil3(subject.lQuizTotM[a-1]); setpencil4(subject.lQuizAvgM[a-1]);}}><FaPencilAlt size={20}/></IconButton></Tooltip></Box>}</TableCell>
        </TableRow>:""}
        { pencil5===7?<TableRow>
          <TableCell align="center">{a}.</TableCell>
          <TableCell align="center">{subject.labsTotM[a-1]?subject.labsObtM[a-1]:""}</TableCell>
          <TableCell align="center">{subject.labsTotM[a-1]?subject.labsTotM[a-1]:""}</TableCell>
          <TableCell align="center">{subject.labsTotM[a-1]?subject.labsAvgM[a-1]:""}</TableCell>
          <TableCell align="center" sx={{ display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>{subject.labsTotM[a-1]?<Box sx={{ mr: 3 }} ><Tooltip title='Delete'><IconButton color='inherit' onClick={()=>{trash(a-1)}}><FaTrashAlt size={20}/></IconButton></Tooltip></Box>:""}{subject.labsTotM[a-1]?<Box sx={{ mr: 3 }}><Tooltip title='Edit'><IconButton color='inherit' onClick={()=>{setClose(false); setOpen(true); setpencil1(a-1); setpencil2(subject.labsObtM[a-1]); setpencil3(subject.labsTotM[a-1]); setpencil4(subject.labsAvgM[a-1]);}}><FaPencilAlt size={20}/></IconButton></Tooltip></Box>:<Box sx={{ ml: 5 }}><Tooltip title='Edit'><IconButton color='inherit' onClick={()=>{setClose(false); setOpen(true); setpencil1(a-1); setpencil2(subject.labsObtM[a-1]); setpencil3(subject.labsTotM[a-1]); setpencil4(subject.labsAvgM[a-1]);}}><FaPencilAlt size={20}/></IconButton></Tooltip></Box>}</TableCell>
        </TableRow>:""}
        { pencil5===8?<TableRow>
          <TableCell align="center">1.</TableCell>
          <TableCell align="center">{subject.lProjectTotM?subject.lProjectObtM:""}</TableCell>
          <TableCell align="center">{subject.lProjectTotM?subject.lProjectTotM:""}</TableCell>
          <TableCell align="center">{subject.lProjectTotM?subject.lProjectAvgM:""}</TableCell>
          <TableCell align="center" sx={{ display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>{subject.lProjectTotM?<Box sx={{ mr: 3 }} ><Tooltip title='Delete'><IconButton color='inherit' onClick={()=>{trash(a-1)}}><FaTrashAlt size={20}/></IconButton></Tooltip></Box>:""}{subject.lProjectTotM?<Box sx={{ mr: 3 }}><Tooltip title='Edit'><IconButton color='inherit' onClick={()=>{setClose(false); setOpen(true); setpencil1(a-1); setpencil2(subject.lProjectObtM); setpencil3(subject.lProjectTotM); setpencil4(subject.lProjectAvgM);}}><FaPencilAlt size={20}/></IconButton></Tooltip></Box>:<Box sx={{ ml: 5 }}><Tooltip title='Edit'><IconButton color='inherit' onClick={()=>{setClose(false); setOpen(true); setpencil1(a-1); setpencil2(subject.lProjectObtM); setpencil3(subject.lProjectTotM); setpencil4(subject.lProjectAvgM);}}><FaPencilAlt size={20}/></IconButton></Tooltip></Box>}</TableCell>
        </TableRow>:""}
        { pencil5===9?<TableRow>
          <TableCell align="center">{a}.</TableCell>
          <TableCell align="center">{subject.lMidTotM[a-1]?subject.lMidObtM[a-1]:""}</TableCell>
          <TableCell align="center">{subject.lMidTotM[a-1]?subject.lMidTotM[a-1]:""}</TableCell>
          <TableCell align="center">{subject.lMidTotM[a-1]?subject.lMidAvgM[a-1]:""}</TableCell>
          <TableCell align="center" sx={{ display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>{subject.lMidTotM[a-1]?<Box sx={{ mr: 3 }} ><Tooltip title='Delete'><IconButton color='inherit' onClick={()=>{trash(a-1)}}><FaTrashAlt size={20}/></IconButton></Tooltip></Box>:""}{subject.lMidTotM[a-1]?<Box sx={{ mr: 3 }}><Tooltip title='Edit'><IconButton color='inherit' onClick={()=>{setClose(false); setOpen(true); setpencil1(a-1); setpencil2(subject.lMidObtM[a-1]); setpencil3(subject.lMidTotM[a-1]); setpencil4(subject.lMidAvgM[a-1]); }}><FaPencilAlt size={20}/></IconButton></Tooltip></Box>:<Box sx={{ ml: 5 }}><Tooltip title='Edit'><IconButton color='inherit' onClick={()=>{setClose(false); setOpen(true); setpencil1(a-1); setpencil2(subject.lMidObtM[a-1]); setpencil3(subject.lMidTotM[a-1]); setpencil4(subject.lMidAvgM[a-1]);}}><FaPencilAlt size={20}/></IconButton></Tooltip></Box>}</TableCell>
        </TableRow>:""}
        { pencil5===10?<TableRow>
          <TableCell align="center">1.</TableCell>
          <TableCell align="center">{subject.lFinalTotM?subject.lFinalObtM:""}</TableCell>
          <TableCell align="center">{subject.lFinalTotM?subject.lFinalTotM:""}</TableCell>
          <TableCell align="center">{subject.lFinalTotM?subject.lFinalAvgM:""}</TableCell>
          <TableCell align="center" sx={{ display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>{subject.lFinalTotM?<Box sx={{ mr: 3 }} ><Tooltip title='Delete'><IconButton color='inherit' onClick={()=>{trash(a-1)}}><FaTrashAlt size={20}/></IconButton></Tooltip></Box>:""}{subject.lFinalTotM?<Box sx={{ mr: 3 }}><Tooltip title='Edit'><IconButton color='inherit' onClick={()=>{setClose(false); setOpen(true); setpencil1(a-1); setpencil2(subject.lFinalObtM); setpencil3(subject.lFinalTotM); setpencil4(subject.lFinalAvgM);}}><FaPencilAlt size={20}/></IconButton></Tooltip></Box>:<Box sx={{ ml: 5 }}><Tooltip title='Edit'><IconButton color='inherit' onClick={()=>{setClose(false); setOpen(true); setpencil1(a-1); setpencil2(subject.lFinalObtM); setpencil3(subject.lFinalTotM); setpencil4(subject.lFinalAvgM);}}><FaPencilAlt size={20}/></IconButton></Tooltip></Box>}</TableCell>
        </TableRow>:""}
    </>
  )
}

export default Roww