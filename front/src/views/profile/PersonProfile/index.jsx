import React from 'react'
import { CardProfile } from '../components/CardProfile'

const PersonProfile = ({user}) => {
  return (
    <div>
      <CardProfile user={user}/>
    </div>
  )
}

export default PersonProfile
