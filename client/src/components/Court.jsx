import React, { useState } from 'react'

const Court = ({court, handleCourtClick}) => {
  const {id,selected} = court
  const [status, setStatus] = useState(false)
  return (
    <div className={`h-[50px] border border-2 ${status ? 'bg-[#7A8FC2]' : 'bg-[#C2C2C2]'} mb-4 flex justify-center items-center`} onClick={() => handleCourtClick(id, setStatus)}>
      <p className='text-sm'>{id}</p>
    </div>
  )
}

export default Court