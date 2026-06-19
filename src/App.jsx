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

  const handleLogin = (email, password) => {
    if(email =='admin@me.com' && password == '123') {
      setUser('admin')
    }else if(email == 'user@me.com' && password == '123') {
      setUser('employee')
    }else { 
      alert("Invalid credentials")
    }
  }

  const data = useContext(AuthContext)
  console.log(data)

  return (
    <>
    {!user ? <Login handleLogin={handleLogin} />: ''}
    {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
    
}

export default App