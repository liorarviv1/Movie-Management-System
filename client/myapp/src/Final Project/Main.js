import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import AddMember from './AddMember'
import AddMovie from './AddMovie'
import AllMembers from './AllMembers'
import AllMovies from './AllMovies'
import AllSubscriptions from './AllSubscriptions'

import EditMember from './EditMember'
import EditMovie from './EditMovie'
import HomePage from './HomePage'
import Login from './Login'

const Main = () => {
  const navigate=useNavigate()
  const [userName, setUserName] = useState('')
  useEffect(() => {
    const fullName = sessionStorage.getItem('fullName');
    const role = sessionStorage.getItem('role');
    setUserName(fullName)
    }, [])
  return (
    <div >
      <div class="background-image"></div>

      <div >
        {/* <h1>Movies - Subscriptions Web Site <br/>
        Wellcom {userName} </h1> */}
        
        {/* <button onClick={gotomovies}>Movies</button> &nbsp; <button>Subscriptions</button> &nbsp; <button>Log-out</button> */}
        {/* <Link to={"homePage"} element={<HomePage/>}>Movies</Link> &nbsp;&nbsp;
        <Link to={"subscriptions"} element={<AllSubscriptions/>}>Subscriptions</Link> &nbsp;&nbsp; */}

            {/* <button onClick={()=>navigate("/homePage")}>Movies</button> &nbsp;
            <button onClick={()=>navigate("/subscriptions")}>Subscriptions</button>&nbsp;&nbsp;&nbsp;&nbsp;

            <button onClick={()=>navigate("/login")}>Log-out</button> */}




        
        <Routes>
            <Route path='' element={<Login/>}/>
            
          <Route path='homePage' element={<HomePage/>}>
              <Route path='' element={<AllMovies/>}/>
              {/* <Route path='allMovies' element={<AllMovies/>}/> */}

              <Route path='movieSelect/:name' element={<AllMovies/>}/>

              <Route path='addMovie' element={<AddMovie/>}/>
          <Route path="edit/:id" element={<EditMovie/>}/>
          <Route path="editMember/:id" element={<EditMember/>}/>


          </Route>
          {/* <Route path="edit/:id" element={<EditMovie/>}/> */}

          <Route path='subscriptions' element={<AllSubscriptions/>}>
            <Route path='' element={<AllMembers/>}/>
            <Route path='addMember' element={<AddMember/>}/>
            <Route path="editMember/:id" element={<EditMember/>}/>


          </Route>
            {/* <Route path="editMember/:id" element={<EditMember/>}/> */}
            <Route path='login' element={<Login/>}/>

        
        </Routes>


      </div>
    </div>
  )
}

export default Main
