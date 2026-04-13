import { useEffect, useState } from 'react'
import './App.css'
// import { useDispatch, useSelector } from 'react-redux'
// import { increment, incrementByAmount } from './features/counterSlice'

import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaApi'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'

const App = () => {
  const [photos, setPhotos] = useState([])
  useEffect(()=>{             
    // if I m using async await here then I m getting error here , it stops my ui render why 
    // because useEffect is not expecting a promise to be returned from it
    // and when we use async await it returns a promise so that is why we are using then here
    // Either it should be like this or we can use an IIFE (Immediately Invoked Function Expression) to use async await inside useEffect
    // const res= fetchPhotos().then((res)=>{
    //   return res.data.photos[0].src.original  
    // })

    
   return ()=>{};
  },[])

  const getPhotos=async ()=>{
    const response= await fetchPhotos().then(res=> res.data.photos)
    console.log(response)
    setPhotos(response)
  }
  return (
    <div>
      <h1 className='w-full bg-gray-200'>Redux Toolkit Demo</h1>
      {/* {photos.length>0 && photos.map((item)=>(
        
          <img  key={item.id} src={item.src.original} alt={item.alt} />
       
      ))} */}
      <Tabs/>
      <SearchBar />
      <ResultGrid />
      <button className="border p-2 m-2 bg-blue-500 text-white rounded" onClick={()=>{getPhotos()}}>Fetch Photos</button>
      <button className="border p-2 m-2 bg-blue-500 text-white rounded" onClick={()=>fetchVideos()}>Fetch Videos</button>
    </div>
  )
}

export default App

// function App() {
//   const selector = useSelector((state)=>state.counter.value) 
//   // state.counter.value--> counter is reducerName present in store
//   // value here is referring to the name of valriable defined inside initialState object
//   const dispatch = useDispatch()

//   return (
//     <><h1>Counter {selector}</h1>
//     {/* dispatch(increment()) --> you need to dispatch an action 
//     and that action is also gonna be an event handler thats why its increment()  */}
//     <button onClick={(e)=>{dispatch(increment())}}>Increment</button> 
//     <button onClick={()=>dispatch(incrementByAmount(10))}>Increment By Amount</button>
//     </>
//   )
// }

// export default App
