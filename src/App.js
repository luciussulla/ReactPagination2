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

  const handleClick = (idx)=> {
    setPage(idx)
    console.log(idx)
  }

  useEffect(()=> {
     if(loading)return
     console.log('in effect', returnData)
     setUsers(returnData[page])
  },[loading, page])

  const nextPage = ()=> {
    setPage(oldPage=> {
      let nextPage = oldPage +1
      if(nextPage> returnData.length-1) {
        nextPage =0
      }
      return nextPage
    })
  }

  const prevPage = ()=> {
    setPage(oldPage=> {
      let prevPage = oldPage - 1
      if(prevPage < 0) {
        prevPage = returnData.length-1
      }
      return prevPage
    })
  }

  return (
    <div className="App">
      <section className="members-section">
        {loading ? "loading..." : users.map(item=> {
          return <Member key={item.email} {...item}/>
        })}
      </section>
        { !loading && <div className="btn-container">
          <button className="page-btn prev-btn" onClick={prevPage}>prev</button>
          {returnData.map((item, idx)=> {
            return <button  key={idx} 
                            className={`page-btn ${idx===page && 'active'}`}
                            onClick={()=> handleClick(idx)}>
              {idx+1}
            </button>
          })
          }
          <button className="page-btn next-btn" onClick={nextPage}>next</button>
          </div>
        }
    </div>
  );
}

export default App;