
import React from 'react'
import {  Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import SignupsForms from './SignupForms'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Genomics from '../pages/Genomics'
import Bionics from '../pages/Bionics'
import PageNotFound from '../pages/PageNotFound'
import Genetics from '../pages/Genetics'
import Chemistry from '../pages/Chemistry'
import SingleDoctorPage from '../pages/SingleLabPage'
import PrivateRoutes from './PrivateRoutes'
import BookTest from '../pages/BookTest'
// import LOGIN from '../Pages/Login'
import Doctors from '../pages/Laboratory'
import Signin from './Signin'


const AllRoutes = () => {

  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/signup' element={<SignupsForms/>} />
        <Route path='/login' element={<Signin/>} />
        <Route path='*' element={<PageNotFound/>} />
        <Route path='/doctors' element={
          <PrivateRoutes>
            <Doctors/>
          </PrivateRoutes>
        } />
        <Route path='/doctors/:lab_id' element={
          <PrivateRoutes>
            <SingleDoctorPage/>
          </PrivateRoutes>
        } />
        <Route path='/Genomics' element={<Genomics/>} />
        <Route path='/Bionics' element={<Bionics/>} />
        <Route path='/Genetics' element={<Genetics/>} />
        <Route path='/chemistry' element={<Chemistry/>} />
        <Route path='/payment' element={<BookTest/>} />

      </Routes>
    </div>
  )
}

export default AllRoutes