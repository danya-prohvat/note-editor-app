import React from 'react';
import styles from "./Notes.module.scss";
import classNames from 'classnames';
import Note from "./Note/Note";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {setActiveNote, toggleNoteEditorToCreating} from './../../../store/mainReducer';

const Notes: React.FC = () => {
    const {notes, activeNoteId} = useTypedSelector(state => state.mainReducer)
    const dispatch = useDispatch();

    const noteOnClick = (id: number): void => {
        dispatch(setActiveNote(id))
    }
    const newButtonOnClick = (): void => {
        dispatch(toggleNoteEditorToCreating())
    }

    return (<div className={classNames(styles.notes)}>
        <button onClick={newButtonOnClick} className={classNames(styles.notes__newButton)}>+ New</button>

        {notes.map(note => <Note key={note.id} noteOnClick={noteOnClick} id={note.id} title={note.title}
                                 date={note.date}
                                 active={activeNoteId === note.id}/>)}
    </div>);
}


export default Notes;
