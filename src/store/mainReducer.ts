import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IInitialState, INoteEditorData} from "../types/Types";

const initialState: IInitialState = {
    notes: [
        {title: 'fasdfasd sdfsdf gfshs', description: 'fsdfsd', date: 1631594835610, id: 1},
        {title: 'rrrrrrrrrrr ttttttttttt', description: 'fsdfsdtgdfgdf', date: 1631594844785, id: 2},
        {title: 'Dannilll hjghj', description: 'fsdfsd mmn', date: 1631594850954, id: 3},
    ],
    creatingNewNoteNow: false,
    activeNoteId: 1,
}

const mainSlice = createSlice({
    name: 'mainReducer',
    initialState,
    reducers: {
        setActiveNote(state, action: PayloadAction<number>) {
            state.activeNoteId = action.payload
            state.creatingNewNoteNow = false
        },
        editNote(state, action: PayloadAction<INoteEditorData>) {
            state.notes = state.notes.map(note => {
                if (note.id === state.activeNoteId)
                    return {...note, title: action.payload.title, description: action.payload.description}
                else return note
            })
        },
        createNewNote(state, action: PayloadAction<INoteEditorData>) {
            let id = state.notes.length > 0 ? state.notes[state.notes.length - 1].id + 1 : 1
            state.notes.push({
                id: id,
                title: action.payload.title,
                description: action.payload.description,
                date: Date.now()
            })
            state.creatingNewNoteNow = false
            state.activeNoteId = state.notes[state.notes.length-1].id
        },
        deleteNote(state) {
            state.notes = state.notes.filter(note => note.id !== state.activeNoteId)
            if (state.notes.length > 0) {
                state.activeNoteId = state.notes[0].id
            } else {
                state.creatingNewNoteNow = true
                state.activeNoteId = null
            }
        },
        toggleNoteEditorToCreating(state) {
            state.creatingNewNoteNow = true
            state.activeNoteId = null
        },
    },
})


export const {setActiveNote, editNote, createNewNote, deleteNote, toggleNoteEditorToCreating} = mainSlice.actions
export default mainSlice.reducer