import React from 'react';
import styles from "./FilterBar.module.scss";
import classNames from 'classnames';
import filterArrows from "../../../assets/imgs/filterArrows.svg"

const FilterBar: React.FC = () => {
    return (<div className={classNames(styles.filterBar)}>
        <div className={classNames(styles.filterBar__filter)}>
            <span>Title</span>
            <img src={filterArrows} alt=""/>
        </div>
        <div className={classNames(styles.filterBar__filter)}>
            <span>Date</span>
            <img src={filterArrows} alt=""/>
        </div>
    </div>);
}


export default FilterBar;
