import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

const EditMovie = () => {
    const params=useParams()
    const navigate=useNavigate()

    const storeData=useSelector(state=>state.dataMovies)//לקבל מידע מהסטייט
    const [dataMovie, setDataMovie] = useState([])
    const [movieId, setMovieId] = useState()
    const [editMovie, setEditMovie] = useState({name:'' ,genres:'',yearPremiered:'',imageURL:''})
    const [isValid, setIsValid] = useState(true)


    useEffect(() => {

        let movieID=params.id;
        setMovieId(movieID)
        // console.log(movieId)
        // console.log(storeData)

        // debugger
        let arr=storeData.find(x=>x._id==movieID)
        setDataMovie(arr)
        setEditMovie({name:arr.name,genres:arr.genres,yearPremiered:arr.yearPremiered,imageURL:arr.imageURL,yearPremiered:arr.yearPremiered})
        console.log(arr)
        // window.scrollTo(0, 0)
    }, [])

    // const updateMovie=async ()=>
    // {
    //     let resp = await axios.put("http://localhost:8000/api/movies/"+movieId,editMovie)
    //     console.log(resp.data)
    //     navigate("/homePage")
    // }
    const handleKeyDown = (event) => {
      if (event.keyCode === 32) { // keyCode 32 is the spacebar
        setEditMovie({...editMovie,genres:editMovie.genres + ', '});
        event.preventDefault(); // Prevents the spacebar from adding a space character
      }
    }
    const coustomSubmit=async (e)=>
    {
      e.preventDefault()
      if(editMovie.name=="" ||editMovie.genres==""||editMovie.yearPremiered==""||editMovie.imageURL=="")
      {
        setIsValid(false)
      }
      else
      {
        let resp = await axios.put("http://localhost:8000/api/movies/"+movieId,editMovie)
        console.log(resp.data)
        navigate("/homePage")
      }
    }
    
  return (
    <div>
      <form onSubmit={coustomSubmit}>

      <div>

        <h1>Edit Movie:{dataMovie.name}</h1>
        Name:<input type={"text"} value={editMovie.name} onChange={e=>setEditMovie({...editMovie,name:e.target.value})}/><br/>
        Genres:<input type={"text"} value={editMovie.genres} onChange={e=>setEditMovie({...editMovie,genres:e.target.value})}
        onKeyDown={handleKeyDown} /><br/>
        Year Premiered:<input type={"date"} value={editMovie.yearPremiered} onChange={e=>setEditMovie({...editMovie,yearPremiered:e.target.value})}/><br/>
        ImageURL:<input type={"text"} value={editMovie.imageURL} onChange={e=>setEditMovie({...editMovie,imageURL:e.target.value})}/><br/>

        <button>Update</button> &nbsp;
        <button onClick={()=>navigate("/homePage")}>Cansole</button> <br/>
        {
          !isValid&&<span style={{color:"red"}} >*Please fill in all the fields in the form</span>
        }
        


      </div>
      </form>

    </div>
  )
}

export default EditMovie
