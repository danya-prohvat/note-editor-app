import React from 'react';
import styles from "./RightSection.module.scss";
import classNames from 'classnames';
import SearchBar from "./SearchBar/SearchBar";


const RightSection: React.FC = () => {
    return (<div className={classNames(styles.rightSection)}>
        <SearchBar/>
    </div>);
}


export default RightSection;
