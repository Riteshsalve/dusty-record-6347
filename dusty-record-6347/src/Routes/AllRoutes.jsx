
import React from 'react'
import {  Route, Routes } from 'react-router-dom'
// // import Admin from './Admin'
// // import Home from '../Pages/Home'
// // import SignupsForms from './SignupsForms'
// // import Doctors from '../Pages/Doctors'
// // import Contact from '../Pages/Contact'
// // import About from '../Pages/About'
// // import Signup from '../Pages/Signup'
// // import Cardiology from '../Pages/Cardiology'
// // import Neurology from '../Pages/Neurology'
// // import PageNotFound from '../Pages/PageNotFound'
// // import Gynecologist from '../Pages/Gynecologist'
// // import Gastroenterology from '../Pages/Gastroenterology'
// // import Dermatologist from '../Pages/Dermatologist'
// // import Orthopedics from '../Pages/Orthopedics'
// // import Pulmonologist from '../Pages/Pulmonologist'
// // import BookAppointForm from './BookAppointForm'
// // import BookApoointMessage from './BookApoointMessage'
// // import SingleDoctorPage from '../Pages/SingleDoctorPage'
// // import Login from '../Pages/Login'
// // import PrivateRoutes from './PrivateRoutes'
// // import Payment from '../Pages/Payment'
// // import PatientAppointments from '../Pages/PatientAppointments'

import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path='/admin' element={<Admin/>} /> */}
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
       <Route path='/signup' element={<Signup/>} />
       <Route path='/login' element={<Login/>} />        {/* <Route path='*' element={<PageNotFound/>} /> */}
        {/* <Route path='/doctors' element={
//           <PrivateRoutes>
//             <Doctors/>
//           </PrivateRoutes>
//         } /> */}
       {/* <Route path='/doctors/:doctor_id' element={
//           <PrivateRoutes>
//             <SingleDoctorPage/>
//           </PrivateRoutes>
//         } /> */}
       
       </Routes>
    </div>
  )
}

export default AllRoutes