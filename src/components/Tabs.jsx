import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { setActiveTab } from '../features/searchSlice'

const Tabs = () => {
 const dispatch = useDispatch()
 const selector = useSelector(state=>state.search.activeTab)
  return (
    <div className='cursor-pointer flex gap-4 p-4 bg-gray-100 font-semibold text-gray-700'>
      <NavLink className={`${selector=='photos' ? 'text-blue-500' : ''}`} to='/photos' onClick={()=>{dispatch(setActiveTab('photos'))}}>Photos</NavLink> 
      <NavLink className={`${selector=='videos' ? 'text-blue-500' : ''}`} to='/videos' onClick={()=>{dispatch(setActiveTab('videos'))}}>Videos</NavLink>
    </div>

  )
}

export default Tabs
