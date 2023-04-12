import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddMovie = () => {
  const navigate=useNavigate()
  const [addMovie1, setAddMovie1] = useState({name:'' ,genres:'',yearPremiered:'',imageURL:''})
  const [isValid, setIsValid] = useState(true)
    // const [errorMessage, seterrorMessage] = useState({EName:"enter name movie",EGenres:"enter genre movie",
    // ETear:"enter movie year premiered", EImage:"enter URL img"})

  // const addMovie=async ()=>
  // {
  //   alert("yesss")
    // let resp = await axios.post("http://localhost:8000/api/movies",addMovie1)
    // console.log(resp.data)
    // navigate("/homePage")
  // }
  
  const coustomSubmit=async (e)=>
  {
    e.preventDefault()
    if(addMovie1.name=="" ||addMovie1.genres==""||addMovie1.yearPremiered==""||addMovie1.imageURL=="")
    {
      setIsValid(false)
    }
    else
    {
      let resp = await axios.post("http://localhost:8000/api/movies",addMovie1)
      console.log(resp.data)
      navigate("/homePage")
    }
  }
  const handleKeyDown = (event) => {
    if (event.keyCode === 32) { // keyCode 32 is the spacebar
      setAddMovie1({...addMovie1,genres:addMovie1.genres + ', '});
      event.preventDefault(); // Prevents the spacebar from adding a space character
    }
  }


  return (
    <div>
      <form onSubmit={coustomSubmit}>
      <div>
        <br/>
        Name:<input type={"text"} value={addMovie1.name} onChange={e=>setAddMovie1({...addMovie1,name:e.target.value})}/><br/>
        Genres:<input type={"text"} value={addMovie1.genres} onChange={e=>setAddMovie1({...addMovie1,genres:e.target.value})}
        onKeyDown={handleKeyDown} 
        /><br/>

        Year Premiered:<input type={"date"} value={addMovie1.yearPremiered} onChange={e=>setAddMovie1({...addMovie1,yearPremiered:e.target.value})}/><br/>
        ImageURL:<input type={"text"} value={addMovie1.imageURL} onChange={e=>setAddMovie1({...addMovie1,imageURL:e.target.value})}/><br/>
        <button>Add Movie</button> &nbsp;
        <button onClick={()=>navigate("/homePage")}>Cancel</button> <br/>

        {
          !isValid&&<span>Please fill in all the fields in the form</span>
        }

        
      </div>
      </form> 
    </div>
  )
}

export default AddMovie
