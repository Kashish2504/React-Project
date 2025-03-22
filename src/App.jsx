import { useEffect, useState } from "react"
import Login from "./components/auth/Login.jsx"
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx"
import { getLocalStorage, setLocalStorage } from "./utils/localStorage.jsx"

const App=()=>{

  const [user, setUser]=useState(null)

  const handleLogin=(email,password)=>{
    if(email=='admin@me.com' && password=='123'){
      setUser('admin')
    }
      else if(email=='user@me.com' && password=='123'){
          setUser('employee')
      }
    else{
      alert("Invalid Credentials")
    }
  }

  // useEffect(()=>{
  //   setLocalStorage()
  //   getLocalStorage()
  // })

  return(
    <>
    {!user ? <Login handleLogin={handleLogin}/>: ''}
    {user == 'admin' ? <AdminDashboard></AdminDashboard>:<EmployeeDashboard/>}
    {/* <Login/> */}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
  )
}
export default App