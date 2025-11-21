import React from 'react'
import visitData from '../visitdata/visitdata'
import VisitPageCard from '../Components/VisitPageCard/VisitPageCard'
function Visit() {
  return (
    <>
    <div className='bg-slate-200 flex flex-wrap mt-8 justify-center gap-3'>
    {
        visitData.map((Visitingplace)=>(<VisitPageCard 
        place={Visitingplace}       
        />))
    }
     </div>
    </>
  )
}

export default Visit