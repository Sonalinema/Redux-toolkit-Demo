import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementByAmount } from './features/counterSlice'

function App() {
  const selector = useSelector((state)=>state.counter.value) 
  // state.counter.value--> counter is reducerName present in store
  // value here is referring to the name of valriable defined inside initialState object
  const dispatch = useDispatch()

  return (
    <><h1>Counter {selector}</h1>
    {/* dispatch(increment()) --> you need to dispatch an action 
    and that action is also gonna be an event handler thats why its increment()  */}
    <button onClick={(e)=>{dispatch(increment())}}>Increment</button> 
    <button onClick={()=>dispatch(incrementByAmount(10))}>Increment By Amount</button>
    </>
  )
}

export default App
