import React, { useEffect, useState } from 'react'
import Logo from '../components/Logo'
import UserCard from '../components/UserCard'
import Court from '../components/Court'
import axios from 'axios'

const IndexPage = () => {
  const [ticklers, setTicklers] = useState([])
  const [courts, setCourts] = useState([])
  const[count, setCount] = useState(0)
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    const fetchTicklers = async () => {
      try {
        const {data} = await axios.get('http://localhost:3000/')
        const {data:courtsData} = await axios.get('http://localhost:3000/courts')
        setCourts(courtsData)
        setTicklers(data.ticklers)
        setCount(data.count)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchTicklers()
  }, [update])
  
  const place = {
    place: "780 North St, Milford, CT 06461 (Eisenhower Park)",
    time:"8:00 pm - 10:00 pm"
  }
  
  return (
    <div className='flex flex-col items-center mt-[5vh]'>
      {/* Headers */}
      <div className="flex flex-col items-center mb-12">
        <Logo />
        <h1 className='text-3xl mb-4'>Tickleball Check-in</h1>
        {/* Location */}
        <div className="flex mb-2">
          <svg className='mr-2' width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6 7.5C5.1715 7.5 4.5 6.8285 4.5 6C4.5 5.1715 5.1715 4.5 6 4.5C6.8285 4.5 7.5 5.1715 7.5 6C7.5 6.8285 6.8285 7.5 6 7.5ZM6 3.5C4.6195 3.5 3.5 4.619 3.5 6C3.5 7.381 4.6195 8.5 6 8.5C7.3805 8.5 8.5 7.381 8.5 6C8.5 4.619 7.3805 3.5 6 3.5ZM6 14.5C5.1685 14.5045 1 8.0905 1 6C1 3.239 3.2385 1 6 1C8.7615 1 11 3.239 11 6C11 8.0625 6.8185 14.5045 6 14.5ZM6 0C2.6865 0 0 2.6865 0 6C0 8.509 5.0025 16.0055 6 16C6.982 16.0055 12 8.475 12 6C12 2.6865 9.3135 0 6 0Z" fill="#5B5B5B"/>
          </svg>
          <p className='text-sm'>{place.place}</p>
        </div>
        {/* Time */}
        <div className="flex">
          <svg className='mr-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#5B5B5B" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 4V8" stroke="#5B5B5B" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.8267 10.8267L8 8" stroke="#5B5B5B" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className='text-sm'>{place.time}</p>
        </div>
      </div>
      {/* Ticklers */}
      <div className="text-center w-[90vw] mb-12">
        {/* Title and Count */}
        <div className="mb-6">
          <h2 className='text-2xl '>Ticklers</h2>
          <p className='text-xs '>Going : {count}</p>
        </div>
        {/* Names */}
        <div className="grid grid-cols-3 gap-5 ">
          {
            ticklers.map(tickler => (
              <UserCard tickler={tickler} key={tickler._id}  setUpdate={setUpdate} update={update}/>
            ))
          }
        </div>
      </div>
      {/* Court */}
      <div className="w-full flex flex-col items-center mb-12 ">
        <h2 className='text-2xl '>Court</h2>
        <div className="w-full bg-[#728F7A] border-4 border-[#FFFFFF] w-[90%] shadow-2xl ">
          {/* Grid */}
          {courts.length > 0 && (
            <div className="grid grid-cols-4 px-4 py-8 bg-[#728F7A] divide-x ">
              {/* Courts */}
              <div className="pr-2">
                <Court court={courts[0]} setUpdate={setUpdate} update={update}/>
                <Court court={courts[1]} setUpdate={setUpdate} update={update}/>
              </div>
              <div className="px-2 ">
                <Court court={courts[2]} setUpdate={setUpdate} update={update}/>
                <Court court={courts[3]} setUpdate={setUpdate} update={update}/>
              </div>
              <div className=" px-2">
                <Court court={courts[4]} setUpdate={setUpdate} update={update}/>
                <Court court={courts[5]} setUpdate={setUpdate} update={update}/>
              </div>
              <div className="pl-2 ">
                <Court court={courts[6]} setUpdate={setUpdate} update={update}/>
                <Court court={courts[7]} setUpdate={setUpdate} update={update}/>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center  w-[90vw]   mb-12">
          <div className="w-[20px] h-[20px] bg-[#C2C2C2] border-2 border-[#FFFFFF] bg-[#7A8FC2]"></div>
          <p className='text-xs ml-2'>Reserved Courts</p>
      </div>
    </div>
  )
}

export default IndexPage



