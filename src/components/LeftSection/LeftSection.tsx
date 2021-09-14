import React from 'react';
import styles from "./LeftSection.module.scss";
import classNames from 'classnames';
import Notes from "./Notes/Notes";
import FilterBar from "./FilterBar/FilterBar";


const LeftSection: React.FC = () => {
    return (<div className={classNames(styles.leftSection)}>
        <FilterBar/>
        <Notes/>
    </div>);
}


export default LeftSection;
