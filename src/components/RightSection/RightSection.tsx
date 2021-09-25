import React from 'react';
import styles from "./RightSection.module.scss";
import classNames from 'classnames';
import SearchBar from "./SearchBar/SearchBar";
import NoteEditor from "./NoteEditor/NoteEditor";


const RightSection: React.FC = () => {
    return (<div className={classNames(styles.rightSection)}>
        <SearchBar/>
        <NoteEditor/>
    </div>);
}


export default RightSection;
