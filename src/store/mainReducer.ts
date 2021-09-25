import {createSlice} from '@reduxjs/toolkit'
import {IInitialState} from "../types/Types";

const initialState: IInitialState = {
    notes: [
        {title: 'fasdfasd sdfsdf gfshs', date: 1631594835610, id: 1},
        {title: 'rrrrrrrrrrr ttttttttttt', date: 1631594844785, id: 2},
        {title: 'Dannilll hjghj', date: 1631594850954, id: 3},
    ],
    activeNoteId: 2,
}

const mainSlice = createSlice({
    name: 'mainReducer',
    initialState,
    reducers: {
        // toggleFetching(state) {
        //     state.fetching = !state.fetching
        // },
    },
})


export const {} = mainSlice.actions
export default mainSlice.reducer