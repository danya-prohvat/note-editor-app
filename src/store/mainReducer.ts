import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IInitialState, INoteEditorData} from "../types/Types";

const initialState: IInitialState = {
    notes: [
        {title: 'aaaa', description: 'aaaa', date: 1631595835610, id: 1},
        {title: 'aca', description: 'aca', date: 1631994850954, id: 2},
        {title: 'ab', description: 'ab', date: 1631194441785, id: 3},
        {title: 'Dannil', description: 'Dannil', date: 1621594850954, id: 4},
        {title: 'js / react / css', description: 'js / react / css', date: 1671594850954, id: 5},
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
            let id: number = 1;
            state.notes.forEach(note => {
                id = Math.max(id, note.id)
            })
            if (state.notes.length > 0) {
                state.notes.forEach(note => {
                    id = Math.max(id, note.id)
                })
                id++;
            }
            state.notes.push({
                id: id,
                title: action.payload.title,
                description: action.payload.description,
                date: Date.now()
            })
            state.creatingNewNoteNow = false
            state.activeNoteId = state.notes[state.notes.length - 1].id
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
        sortNotes(state, action: PayloadAction<string>) {
            if (action.payload === 'title') {
                state.notes = state.notes.sort((firstEl, secondEl) => {
                    if (firstEl.title.toLowerCase() < secondEl.title.toLowerCase()) return -1;
                    if (firstEl.title.toLowerCase() > secondEl.title.toLowerCase()) return 1;
                    return 0;
                })

            } else if (action.payload === 'date') {
                state.notes = state.notes.sort((firstEl, secondEl) => secondEl.date - firstEl.date)
            }
        },
    },
})


export const {
    setActiveNote,
    editNote,
    createNewNote,
    deleteNote,
    toggleNoteEditorToCreating,
    sortNotes
} = mainSlice.actions
export default mainSlice.reducer