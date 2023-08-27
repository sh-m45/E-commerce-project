import React, { Fragment, useEffect, useRef, useState } from 'react'
import style from './CurrancyFormat.module.css'
export default function CurrancyFormat(props) {
    let isNegative = false;
    let currancyNumber = useRef(null)

    function currencyTextFormat(num, isNegative) {
        num = isNegative ? Number(num) : Number(num);
        return 'AED ' + (isNegative ? '(' : '') + (Number(num).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')) + (isNegative ? ')' : '')
    }
    if (props.value < 0) {
        // currancyNumber.current.style.color = "red";
        // console.log("currencyNumber.current :", currancyNumber.current.style)
        isNegative = true;
    }
  
    let value = currencyTextFormat(props.value == "NaN" ? 0 : props.value ?? 0, isNegative);
    return (
        <Fragment>
            <label className={style.currancyNumber}  ref={currancyNumber} > {value} </label>
        </Fragment>

    )
}
