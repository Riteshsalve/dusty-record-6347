
import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
// import Login from '../Pages/Login'
import { Navigate } from 'react-router-dom'
import Signin from './Signin'

const PrivateRoutes = ({children}) => {

  // const {isAuth} = useContext(AuthContext)
  let authval = JSON.parse(localStorage.getItem('auth')) || false

  if(!authval){
    return <Signin/>
  }
    return children;
}

export default PrivateRoutes