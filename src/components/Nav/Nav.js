import React from 'react'
import "./Nav.css"
import {Link} from 'react-router-dom'
const Nav = () => {
    return (
        <nav className="nav">
           <Link to="/"> UserList</Link>
        </nav>
    )
}

export default Nav
