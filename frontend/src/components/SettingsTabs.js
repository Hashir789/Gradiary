import React from 'react'
import { AppBar, Tabs, Tab } from '@mui/material'
import MySubjects from './MySubjects';

const SettingsTabs = () => {

  return (
    <>
    <AppBar position='static' color='inherit'>
    <Tabs value={0} 
    variant='fullWidth'
    textColor='primary' 
    indicatorColor='primary'>
        <Tab label='My Subjects'/>
    </Tabs>
    </AppBar>
    <MySubjects/>
    </>
  )
}

export default SettingsTabs