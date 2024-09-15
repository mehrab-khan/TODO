import React from 'react'

export default function Card({name, index, onDelete}) {
  return (
    <div>
      <ul>
        <li>{name} <button onClick={()=>onDelete(index)}>Delete</button></li>
      </ul>
    </div>
  )
}
