import React, { Fragment } from 'react'
import style from './FiveStarRating.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
export default function FiveStarRating(props) {
    return (
        <Fragment>
            <p className={style.titleRating}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <span className={style.ratingNumber}>{props.productRate}</span>
            </p>
        </Fragment>
    )
}
