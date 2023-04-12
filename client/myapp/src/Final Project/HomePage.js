import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import AddMovie from './AddMovie'
import AllMovies from './AllMovies'
import AllSubscriptions from './AllSubscriptions'

const HomePage = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch() //להעביר מידע
  const [isManager, setisManager] = useState(false)
  useEffect(() => {
  const fullName = sessionStorage.getItem('fullName');
  const role = sessionStorage.getItem('role');
  if(role=="Manager")
  {
    setisManager(true)
  }
  if(fullName==null)
  {
    navigate("/")
  }
  // window.scrollTo(0, 0);

  }, [])

  const allMovies=async ()=>
  {
    let resp2= await axios.get("http://localhost:8000/api/movies")
    dispatch({type:"LOADDATA2",payload:resp2.data})
    navigate("/homePage")
  }
  const [buttonColor, setButtonColor] = useState('white');
  


  
  return (
<div class="loginImage1">
  <div class="centered1">
      <h1>Movies - Subscriptions Web Site <br/>
        Wellcom {sessionStorage.getItem('fullName')} </h1>
      <button onClick={()=>navigate("/homePage") }>Movies</button> &nbsp; 
      <button onClick={()=>navigate("/subscriptions")}>Subscriptions</button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <button onClick={()=>navigate("/login")}>Log-out</button>


      <div style={{width:'800px',border:'solid 2px black' }} >
      {/* <div className='centered-inclined' > */}
      
            <h3>Movies</h3>
            {/* <Link to={"/homePage"} element={<HomePage/>}>Movies</Link> &nbsp;&nbsp; */}
            {/* {
              isManager&&<button onClick={()=>navigate("/subscriptions")}>Subscriptions</button>
              // <Link to={"/subscriptions"} element={<AllSubscriptions/>}>Subscriptions</Link> 
            }&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={()=>navigate("/login")}>Log-out</button> */}
        {/* <br/> */}
        {/* <button onClick={()=>navigate("/homePage")}>All Movies</button> */}
        <button onClick={allMovies}>All Movies</button> &nbsp;

        <button onClick={()=>navigate("addMovie")}>Add Movie</button>


        {/* <Link to={"/homePage"} element={<AllMovies/>}>All Movies</Link> &nbsp;&nbsp; */}
        {/* <Link to={"addMovie"} element={<AddMovie/>}>Add Movie</Link> &nbsp;&nbsp; */}






        <Outlet/>

        
        </div>
    </div>
    </div>
  )
}

export default HomePage
