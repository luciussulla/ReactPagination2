import React from 'react'

export default function Member({id, name}) {
  return (
    <div className="member">
      <span>{id}</span> <span> {name}</span>
    </div>
  )
}