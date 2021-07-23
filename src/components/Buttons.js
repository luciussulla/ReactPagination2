import React from 'react'


// export default function Buttons({data, activePage, numPerPage, handlePaginate}) {
//   // console.log(data, activePage)
//   // console.log(numPerPage)
//   const pagesNum = Math.ceil(data.length/numPerPage)

//   const buttons = []
//   for (let pageNumber=1; pageNumber<=pagesNum; pageNumber++) {
//     buttons.push(<button key={pageNumber} className={activePage===pageNumber ? "btn active-btn" : "btn"} onClick={()=>handlePaginate(pageNumber)}>{pageNumber}</button>)
//   }

//   return (
//     <div>
//      {[buttons]}       
//     </div>
//   )
// }
