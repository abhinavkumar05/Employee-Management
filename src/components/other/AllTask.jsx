import React, {useContext} from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

  return (
    <div id='tasklist' className='bg-[#1c1c1c] p-5 rounded mt-5'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5' >Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Status</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
        </div>
        <div className=''>
            {userData.map(function(elem, idx){
            return <div key={idx} className=' mb-2 py-2 px-4 flex justify-between rounded border-emerald-400 border-2'>
            <h2 className='text-lg font-medium w-1/5' >{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 bg-blue-500'>{elem.taskNumbers.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 bg-yellow-500'>{elem.taskNumbers.active}</h5>
            <h5 className='text-lg font-medium w-1/5 bg-green-500'>{elem.taskNumbers.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 bg-red-600'>{elem.taskNumbers.failed}</h5>
        </div>
        })}
    </div>
    </div>
)}
        
        
  

export default AllTask