import React, { Fragment, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import style from './Header.module.css'
import DropdownMenu from '../../sharedComponents/DropdownMenu'
import logo from '../../images/egypt.jpg'
import navLogo from '../../images/paymentMethod/navLogo.jpg'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
function mapStateToProps(state) {
    return {
        cartItemsNav: state.cartItemsNav,
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}
function Header(props) {



    return (
        <Fragment>
            <div className={style.navbarStyle}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <NavLink className="navbar-brand" to={'/'}>
                            <img src={navLogo} className={style.brand} alt="" />
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className={style.searchDiv}>
                                <form className={style.searchFrom}>
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-light" type="submit">Search</button>
                                </form>
                            </div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className={style.CountryDiv}>
                                    <img className={style.CountryLogos} src={logo} />
                                </li>
                                <li className="nav-item">
                                    <DropdownMenu />
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" >Link</a>
                                </li> */}

                            </ul>

                            <div className={style.iconsDicStyle}>
                                <div className={style.DivCartItems}>
                                    <span className={style.CartItems}>
                                        {
                                            props.cartItemsNav 
                                        }
                                    </span>
                                    <FontAwesomeIcon className={style.iconStyle} icon={faCartShopping} />
                                </div>
                                <FontAwesomeIcon className={style.iconStyle} icon={faCircleUser} />
                                <NavLink className={style.signInText} to={'/login'}>Sign In</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)