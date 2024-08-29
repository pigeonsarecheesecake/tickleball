import axios from 'axios'

const Court = ({court, update, setUpdate}) => {
  const {court:courtNumber, selected, _id}= court
  const handleClick = async () => {
    try {
      await axios.put(`http://localhost:3000/courts`,{
        _id: _id,
        selected: !selected
      })
      setUpdate(!update)
    } catch (error) {
      console.log(error.message)
    }
  }
  
  return (
    <div className={`h-[50px] border border-2 ${selected ? 'bg-[#7A8FC2]' : 'bg-[#C2C2C2]'}  mb-4 flex justify-center items-center`} onClick={handleClick} >
      <p className='text-sm'>{courtNumber}</p>
    </div>
  )
}

export default Court