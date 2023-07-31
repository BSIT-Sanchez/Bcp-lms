import React from 'react'
import { UserButton } from '@clerk/clerk-react'

function Settingscreen() {
  return (
    <div>
      <h1>Settingscreen</h1>
      <a href="/">Homepage</a>
      <UserButton />
      
    </div>
  )
}

export default Settingscreen