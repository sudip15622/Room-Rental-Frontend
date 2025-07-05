"use client"
import { getProfile } from '@/actions/user'
import React, {useEffect, useState} from 'react'

const Dashboard = () => {

    const [profile, setProfile] = useState<any> (null);
    useEffect(() => {
      const getUserProfile= async () => {
        return await getProfile();
      }
      setProfile(getUserProfile());
    }, [])
    
  return (
    <main>
      {profile ? JSON.stringify(profile) : "Loading..."}
    </main>
  )
}

export default Dashboard
