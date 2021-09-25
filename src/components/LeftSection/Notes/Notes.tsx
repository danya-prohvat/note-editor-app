import React from 'react';
import styles from "./Notes.module.scss";
import classNames from 'classnames';
import Note from "./Note/Note";
import {useTypedSelector} from "../../../hooks/useTypedSelector";


const Notes: React.FC = () => {
    const {notes, activeNoteId} = useTypedSelector(state => state.mainReducer)
    return (<div className={classNames(styles.notes)}>
        <button className={classNames(styles.notes__newButton)}>+ New</button>

        {notes.map(note => <Note key={note.id} title={note.title} date={note.date} active={activeNoteId === note.id}/>)}
    </div>);
}


export default Notes;
