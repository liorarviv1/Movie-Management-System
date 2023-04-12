import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Member from './Member'

const AllMembers = () => {
  const storeDataMembers=useSelector(state=>state.dataMembers)//לקבל מידע מהסטייט
  const storeDataSubs=useSelector(state=>state.dataSubs)//לקבל מידע מהסטייט
  const dispatch=useDispatch() //להעביר מידע
  const [allMembersSeacrch, setAllMembersSeacrch] = useState([])

  useEffect(() => {
    // console.table(storeDataMembers)
    // async function getAll()
    // {
    //   let resp3= await axios.get("http://localhost:8000/api/members")
    //   dispatch({type:"LOADDATA3",payload:resp3.data})
    // }getAll()
    setAllMembersSeacrch(storeDataMembers)
  }, [])
  const movieSearch=(e)=>
  {
    // setSearchMovie(e.target.value)
    // let arr2=storeData.filter(x=>x.name.includes(e.target.value))
    // setallMovieSearch(arr2)
    const searchValue = e.target.value.toLowerCase().trim(); // normalize search value

    const filteredMovies = storeDataMembers.filter(member => member.fullName.toLowerCase().includes(searchValue));
    setAllMembersSeacrch(filteredMovies);
  }
  


  return (
    <div className={'centerAll'} >
      <br/>
      {/* <div style={{width:'400px',border:'solid 2px blue'}}> */}
      <div style={{width:'600px'}} >
      Search member:<input type={"text"} onChange={movieSearch}/> 
      <div  >
      {
        allMembersSeacrch.map((x,index)=>
        {
          return <Member data2={x} key={index}/>
        })
      }
      </div>
        
      </div>
    </div>
  )
}

export default AllMembers
