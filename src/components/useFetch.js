import React, {useState, useEffect} from 'react'

export default function useFetch(url) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  const getUsers = async ()=> {
    // setLoading(true)
    const res = await fetch(url)
    const data = await res.json()
    const usersData = data.results
    const users = usersData.map(user=> {
      return {
        email: user.email, 
        phone: user.phone, 
        photo: user.picture.thumbnail,
      }
    })
    console.log(users)
    setData(users)
    setLoading(false)
  } 

  useEffect(()=> {
    getUsers()
  }, [url])

  return {loading, data}
}
