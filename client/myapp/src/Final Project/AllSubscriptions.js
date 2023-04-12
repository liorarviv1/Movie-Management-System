import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import AddMember from './AddMember'
import AllMembers from './AllMembers'
import HomePage from './HomePage'
  
const AllSubscriptions = () => {
  const navigate=useNavigate()
  useEffect(() => {
    const fullName = sessionStorage.getItem('fullName');
    if(fullName==null)
    {
      navigate("/")
    }
  }, [])

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
  }, [])

  
  return (
<div class="loginImage1">
  {/* <div class="background-image"></div> */}
  <div class="centered1">
      <h1>Movies - Subscriptions Web Site <br/>
        Wellcom {sessionStorage.getItem('fullName')} </h1>
      <button onClick={()=>navigate("/homePage")}>Movies</button> &nbsp; 
      <button onClick={()=>navigate("/subscriptions")}>Subscriptions</button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <button onClick={()=>navigate("/login")}>Log-out</button>

      <div style={{width:'800px',border:'solid 2px black'}}>
          <h3>Subscriptions</h3>
            {/* <button>All Member</button>&nbsp;<button>Add Member</button> */}
            {/* <Link to={"/homePage"} element={<HomePage/>}>Movies</Link> &nbsp;&nbsp; */}
            {/* <button onClick={()=>navigate("/homePage")}>Movies</button>
            <button onClick={()=>navigate("/subscriptions")}>Subscriptions</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={()=>navigate("/login")}>Log-out</button> */}

        {/* <Link to={"/subscriptions"} element={<AllSubscriptions/>}>Subscriptions</Link> &nbsp;&nbsp; */}
        {/* <br/> */}
            {/* <Link to={""} element={<AllMembers/>}>All Members</Link> &nbsp;&nbsp;
            <Link to={"addMember"} element={<AddMember/>}>Add Member</Link> &nbsp;&nbsp; */}

            <button onClick={()=>navigate("")}>All Members</button> &nbsp;
            {
              isManager&&<button onClick={()=>navigate("addMember")}>Add Member</button>

            }




            <Outlet/>

        </div>
      
    </div>
    </div>
  )
}

export default AllSubscriptions
