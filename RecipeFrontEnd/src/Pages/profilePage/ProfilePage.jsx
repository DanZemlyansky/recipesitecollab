import React,{useState,useEffect} from 'react'
import { api } from '../../config/api';
import "./ProfilePage.css"

function ProfilePage() {
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${api}/recipe/getRecipes`);
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    // fetchUser();
  }, []);
  return (
    <div>Profile</div>
  )
}

export default ProfilePage