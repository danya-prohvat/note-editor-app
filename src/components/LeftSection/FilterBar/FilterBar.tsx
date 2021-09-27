import React from 'react';
import styles from "./FilterBar.module.scss";
import classNames from 'classnames';
import filterArrows from "../../../assets/imgs/filterArrows.svg"
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {sortNotes} from './../../../store/mainReducer';


const FilterBar: React.FC = () => {
    const dispatch = useDispatch();

    const filterOnClick = (event: React.MouseEvent<HTMLDivElement>): void => {
        dispatch(sortNotes(event.currentTarget.id));
    }

    return (<div className={classNames(styles.filterBar)}>
        <div onClick={filterOnClick} id="title"
             className={classNames(styles.filterBar__filter)}>
            <span>Title</span>
            <img src={filterArrows} alt=""/>
        </div>
        <div onClick={filterOnClick} id="date" className={classNames(styles.filterBar__filter)}>
            <span>Date</span>
            <img src={filterArrows} alt=""/>
        </div>
    </div>);
}


export default FilterBar;
