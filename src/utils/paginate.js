// Paginate will return array of arrays

export default function paginate(users) {
  // console.log(users)
  const itemsPerPage = 2
  const page = Math.ceil(users.length / itemsPerPage)
  const newUsers = Array.from({length: page}, (_,idx)=> {
    const start = idx*itemsPerPage
    return users.slice(start,start+itemsPerPage)
  })
  console.log(newUsers, "in paginate")
  return newUsers
}
