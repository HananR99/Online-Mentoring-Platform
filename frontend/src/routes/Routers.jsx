import React from 'react';
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Mentors from '../pages/Mentors/Mentors'
import MentorDetails from '../pages/Mentors/MentorDetails'
import MyAccount from '../Dashboard/user-account/MyAccount'
import Dashboard from '../Dashboard/mentor-account/Dashboard';

import {Routes, Route} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute';

const Routers = () => {
  return <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/home" element={<Home/>} />
  <Route path="/mentors" element={<Mentors/>} />
  <Route path="/mentors/:id" element={<MentorDetails/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/register" element={<Signup/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/services" element={<Services/>} />
  <Route path="/users/profile/me" element={
    <ProtectedRoute allowedRoles={['mentee']}>
      <MyAccount/> 
    </ProtectedRoute>
  } 
  />
  <Route path="/mentors/profile/me" element={
    <ProtectedRoute allowedRoles={['mentor']}>
      <Dashboard/>
      </ProtectedRoute>
      }
  />
    
  </Routes>
}

export default Routers;