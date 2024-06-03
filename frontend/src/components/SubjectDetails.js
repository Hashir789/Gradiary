import React, { useContext } from 'react'
import Modall from './Modall'
import Tabbs from './Tabbs'
import TableA from './TableA'
import TableB from './TableB'
import TableC from './TableC'
import gradeContext from '../context/gradeContext'
import { Link } from 'react-router-dom'
import { Fab, Tooltip } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';

const SubjectDetails = () => {
  const context = useContext(gradeContext);
  const { subject, setValue2, setValue1, setValue4 } = context;
  return (
    <>
    {(subject.labCR || subject.theoryCR)?<><Tabbs/><TableA/><TableB/><TableC/><Modall/></>:""}
    <Link to='/home'>
    <Tooltip title="Home" sx={{position:"fixed", bottom:20, right:{xs:"43%", md:30}}}>
      <Fab color="primary" aria-label="add" position="sticky" onClick={()=>{ setValue2(0); setValue1(0); setValue4(0);}}>
          <HomeIcon/>
      </Fab>
    </Tooltip>
    </Link>
    </>
  )
}

export default SubjectDetails