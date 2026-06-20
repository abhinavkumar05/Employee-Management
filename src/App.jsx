import React, { useEffect, useState, useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
// import { getLocalStorage, setLocalStorage } from './Utils/localStorage'


const App = () => {

  // useEffect(() => {
  //   // initialize localStorage if missing
  //   if (!localStorage.getItem('employees') || !localStorage.getItem('admin')) {
  //     setLocalStorage()
  //   }
  //   getLocalStorage()
  // }, [])

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)
  // console.log(authData)

  // useEffect(() => {
  //   if(authData) {
  //     const loggedInUser = localStorage.getItem('loggedInUser')
  //     if(loggedInUser) {
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData])

  const handleLogin = (email, password) => {
    if(email =='admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authData) {
      const employee = authData.employees.find((e) => email == e.email && e.password == password)
      if(employee) {
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
      }
    }else { 
      alert("Invalid credentials")
    }
  }

  

  return (
    <>
    {!user ? <Login handleLogin={handleLogin} />: ''}
    {user == 'admin' ? <AdminDashboard /> : (user == 'employee' ?<EmployeeDashboard data={loggedInUserData} /> : null)}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
    
}

export default App