import React from 'react'

export default function Member({email, phone, photo}) {

  return (
    <div className="member">
      <img className="picture" src={photo} />
      <div className="info">
       <p className="name">{email}</p>
       <p className="name">{phone}</p>
      </div>
    </div>
  )

}