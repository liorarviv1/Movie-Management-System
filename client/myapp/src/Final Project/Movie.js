import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Movie = (props) => {
    const storeData=useSelector(state=>state.dataSubs)//לקבל מידע מהסטייט
    const navigate=useNavigate()
    const dispatch= useDispatch(); //בשביל לעביר מידע לסאור

    const edit=(id)=>
    {
        navigate("edit/"+id)
    }
    const deliteMovie=async (idMovie)=>
    {
      dispatch({type:"DELITE_MOVIE",payload:idMovie})
      let resp= await axios.delete("http://localhost:8000/api/movies/"+idMovie)
      console.log(resp.data)
      // const oldLen=sessionStorage.getItem('lenMovies')
      // const newLen=parseInt(oldLen)-1
      // sessionStorage.setItem('lenMovies',newLen)

      navigate("/homePage")


    }
    
  return (
    <div >
        <div style={{width:'600px',border:'solid 2px blue'}}>
          
        <h3>{props.data2.name} , {props.data2.yearPremiered.substring(0,4)}</h3>
        Genres: {props.data2.genres}<br/>
        <img src={props.data2.imageURL} alt={props.data2._id} style={{ maxWidth: '23%', margin: 'auto' }} /> 
        <div style={{width:'200px',border:'solid 2px black',float: 'right' ,padding:"25px"}}> 
        <h3>Subscriptions watched</h3>
        {
          
            storeData.map((x,index)=>
            {
              if(props.data2._id==x.movieId)
              {
                return <li
                key={index}>
                     {/* {x.dataMemberById[0].fullNameMember} , {x.date} */}

                     <Link to={"editMember/"+x.memberId}  >{x.dataMemberById[0].fullNameMember}</Link>, {x.date}

                     </li>
              }
              })
        } 
        </div>
        <br/> <br/> <br/>
        <button onClick={()=>edit(props.data2._id)}>Edit movie</button> &nbsp;
        <button onClick={()=>deliteMovie(props.data2._id)}>Delete movie</button>
        
      </div>
      <br/>
    </div>
  )
}

export default Movie
