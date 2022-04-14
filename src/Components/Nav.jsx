import React from 'react'
import {RiTodoLine} from 'react-icons/ri'
import {AiFillPlusCircle} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import './Nav.css'
const Nav = () => {
  return (
    <nav>
        <div className="container">
            <div className="title">
            <Link className='nav-link' to='/'><h1><RiTodoLine/> MY TODO</h1></Link>
            </div>
            <ul className="nav-menu">
                <div className="nav-item">
                <Link to='/addtodo'><button className='add-btn'><li className="nav-link"><AiFillPlusCircle/> Add Todo </li></button></Link>
                </div>
            </ul>
        </div>
    </nav>
  )
}

export default Nav