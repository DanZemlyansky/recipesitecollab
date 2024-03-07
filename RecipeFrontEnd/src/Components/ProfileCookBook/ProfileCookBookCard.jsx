import React from 'react'

export default function ProfileCookBookCard({cookbook}) {
  return (
    <div>
        <h1>My Cook Books</h1>
      {cookbook.map((item)=>{
        return (
            <div>
                <h1>{item.name}</h1>
                <h1>{item.price}$</h1>
            </div>
        )
      })}
    </div>
  )
}
