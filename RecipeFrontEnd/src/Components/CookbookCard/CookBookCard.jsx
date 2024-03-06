import React from 'react'
import './CookBookCard.css'

export default function CookBookCard({ cookbook }) {
  console.log(cookbook[0]);
  return (
    <div>
      {cookbook.map((item) => (
        <div key={item._id}>
          <h1>{item?.name}</h1>
          <h2>{item?.price}$</h2>
        </div>
      ))}
    </div>
  )
}
