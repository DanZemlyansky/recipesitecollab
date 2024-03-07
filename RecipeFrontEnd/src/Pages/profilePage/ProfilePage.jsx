import React,{useContext} from 'react'
import "./ProfilePage.css"
import { UserContext } from '../../context/UserContext';

function ProfilePage() {
  const {user} = useContext(UserContext)
 
  return (
    <div>
      <h1>{user.username}</h1>
      <h2>{user.email}</h2>
    </div>
  )
}

export default ProfilePage