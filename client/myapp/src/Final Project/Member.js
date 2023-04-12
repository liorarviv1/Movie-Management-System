import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Member = (props) => {
  const storeDataSubs=useSelector(state=>state.dataSubs)//לקבל מידע מהסטייט
  const storeDataMovie2=useSelector(state=>state.dataMovies)//לקבל מידע מהסטייט

  const [subNewMoview, setSubNewMoview] = useState(false)
  const [unwatchedMovies, setUnwatchedMovies] = useState([])
  const [movieSelect, setMovieSelect] = useState()
  const [allDataSelect, setallDataSelect] = useState({date:"",memberId:props.data2._id,movieId:""})
  const [isValid, setIsValid] = useState(true)


  const navigate=useNavigate()

  useEffect(() => {
    // console.table(storeDataSubs)
    const arrMemberWhatch=storeDataSubs.filter(x=>x.memberId==props.data2._id)

    const notWatch=storeDataMovie2.filter((movie1)=>
    {
      return  !arrMemberWhatch.find((watchedMovie)=>watchedMovie.movieId==movie1._id)
    })
    setUnwatchedMovies(notWatch)   
  }, [storeDataSubs])
  

  const deleteMember=async(id)=>
  {
    console.log(id)
    let resp=await axios.delete("http://localhost:8000/api/members/"+id)
    console.log(resp.data)
    navigate("/homePage")
  }
  const addMovieToMember = async ()=>
  {
    if(allDataSelect.date&&allDataSelect.movieId)
    {
      let resp=await axios.post("http://localhost:8000/api/subs",allDataSelect)
      console.log(resp.data)
      navigate("/homePage")
    }
    else
    {
      setIsValid(false)
    }

  }

  return (
    <div>
      <div style={{width:'600px',border:'solid 2px black'}}>
        <h3>{props.data2.fullName}</h3>
        Email: {props.data2.email}<br/>
        City: {props.data2.city}<br/>
        <button onClick={()=> navigate("editMember/"+props.data2._id)}> Edit Member</button> &nbsp;
        <button onClick={()=>deleteMember(props.data2._id)}>Delete Member</button> &nbsp;

        <div style={{width:'500px',border:'solid 2px black'}}>
        <h3>Movies Watched</h3>
        <button onClick={()=>setSubNewMoview(!subNewMoview)}>Subscribe to new movie</button>

        {
          subNewMoview && (<div style={{width:'400px',border:'solid 2px red'}}>
            <h4>Add a new Movie</h4>
            {/* <select onChange={e=>setMovieSelect(e.target.value)}> */}
            <select onChange={e=>setallDataSelect({...allDataSelect,movieId:e.target.value})}>
              <option>select movie</option>
              {
                unwatchedMovies.map((x,index)=>
                {
                  return <option key={index} value={x._id}>{x.name}</option>
                })
              }
            </select> &nbsp;
            <input type="date" onChange={e=>setallDataSelect({...allDataSelect,date:e.target.value})}/>
            <button onClick={addMovieToMember} >Subscribe</button><br/>
            {
              !isValid&&<span>Sorry to continue please fill all the details</span>
            }
            </div>)
        }


        <ul>
        {
            storeDataSubs.map((x,index)=>
            {
                if(x.memberId==props.data2._id)
                {
                    return <li key={index}>
                       {/* {x.dataMovieById[0].movieName},{x.date}  */}

                       <Link to={"/homePage"} onClick={()=>sessionStorage.setItem('movieSelectID',x.dataMovieById[0].dataMovieById)}>
                        {x.dataMovieById[0].movieName}</Link>
                       , {x.date}
                    
                    
                    </li>
                }
            })
        }
        </ul>

        </div>
      </div>
      <br/>
    </div>
  )
}

export default Member
