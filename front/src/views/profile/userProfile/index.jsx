import React, { useEffect } from 'react'
import { UserCardProfile } from './userCardProfile'
import {useDispatch, useSelector} from 'react-redux'
import { useRoute } from 'wouter'
import { getUserById } from '../../../api/userApi'
import { setUser } from '../../../features/userSlice'


const UserProfile = () => {
    const user = useSelector(state => state.user)

    const dispatch = useDispatch()
    useEffect(() => {
      getUserById(user.id, user.token).then(response => {
        if (response.status == 200) {
          dispatch(setUser(response.data))
        } 
      })
    })
  return (
    <div>
      <UserCardProfile user={user}/>
    </div>
  )
}

export default UserProfile
