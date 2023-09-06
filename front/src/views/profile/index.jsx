import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { navigate } from 'wouter/use-location'
import { getUserById } from '../../api/userApi'
import { setUser } from '../../features/userSlice'
import BusinessProfile from './BusinessProfile'
import PersonProfile from './PersonProfile'


const UserProfile = () => {
    const user = useSelector(state => state.user)
    useEffect(() => {
      getUserById(user.id, user.token).then(response => {
        if (response.status == 200) {
        } 
      }).catch(err =>
        navigate('/')
      )
    })

    if (user.type == "person") return (
      <div className='flex justify-center w-full'>
      <PersonProfile user={user}/>
    </div>
    ); else if (user.type == "business") return (
      <div  className='flex justify-center w-full'>
        <BusinessProfile user={user}/>
      </div>
    )
 
}

export default UserProfile
