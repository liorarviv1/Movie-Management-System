import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import Movie from './Movie'
import { useParams } from 'react-router-dom'



const AllMovies = () => {
  const inputRef = useRef(null);
  // const params=useParams()
    const dispatch=useDispatch() //להעביר מידע
    const storeData=useSelector(state=>state.dataMovies)//לקבל מידע מהסטייט

    const [allMovieSearch, setallMovieSearch] = useState([])
    const [allMovieSearch2, setallMovieSearch2] = useState([])

    const [movieSelect, setMovieSelect] = useState("")

    useEffect(() => {
        async function getAll()
        {
          let movieSelectID=sessionStorage.getItem('movieSelectID')
          setMovieSelect(movieSelectID)
            // sessionStorage.removeItem('movieSelect');

            let resp= await axios.get("http://localhost:8000/api/subs")
            dispatch({type:"LOADDATA",payload:resp.data})

            // let resp2= await axios.get("http://localhost:8000/api/movies")
            // dispatch({type:"LOADDATA2",payload:resp2.data})
            
            let resp3= await axios.get("http://localhost:8000/api/members")
            dispatch({type:"LOADDATA3",payload:resp3.data})////////להוסיף
              
            // console.table(storeData)
            // setAllDataSubs(resp.data)

            // setallMovieSearch(resp2.data)
            // setallMovieSearch2(resp2.data)

        }getAll()
      
    }, [])
    
    const timeoutId = setTimeout(() => {
      sessionStorage.removeItem('movieSelectID');
      
    }, 500);

    // useEffect(() => {
    //   let movieSelect=sessionStorage.getItem('movieSelect')
    //   sessionStorage.removeItem('movieSelct')
    //   async function getDataSubs()
    //   {
    //     setMovieSelect(movieSelect)

    //     let resp= await axios.get("http://localhost:8000/api/subs")
    //     dispatch({type:"LOADDATA",payload:resp.data})
    //   }getDataSubs()
    // }, [])
    
    useEffect( () => {
      async function getDataMovie()
      {

        let resp2= await axios.get("http://localhost:8000/api/movies")
        dispatch({type:"LOADDATA2",payload:resp2.data})
        setallMovieSearch(resp2.data)
      }getDataMovie()
    }, [storeData.length])

    // useEffect(() => {
    //   async function getDataMembers()
    //   {
    //     let resp3= await axios.get("http://localhost:8000/api/members")
    //     dispatch({type:"LOADDATA3",payload:resp3.data})
    //   }getDataMembers()
    // }, [])
    


    const movieSearch=(e)=>
    {
      // setSearchMovie(e.target.value)
      // let arr2=storeData.filter(x=>x.name.includes(e.target.value))
      // setallMovieSearch(arr2)
      const searchValue = e.target.value.toLowerCase().trim(); // normalize search value

      const filteredMovies = storeData.filter(movie => movie.name.toLowerCase().includes(searchValue));
      setallMovieSearch(filteredMovies);
    }

  return (
    <div className={'centerAll'}>
      <div style={{width:'600px'}}><br/> 
      Search Movie <input type={"text"} onChange={movieSearch} />     
      {/* <div style={{width:'600px',border:'solid 2px red'}}> */}

        {
            // allMovieSearch.map((x,index)=>
            // {
            //     return <Movie data2={x} key={index}/> 
            // })
            allMovieSearch.map((x,index)=>
            {
              if(sessionStorage.getItem('movieSelectID'))
              {
                if(x._id==movieSelect) 
                {
                  return <Movie data2={x} key={index}/>
                }
              }
              else
              {
                return <Movie data2={x} key={index}/> 

              }

            })
        }
      </div>
      <br/>
    </div>
  )
}

export default AllMovies
