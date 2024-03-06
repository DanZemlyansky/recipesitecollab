import React,{useState,useEffect} from 'react'
import { api } from '../../config/api'
import axios from 'axios';
import './CookBook.css'
import CookBookCard from '../../Components/CookbookCard/CookBookCard';

export default function CookBook() {
  const [cookbook, setCookBook] = useState([])  

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${api}/cookbook/getCookbooks`);
            setCookBook(response.data);
            console.log(cookbook);
          } catch (error) {
            console.error("Error fetching recipe:", error);
          }
        };
    
        fetchData();
      }, []);
  return (
    <div>
      <CookBookCard cookbook={cookbook}/>
    </div>
  )
}
