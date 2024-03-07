import React from 'react'

export default function SingleCookBookCard({cookbook}) {
  console.log(cookbook);
  return (
    <div>
      <h1>{cookbook.name}</h1>
    </div>
  )
}
