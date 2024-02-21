import React,{useState} from 'react'
import {AppBar ,Tabs,Tab,Toolbar,Typography} from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import {NavLink} from 'react-router-dom'
const Header = () => {
  const[value,setValue]=useState()
  return (
    <div>
      <AppBar sx={{backgroundColor:"#162e19"}} position='sticky'>
       <Toolbar>
        <AccountBalanceIcon/>
        <Typography> &nbsp;&nbsp;Counselling and visitor management system</Typography>
        <Tabs textColor ='inherit' indicatorColor='primmary'
        sx={{ml:"auto"}} value={value}
        onChange={(e,val)=>setValue(val)}>
          <Tab LinkComponent={NavLink} to ='/signup' label='Signup'/>
          <Tab LinkComponent={NavLink} to ='/signin' label='Signin'/>
          <Tab LinkComponent={NavLink} to ='/councellor' label='Councellor'/>
          <Tab LinkComponent={NavLink} to ='/visitor' label='Visitor'/>
          <Tab LinkComponent={NavLink} to ='/appointment' label='Appointment'/>
          <Tab LinkComponent={NavLink} to ='/FetchRegistrations'label='Registrations'/>

        </Tabs>
       </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header