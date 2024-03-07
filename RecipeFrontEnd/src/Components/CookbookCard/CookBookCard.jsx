import React from 'react'
import './CookBookCard.css'
import { Link } from 'react-router-dom';

export default function CookBookCard({ cookbook }) {
  return (
    <div className='cookbookContainer'>
      {cookbook?.map((item) => (
        <div key={item._id} className='cookbookcard'>
          <img src={item.imgURL} alt="" />
          <h1>{item?.name}</h1>
          <h2>{item?.price}$</h2>
          <Link to={`/cookbooks/${item._id}`}>{item._id}</Link>
          <p>Created by: {item?.userId.username}</p>
        </div>
      ))}
    </div>
  )
}
