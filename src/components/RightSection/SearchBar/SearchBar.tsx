import React from 'react';
import styles from "./SearchBar.module.scss";
import classNames from 'classnames';
import magnifier from "../../../assets/imgs/magnifier.svg" ;

const SearchBar: React.FC = () => {
    return (<div className={classNames(styles.searchBar)}>
        <input type="text" placeholder={'Search by title'}/>
        <img src={magnifier} alt=""/>
    </div>);
}


export default SearchBar;
