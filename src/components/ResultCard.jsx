import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCollection, removeFromCollection } from '../features/collectionSlice'

const ResultCard = ({item}) => {
    const activeTab= useSelector(state=>state.search.activeTab)
    const dispatch = useDispatch()
    const saveData = (item) => {
        dispatch(addToCollection(item))
    }
  return (
    <div className='w-[18vw] h-80 overflow-hidden relative rounded-xl '>
        <a>
        {activeTab =='photos' && <img className='w-full h-full object-cover object-center' src={item.src.original} alt={item.alt} />}
        {activeTab=='videos' && <video src={item.video_files[0].link}  className='w-full h-full object-cover'>
        </video>}  
        </a>     
      <div id="bottom" className='flex absolute justify-between gap-3 items-center p-2 text-white w-full bottom-0 left-0'>
        <button className='bg-blue-500 text-white px-4 py-2 rounded overflow-hidden' onClick={(e)=>dispatch(addToCollection(item))}>Save</button>
        <button className='bg-blue-500 text-white px-4 py-2 rounded overflow-hidden' onClick={()=>dispatch(removeFromCollection(item))}>Remove</button>
      </div>
    </div>
  )
}

export default ResultCard
