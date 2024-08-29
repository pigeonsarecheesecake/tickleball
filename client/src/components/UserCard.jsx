import axios from 'axios'
import React, { useState } from 'react'

const UserCard = ({tickler, setUpdate, update}) => {
  const {status,_id, name} = tickler
  const [user, setUser] = useState('')
  const handleClick = async () => {
    try {
      const {data} = await axios.put(`http://localhost:3000/`,{
        _id: _id,
        status: !status
      })
      setUpdate(!update)
    } catch (error) {
      console.log(error.message)
    }
  }
 
  return (
    <div className='border p-4 flex justify-between rounded-[10px] relative shadow-lg'  onClick={handleClick}>
      <p className='text-sm'>{name}</p>
      {status && (<svg className='absolute right-3' width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.33325 6.50958L5.43582 10.5837L14.6666 1.41699" stroke="#B8E6B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>)}
      {!status && (<svg className='absolute right-3 ' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0834 7.91701L7.91676 12.0837M7.91675 7.91699L12.0834 12.0837" stroke="#DB8484" strokeWidth="1.5" strokeLinecap="round"/><path d="M5.83341 2.78184C7.05914 2.0728 8.48225 1.66699 10.0001 1.66699C14.6024 1.66699 18.3334 5.39795 18.3334 10.0003C18.3334 14.6027 14.6024 18.3337 10.0001 18.3337C5.39771 18.3337 1.66675 14.6027 1.66675 10.0003C1.66675 8.48249 2.07256 7.05938 2.7816 5.83366" stroke="#DB8484" strokeWidth="1.5" strokeLinecap="round"/></svg>)}
    </div>
  )
}

export default UserCard