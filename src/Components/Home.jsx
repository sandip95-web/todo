import React,{useState,useEffect} from 'react'
import './Home.css'
import {RiDeleteBin6Line} from 'react-icons/ri'
const Home = () => {
  const[data,setData]=useState([])
  // TO POST THE TODOLIST//
  useEffect(()=>{
    getData();
  },[data])
  const getData=()=>{
    fetch("http://localhost:8000/data").then((res)=>{
      res.json().then((result)=>{
        console.warn(result)
        setData(result)
      })
    })
  }


  // TO DELETE THE TODOLIST //
  const deleteTodo=(id)=>{
      fetch(`http://localhost:8000/data/${id}`,{
        method:'DELETE'
      }).then((res)=>{
        res.json().then((result)=>{
          getData();
        })
      })
  }
  return (
    <>
     <section>
          {
            data.map((item)=>{
              return(
                <div className="todo-main">
                      <div className="todo-name">{item.name}</div>
                      <div className="todo-message">{item.message}</div>
                      <div className="delete">
                        <button className='del-btn' onClick={()=>deleteTodo(item.id)}><RiDeleteBin6Line /></button>
                      </div>
              </div>
              )
            })
          }
     </section>
    </>
  )
}

export default Home