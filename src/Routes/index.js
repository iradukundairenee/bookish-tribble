import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import Level1 from '../views/Level1'
import Level2Card from  '../views/Level2Card'
import Courses from '../views/Courses';
import Term from '../views/Term';
import Primary from '../views/Primary';
import Secondary from '../views/Secondary';
import Signup from '../views/Singup';


function index() {
  return (
    <Routes>
        <Route path='/' element={<Level1/>} />
        <Route path='/Grade' element={<Level2Card/>} />
        <Route path='/Courses' element={<Courses />} />
        <Route path='/Term' element={<Term />} />
        <Route path='/Primary' element={<Primary/>} />
        <Route path='/Secondary' element={<Secondary/>} />
        <Route path='/Signup' element={<Signup/>} />
    </Routes>
  )
}

export default index;