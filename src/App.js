import './App.css';
import Member from './components/Member'
import paginate from './utils/paginate'
import React, {useState, useEffect} from 'react'
import Buttons from './components/Buttons'
import useFetch from './components/useFetch'

const defaultdata = [
  {id:1, name: "name"}, 
  {id:2, name: "bobo"}, 
  {id:3, name: "mimi"}, 
  {id:4, name: "name"}, 
  {id:5, name: "bobo"}, 
  {id:6, name: "mimi"}, 
  {id:7, name: "name"}, 
  {id:8, name: "bobo"}, 
  {id:9, name: "mimi"}, 
  {id:10, name: "mimi"}, 
]
const numPerPage = 3
const url = 'https://randomuser.me/api/?results=4'

function App() {
  const {loading, returnData} = useFetch(url)
  const [page, setPage] = useState(0)
  const [users, setUsers] = useState([])

  useEffect(()=> {
     if(loading)return
     console.log('in effect', returnData)
     setUsers(returnData[page])
  },[loading])

  console.log(returnData)
  return (
    <div className="App">
      <section className="members-section">
        {loading ? "loading..." : users.map(item=> {
          return <Member key={item.email} {...item}/>
        })}
      </section>
      <div className="pagination-buttons">
        {/* <Buttons data={data} activePage={activePage} numPerPage={numPerPage} handlePaginate={handlePaginate}/> */}
      </div>
    </div>
  );
}

export default App;