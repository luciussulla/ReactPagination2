import React, {useState, useEffect} from 'react'
import paginate from '../utils/paginate'

export default function useFetch(url) {
  const [loading, setLoading] = useState(true)
  const [returnData, setReturnData] = useState(null)

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
    console.log(users, "In fetch")
    const paginatedUsers = paginate(users)
    // setReturnData(()=> {
    //   console.log(paginate(users), "in setReturn Data")
    //   return paginate(users)
    // })
    setReturnData(paginatedUsers)
    setLoading(false)
  } 

  useEffect(()=> {
    getUsers()
  }, [url])

  return {loading, returnData}
}
