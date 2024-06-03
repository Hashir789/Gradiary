import { Button, ButtonGroup, Tooltip } from '@mui/material';
import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import gradeContext from '../context/gradeContext';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import { BiDetail } from "react-icons/bi";

const Buttonn = (props) => {
  const context = useContext(gradeContext);
  const { setSubject, subjectArray, deleteSubjects, setDetails, setValue3, pointer } = context;
  const {a} = props;
  const navigate = useNavigate();
  return (
    <>
    <ButtonGroup
    fullWidth
    variant="contained" 
    aria-label="outlined primary button group" 
    >
    <Tooltip title="Details">
    <Button onClick={()=>{setDetails(a); setSubject(subjectArray[a]); pointer(); navigate('/subjectdetails');}}><BiDetail  size={22}/></Button>
    </Tooltip>
    <Tooltip title="Edit">
      <Button onClick={()=>{setDetails(a); setSubject(subjectArray[a]); setValue3(1); navigate('/subjectiterations')}}><FaPencilAlt size={17}/></Button>
    </Tooltip>
    <Tooltip title="Delete">
    <Button onClick={()=>{setDetails(0); deleteSubjects(subjectArray[a]._id, a);}}><FaTrashAlt size={17}/></Button>
    </Tooltip>
    </ButtonGroup>
    </>
  )
}

export default Buttonn