import React from 'react';
import styles from "./Note.module.scss";
import classNames from 'classnames';
import {INoteProps} from "../../../../types/Types";


const Note: React.FC<INoteProps> = ({title, date, id, noteOnClick, active}) => {

    function getDateInString(propsDate: number): string {
        let date = new Date(propsDate);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return `${day < 10 ? '0' + day : day}:${month < 10 ? '0' + month : month}:${year}`;
    }

    return (<div onClick={() => noteOnClick(id)} className={classNames(styles.note, {[styles.note_active]: active})}>
        <span className={classNames(styles.note__title)}>{title}</span>
        <span className={classNames(styles.note__date)}>{getDateInString(date)}</span>
    </div>);
}


export default Note;
