import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const UserShopPage = async() => {

    const user = await currentUser()

  return (
    <div>
        <h1>UserShopPage</h1>
        <h3>Email: {user?.emailAddresses[0].emailAddress}</h3>
        <p>Name: {user?.fullName}</p>
    </div>
  )
}

export default UserShopPage