import { NavLink, Outlet } from 'react-router-dom';
import React from 'react'

const Layout = () => {
    
    return (
    <nav className="navbar">
        <NavLink 
        to='/'
        className={({isActive}) => (isActive ? 'link active' : 'link')}
        >HOME
        </NavLink>
        <NavLink  to='/about'
        className={({isActive}) => (isActive ? 'link active' : 'link')}
        >About
        </NavLink>
        <NavLink  to='/Seguros'
        className={({isActive}) => (isActive ? 'link active' : 'link')}
        >Seguros
        </NavLink>
        <NavLink  to='/api'
        className={({isActive}) => (isActive ? 'link active' : 'link')}
        >Api
        </NavLink>
        <NavLink  to='/registro'
        className={({isActive}) => (isActive ? 'link active' : 'link')}
        >Registro
        </NavLink>
        <Outlet />
        </nav>
    )
}

export default Layout