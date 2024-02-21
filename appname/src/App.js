import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Header from './Components/Header';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Appointment from './Components/Appointment';
import Visitor from './Components/Visitor';
import Home from './Components/Home';
import Councellor from './Components/Councellor';

function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>
<main>
<Routes>
<Route path="/" element={<Home/>} exact/>
<Route path="/Signin" element={<Signin/>} exact/>
<Route path="/Signup" element={<Signup/>} exact/>
<Route path="/Appointment" element={<Appointment/>} exact/>
<Route path="/Visitor" element={<Visitor/>} exact/>
<Route path="/Councellor" element={<Councellor/>} exact/>



</Routes>
</main>
  </React.Fragment>
}

export default App;