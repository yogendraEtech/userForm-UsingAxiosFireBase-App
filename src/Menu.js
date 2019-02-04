import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Menu.scss'

export default () => {
    return (
        <div className='menu-div'>
            <Link className='menu' to="/addUser">Add User</Link>
            <Link  className='menu' to="/userList">View Existing USer's List</Link>
        </div>
    )
}