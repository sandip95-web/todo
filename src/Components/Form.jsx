import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Form.css'
const Form = () => {
  const[name,setName]=useState("")
  const[message,setMessage]=useState("")
    // TO POST THE TODOLIST//
  const sendData=()=>{
    const info={name,message}
    fetch("http://localhost:8000/data",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(info)
    }).then((res)=>{
      console.warn("data Accepted")
    })
  }
  return (
    <>
    <form className='main-form'>
      <label className='form-title'>
         Name <input type="text" className='form-input' value={name} onChange={(e)=>setName(e.target.value)} />
      </label>
      <label className="form-title">
        Message <textarea className='form-text' cols="70" rows="10" value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
      </label>
      <button className='btn add-btn' onClick={()=>sendData()}><Link to='/'>Submit</Link></button>
    </form>
    </>
  )
}

export default Form