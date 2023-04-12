import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles.css'

const Login = () => {
  useEffect(() => {
    sessionStorage.clear();
  }, [])

  const [user, setUser] = useState({username:'',password:''})
  const [isValidName, setIsValidName] = useState(false)
  const [isValidPassword, setIsValidPassword] = useState(false)
  const [errorUP, setErrorUP] = useState(true)
  const navigate=useNavigate()

  const logIn = async (e) => {
    e.preventDefault()
    
    if(isValidName && isValidPassword) {
      let resp = await axios.get("http://localhost:8000/api/users")
      
      resp.data.forEach(us => {
        console.log("qqqqqq")
        
        if(us.username === user.username && us.password === user.password) {
          sessionStorage.setItem('fullName', us.fullName)
          sessionStorage.setItem('role', us.role)
          navigate("/homePage")
          console.log("sad")
        } else {
          setErrorUP(false)
          console.log("wwwwww")
          
        }
      });
    }
  }

  const handleUsernameChange = (e) => { //state user מעדכנת את 
    setUser({ ...user, username: e.target.value })
    setIsValidName(e.target.value !== '') //כאשר יש שם שם משתמש תעדכן את זה לאמת
  }

  const handlePasswordChange = (e) => {
    setUser({ ...user, password: e.target.value })
    setIsValidPassword(e.target.value !== '')
  }

  return (
    <div className='loginImage'>
          <br/><br/><br/>
          <h1 style={{color:'white',textAlign: "center"}}>Movie Website</h1><br/><br/>
      <div className="login-container">
        <form onSubmit={logIn}>
          User name:<input type={'text'} onChange={handleUsernameChange} onBlur={handleUsernameChange} /><br/>
          Password:<input type={'password'} onChange={handlePasswordChange} onBlur={handlePasswordChange} /><br/>
          <button onClick={logIn}>log-in</button>
          <br/>
          {
            !isValidName && <span style={{color:'black'}}>Please enter your username</span> 
          }<br/>
          {
            !isValidPassword && <span style={{color:'black'}}>Please enter your password</span>
          }
          {
            !errorUP && <span style={{color:'black'}}>One of the identification details is incorrect, please try again.</span>
          }
        </form>
      </div>
    </div>
  )
}

export default Login
//היא פונקציה שמופעלת כאשר הקוד "מאבד אינטקציה"  -onBlur
//במקרה שלי זה מעדכן את הסטייט בכל פעם
//סוג של אוןגאנג מיוחד "שלא מאבד "