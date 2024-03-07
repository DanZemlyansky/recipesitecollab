import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../../config/api';
import './ProfilePage.css';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import ProfileRecipeCard from '../../Components/ProfileRecipe/ProfileRecipeCard';
import ProfileCookBookCard from '../../Components/ProfileCookBook/ProfileCookBookCard';

function ProfilePage() {
  const { user } = useContext(UserContext);
  const [recipe, setRecipe] = useState([]);
  const [cookbook, setCookbook] = useState([])
  const navigate = useNavigate(); 

  const userId = user._id;

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`${api}/recipe/getRecipesByUser/${userId}`);
        console.log(response.data);
        setRecipe(response.data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, []);

  useEffect(() => {
    const fetchCookBook = async () => {
      try {
        const response = await axios.get(`${api}/cookbook/getCookBookByUser/${userId}`);
        console.log(response.data);
        setCookbook(response.data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchCookBook();
  }, []);

  
  const handleNavigate = (recipeId) => {
    navigate(`/recipes/${recipeId}`); // Use navigate function to redirect
  };

  return (
    <div>
      <h1>{user.username}</h1>
      <h2>{user.email}</h2>
      <div>
        <ProfileRecipeCard handleNavigate={handleNavigate} recipe={recipe}/>
        <ProfileCookBookCard cookbook={cookbook}/>
      </div>
    </div>
  );
}

export default ProfilePage;
