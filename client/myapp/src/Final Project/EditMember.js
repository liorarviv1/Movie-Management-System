import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditMember() {
    const storeData=useSelector(state=>state.dataMembers)//לקבל מידע מהסטייט
    const [editMemberData, setEditMemberData] = useState({fullName:'',email:'',city:''})
    const [isValid, setIsValid] = useState(true)


    const params=useParams()
    const navigate=useNavigate()
    const [memberId, setMemberId] = useState()

    useEffect(() => {
      // window.scrollTo(0, 0);
        let memberID=params.id;
        setMemberId(memberID)
        let arr =storeData.find(x=>x._id==memberID)
        // console.log(arr)
        setEditMemberData({fullName:arr.fullName,email:arr.email,city:arr.city})

    }, [])

    // const upDateMember=async ()=>
    // {
    //     let resp= await axios.put("http://localhost:8000/api/members/"+memberId,editMemberData)
    //     console.log(resp.data)
    //     navigate("/homePage")
    // }
    const coustomSubmit=async (e)=>
    {
      e.preventDefault()
      if(editMemberData.fullName=="" ||editMemberData.email==""||editMemberData.city=="")
      {
        setIsValid(false)
      }
      else
      {
        let resp= await axios.put("http://localhost:8000/api/members/"+memberId,editMemberData)
        console.log(resp.data)
        navigate("/homePage")
      }
    }
    
  return (
    <div>
      <form onSubmit={coustomSubmit}>
        <div>
            <br/>
            <h3>Edit Member: {editMemberData.fullName}</h3>
            Name:<input type={"text"} value={editMemberData.fullName} onChange={e=>setEditMemberData({...editMemberData,fullName:e.target.value})}/><br/>
            Email:<input type={"text"} value={editMemberData.email} onChange={e=>setEditMemberData({...editMemberData,email:e.target.value})}/><br/>
            City:<input type={"text"} value={editMemberData.city} onChange={e=>setEditMemberData({...editMemberData,city:e.target.value})}/><br/>
           
            <button>Update Member</button> &nbsp; 
            <button onClick={()=>navigate("/homePage")}>Cancel</button> <br/>
                {
                !isValid&&<span style={{color:"red"}} >*Please fill in all the fields in the form</span>
                }

        </div>
      </form>

    </div>
  )
}
