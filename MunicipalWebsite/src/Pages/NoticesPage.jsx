import React from 'react'
import Notices from '../Components/Notices/Notices';
import noticesInfo from '../NoticesInfo/NoticesInfo';



function NoticePage() {
  return (
    <>
    <div className="bg-gray-200 py-4">
        <h1 className="text-center text-2xl md:text-4xl">
          ALL NOTICES
        </h1>
      </div>

      {noticesInfo.slice(0,8).map((notice) => (
    <Notices
      key={notice.id}          
      title={notice.title}
      description={notice.description}
      img={notice.img}         
      category={notice.category}
      date={notice.date}
    />
  ))}
    </>
  )
}

export default NoticePage