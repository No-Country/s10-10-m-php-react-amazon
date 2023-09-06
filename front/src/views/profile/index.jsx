import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getUserById } from '../../api/userApi'
import { setUser } from '../../features/userSlice'
import BusinessProfile from './BusinessProfile'
import PersonProfile from './PersonProfile'


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

    if (user.type == "business") return (
      <div className='flex justify-center w-full'>
      <PersonProfile user={user}/>
    </div>
    ); else return (
      <div  className='flex justify-center w-full'>
        <BusinessProfile user={user}/>
      </div>
    )
 
}

export default UserProfile
