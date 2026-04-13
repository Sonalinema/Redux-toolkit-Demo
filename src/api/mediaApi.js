import axios from "axios";

const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
// our api call will be like this 
// "https://api.pexels.com/v1/search?query=nature&per_page=1"
// this will be send from axios in terms of query and params 
 // we can also use fetch for that we will be using createAsyncThunk 
 // in our searchSlice and then we can directly call that async thunk 
 // in our component and it will handle all the states for us like loading , 
 // error and results but here we are doing it manually to understand the flow of data
 //  and how we can handle different states in our redux store
export async function fetchPhotos(query) {
    const res = await axios.get('https://api.pexels.com/v1/search',{
        params:{query:query,per_page:10},      // here query=nature&per_page=1 this will be passed as params
        headers:{
            Authorization: PEXELS_KEY
        }
    });
    return res;
}
//instead of above code we can also use fetch for that we will be using createAsyncThunk in our searchSlice and then we can directly call that async thunk in our component and it will handle all the states for us like loading , error and results but here we are doing it manually to understand the flow of data and how we can handle different states in our redux store    

// "https://api.pexels.com/v1/videos/search?query=nature&per_page=1"

export async function fetchVideos(query) {
    const res = await axios.get('https://api.pexels.com/v1/videos/search',{
        params:{query:query,per_page:10},      // here query=nature&per_page=1 this will be passed as params
        headers:{
            Authorization: PEXELS_KEY
        }
    });
    return res;
}