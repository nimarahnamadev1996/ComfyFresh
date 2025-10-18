import { getCurrentUserFromSupabase } from '@/actions/users'
import React from 'react'

const UserShopPage = async() => {

    const user = await getCurrentUserFromSupabase()

  return (
    <div>
        <h1>UserShopPage</h1>
        <h3>Email: {user?.data?.email}</h3>
        <p>Name: {user.data.name}</p>
    </div>
  )
}

export default UserShopPage