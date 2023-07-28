import React, { Fragment } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import style from './DropdownMenu.module.css'
const options = [
    'English', 'Arabic'
];
const defaultOption = options[0];

export default function DropdownMenu() {
    return (
        <Fragment>
            <Dropdown controlClassName={style.DropdownStyle} arrowClassName={style.ArrowDropdown} options={options} value={defaultOption} placeholder="Select an option" />
        </Fragment>
    )
}
