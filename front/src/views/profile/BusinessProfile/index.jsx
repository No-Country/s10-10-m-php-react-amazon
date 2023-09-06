import React from 'react'
import { CardProfile } from '../components/CardProfile'
import Packs from '../components/Packs'

const BusinessProfile = ({user}) => {
  return (
    <div>
      <CardProfile user={user}/>
      <Packs/>
    </div>
  )
}

export default BusinessProfile
