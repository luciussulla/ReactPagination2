import './App.css';
import Member from './components/Member'
import paginate from './utils/paginate'
import React, {useState} from 'react'
import Buttons from './components/Buttons'

const data = [
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

function App() {
  const [people, setPeople] = useState(data)
  const [activePage, setActivePage] = useState(1)

  const handlePaginate = (activePage)=> {
    const peopleArray = paginate(data,numPerPage,activePage)
    setPeople(peopleArray)
    setActivePage(activePage)
    console.log(peopleArray, activePage)
  }

  return (
    <div className="App">
      <section className="members-section">
        {people.map(item=> {
          return <Member key={item.id} {...item}/>
        })}
      </section>
      <div className="pagination-buttons">
        <Buttons data={data} activePage={activePage} numPerPage={numPerPage} handlePaginate={handlePaginate}/>
      </div>
    </div>
  );
}

export default App;
