import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuery } from '../features/searchSlice'

const SearchBar = () => {
    const dispatch = useDispatch()
    const selector = useSelector(state => state.search.query)
    console.log(selector)
    const [text, setText] = useState('')
    //instead of wrapping input tag inside div , you should wrap it around form tag 
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("form submitted")
        dispatch(setQuery(text))
    }
    return (
        <form onSubmit={handleSubmit} className="p-4">
            <h1>{selector}</h1>
            <label htmlFor="search">Search Your Item Here</label>
            <br />
            <input
                className="border border-gray-300 p-2 rounded hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id='search'
                value={text}
                onChange={(e) => setText(e.target.value)} />
            <button className="border border-gray-300 rounded p-2 m-5">Search</button>
        </form>
    )
}

export default SearchBar
