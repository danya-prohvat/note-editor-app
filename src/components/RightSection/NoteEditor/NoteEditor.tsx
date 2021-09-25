import React, {useEffect, useState} from 'react';
import styles from "./NoteEditor.module.scss";
import classNames from 'classnames';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {INoteEditorData, INote} from "../../../types/Types";
import {editNote, deleteNote, createNewNote} from './../../../store/mainReducer';
import deleteIcon from "./../../../../src/assets/imgs/deleteImg.svg"

const NoteEditor: React.FC = () => {
    const {notes, activeNoteId, creatingNewNoteNow} = useTypedSelector(state => state.mainReducer)
    const dispatch = useDispatch();

    let currentlyNote: INoteEditorData | INote;
    const [noteEditorData, setNoteEditorData] = useState<INoteEditorData>({
        title: '',
        description: ''
    })

    useEffect(() => {
        if (creatingNewNoteNow) currentlyNote = {title: '', description: ''};
        else [currentlyNote] = notes.filter(note => note.id === activeNoteId);

        setNoteEditorData({
            title: currentlyNote.title,
            description: currentlyNote.description,
        })
    }, [activeNoteId, creatingNewNoteNow])

    const titleOnChange = (event: React.FormEvent<HTMLInputElement>): void => {
        setNoteEditorData({...noteEditorData, title: event.currentTarget.value})
    }
    const descriptionOnChange = (event: React.FormEvent<HTMLTextAreaElement>): void => {
        setNoteEditorData({...noteEditorData, description: event.currentTarget.value})
    }
    const saveOnClick = (): void => {
        if (creatingNewNoteNow) dispatch(createNewNote(noteEditorData));
        else dispatch(editNote(noteEditorData));
    }
    const deleteOnClick = (): void => {
        if (!creatingNewNoteNow) dispatch(deleteNote());
    }

    return (<div className={classNames(styles.noteEditor)}>
        <img src={deleteIcon} onClick={deleteOnClick} className={classNames(styles.noteEditor__deleteIcon)} alt=""/>
        <div className={classNames(styles.noteEditor__title)}>
            <label htmlFor="title">Title</label>
            <input onChange={titleOnChange} value={noteEditorData.title} type="text" id="title"/>
        </div>
        <div className={classNames(styles.noteEditor__description)}>
            <label htmlFor="description">Description</label>
            <textarea onChange={descriptionOnChange} value={noteEditorData.description} id="description"></textarea>
        </div>
        <button onClick={saveOnClick} className={classNames(styles.noteEditor__saveButton)}>Save</button>
    </div>);
}


export default NoteEditor;
