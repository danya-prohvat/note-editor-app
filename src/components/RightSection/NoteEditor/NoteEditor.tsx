import React from 'react';
import styles from "./NoteEditor.module.scss";
import classNames from 'classnames';


const NoteEditor: React.FC = () => {
    return (<div className={classNames(styles.noteEditor)}>
        <div className={classNames(styles.noteEditor__title)}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title"/>
        </div>
        <div className={classNames(styles.noteEditor__description)}>
            <label htmlFor="description">Description</label>
            <textarea id="description"></textarea>
        </div>
        <button className={classNames(styles.noteEditor__saveButton)}>Save</button>
    </div>);
}


export default NoteEditor;
