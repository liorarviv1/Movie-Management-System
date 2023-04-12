import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles.css'


const AddMember = () => {
    const navigate=useNavigate()
    const [newMember, setNewMember] = useState({fullName:'',email:'',city:''})
  const [isValid, setIsValid] = useState(true)

    // const addMember=async ()=>
    // {
    //     let resp=await axios.post("http://localhost:8000/api/members",newMember)
    //     console.log(resp.data)
    //     navigate("/homePage")
    // }
    const coustomSubmit=async (e)=>
    {
      e.preventDefault()
      if(newMember.fullName=="" ||newMember.email==""||newMember.city=="")
      {
        setIsValid(false)
        // alert("nooo")
      }
      else
      {
        let resp=await axios.post("http://localhost:8000/api/members",newMember)
        console.log(resp.data)
        navigate("/homePage")
        // alert("yessss")

      }
    }
    
  return (
    <div>
        <br/>
      <div  className={'centerAll'}>
      <form onSubmit={coustomSubmit}>
        <br/>
        <h3>Add new member</h3>
        Full name<input type={"text"} onChange={e=>setNewMember({...newMember,fullName:e.target.value})}/><br/>
        Email<input type={"text"} onChange={e=>setNewMember({...newMember,email:e.target.value})}/><br/>
        City<input type={"text"} onChange={e=>setNewMember({...newMember,city:e.target.value})}/><br/>
        <button>Add Member</button> &nbsp; 
        <button onClick={()=>navigate("/subscriptions")}>Cancel</button><br/>
        {
          !isValid&&<span>Please fill in all the fields in the form</span>
        }
        </form>
      </div>
      <br/><br/>
    </div>
  )
}

export default AddMember
