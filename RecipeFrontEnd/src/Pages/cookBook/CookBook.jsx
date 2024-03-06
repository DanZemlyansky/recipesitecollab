import React,{useState,useEffect} from 'react'
import { api } from '../../config/api'
import './CookBook.css'

export default function CookBook() {
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${api}/recipe/getRecipes`);
            setRecipe(response.data);
          } catch (error) {
            console.error("Error fetching recipe:", error);
          }
        };
    
        fetchData();
      }, []);
  return (
    <div>
      
    </div>
  )
}
