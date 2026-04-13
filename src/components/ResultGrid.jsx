import { useDispatch, useSelector } from "react-redux"
import { setError, setResults } from "../features/searchSlice"
import { useEffect } from "react"
import { fetchPhotos, fetchVideos } from "../api/mediaApi"
import ResultCard from "./ResultCard"

const ResultGrid = () => {
    const { query, activeTab, results, loading, error } = useSelector(state => state.search)
    const dispatch = useDispatch()
    const getData = async () => {
        try{
if (activeTab == 'photos') {
            const data = await fetchPhotos(query).then(res => res.data.photos)
            dispatch(setResults(data))
            
        }
        if (activeTab == 'videos') {
            const data = await fetchVideos(query).then(res => res.data.videos)
            console.log(data)
            dispatch(setResults(data))
        }
        }catch(err){
            dispatch(setError(err.message))
        }
        
    }
    useEffect(() => {
        if (query) {
            getData()
        }
    }, [query, activeTab])
    console.log(results)
    if(error) return <h1 className="p-4 text-xl text-red-500">Error: {error}</h1>
    if(loading){
        return <h1 className="p-4 text-xl">Loading...</h1>
    }
    return (
        <div className="p-2 flex flex-wrap gap-4">
            {results.length > 0 && results.map((item) => (

                <div key={item.id}>
                    <ResultCard item={item} />
                </div>
            ))}
        </div>
    )
}

export default ResultGrid
