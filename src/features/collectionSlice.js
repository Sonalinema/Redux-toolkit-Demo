import { createSlice } from "@reduxjs/toolkit";

const collectionSlice = createSlice({
    name:'collection',
    initialState:{
        collectionList: JSON.parse(localStorage.getItem('collection')) || []
    },
    reducers:{
        addToCollection(state,action){
            state.collectionList.push(action.payload);
            localStorage.setItem('collection', JSON.stringify(state.collectionList));
        },
        removeFromCollection(state,action){
            state.collectionList = state.collectionList.filter(item=>item.id !==action.payload.id)
            localStorage.setItem('collection', JSON.stringify(state.collectionList));
        }
    }
})
 export const {addToCollection, removeFromCollection} = collectionSlice.actions;
 export default collectionSlice.reducer;