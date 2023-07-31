import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex justify-center items-center gap-3">
      <div>
        <h2 className="text-red">AndoyShop</h2>
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <UserButton/>
      </div>
      <div>
        <UserButton/>
      </div>
    </div>
  )
}

export default Navbar