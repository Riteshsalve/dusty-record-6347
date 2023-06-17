
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
import SingleLabPage from '../pages/SingleLabPage'
import PrivateRoutes from './PrivateRoutes,jsx'
import BookTest from '../pages/BookTest'
// import LOGIN from '../Pages/Login'
import Laboratory from '../pages/Laboratory'
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
        <Route path='/laboratory' element={
          <PrivateRoutes>
            <Laboratory/>
          </PrivateRoutes>
        } />
        <Route path='/laboratory/:laboratory_id' element={
          <PrivateRoutes>
            <SingleLabPage/>
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