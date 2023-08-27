import React, { Fragment, useEffect, useRef, useState } from 'react'
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
        cartItemsNavs: state.cartItemsNavs,
        getAllDataCart: state.getAllDataCart,
        getAllDataCartLaptops: state.getAllDataCartLaptops,
        getAllDataCartTablets: state.getAllDataCartTablets,
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
function Header(props) {
    let allDataCart = props.getAllDataCart;
    let allDataCartLaptops = props.getAllDataCartLaptops;
    let allDataCartTablets = props.getAllDataCartTablets;

    let userLoginData = JSON.parse(localStorage.getItem("userLogin"));

    let navbarRef = useRef(null)

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <Fragment>
            {/* <div className={style.navbarStyle}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <NavLink className="navbar-brand" to={'/'}>
                            <img src={navLogo} className={style.brand} alt="logo" />
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

                            </ul>


                            <div className={style.iconsDicStyle}>
                                <NavLink className={style.cartIcons} to={'/cartPage'}>
                                    <div className={style.DivCartItems}>
                                        <span className={style.CartItems}>
                                            {
                                                allDataCart.length - 1
                                            }
                                        </span>
                                        <FontAwesomeIcon className={style.iconStyle} icon={faCartShopping} />
                                    </div>
                                </NavLink>

                                <FontAwesomeIcon className={style.iconStyle} icon={faCircleUser} />
                                <NavLink className={style.signInText} to={'/login'}>Sign In</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div> */}
            <div className=''>

                <nav
                    className={colorChange ?
                        "flex-no-wrap fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between bg-[#262626] py-3 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
                        :
                        "transition-[backgroundColor]  text-red-100 flex-no-wrap fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between bg-[rgba(0,0,0,0)] py-3  dark:bg-neutral-600  lg:flex-wrap lg:justify-start lg:py-4"}
                    // className="flex-no-wrap fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between bg-[#262626] py-3 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
                    // className={style.navber}
                    data-te-navbar-ref ref={navbarRef}>
                    <div className="flex w-full flex-wrap items-center justify-between px-3 ">

                        <button
                            className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                            type="button"
                            data-te-collapse-init
                            data-te-target="#navbarSupportedContent1"
                            aria-controls="navbarSupportedContent1"
                            aria-expanded="false"
                            aria-label="Toggle navigation">

                            <span className="[&>svg]:w-7">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-7 w-7">
                                    <path
                                        fillRule="evenodd"
                                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                        clipRule="evenodd" />
                                </svg>
                            </span>
                        </button>


                        <div
                            className=" px-5 !visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                            id="navbarSupportedContent1"
                            data-te-collapse-item>

                            <NavLink className=" navbar-brand" to={'/'}>
                                <img src={navLogo} className={style.brand} alt="logo" />
                            </NavLink>

                            <div className="flex min-w-[600px] max-w-[24rem]">
                                <input
                                    className="w-full h-full rounded-[4px] border border-tahiti-200 px-3 py-2.5 text-sm outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-tahiti-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" Search on Shrouk.com"
                                />

                            </div>


                            <div className={style.dropdownMenu}>
                                <div className="d-flex justify-end  me-auto mx-4 mb-2 mb-lg-0 ">
                                    <div className={style.CountryDiv}>
                                        <img className={style.CountryLogos} src={logo} />
                                    </div>
                                    <div className="mr-8">
                                        {/* <DropdownMenu/> */}
                                        <div className="relative  ">
                                            <select className={colorChange ? "py-2 px-4 text-white bg-[rgba(0,0,0,0.0)] outline-none appearance-none focus:border-indigo-600" :
                                                "py-2 px-4 text-black bg-[rgba(0,0,0,0.0)] outline-none appearance-none focus:border-indigo-600"}>
                                                <option>English</option>
                                                <option>Arabic</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className={style.iconsDicStyle}>
                                <NavLink className={style.cartIcons} to={'/cartPage'}>
                                    <div className={style.DivCartItems}>
                                        {allDataCart.length - 1 <= 0 && allDataCartLaptops.length - 1 <= 0 && allDataCartTablets.length - 1 <= 0 ? " " :
                                            <span className={style.CartItems}>
                                                <span className="rounded-full bg-slate-100 px-1 text-xs font-semibold text-slate-900">{(allDataCart.length - 1) + (allDataCartLaptops.length - 1) + (allDataCartTablets.length - 1)} </span>

                                            </span>
                                        }

                                        <FontAwesomeIcon className={colorChange ? style.iconStyle : style.iconStyleChangeNav} icon={faCartShopping} />
                                    </div>
                                </NavLink>

                                <FontAwesomeIcon className={colorChange ? style.iconStyle : style.iconStyleChangeNav} icon={faCircleUser} />

                                <div className="relative ">
                                    <select className={colorChange ? "py-2 px-1 text-white bg-[rgba(0,0,0,0.0)] outline-none appearance-none focus:border-indigo-600" :
                                        "py-2 px-1 text-black bg-[rgba(0,0,0,0.0)] outline-none appearance-none focus:border-indigo-600"}>
                                        {userLoginData ?
                                            <option>{userLoginData?.first_name + " " + userLoginData?.last_name}</option>
                                            :
                                            <option>Sign In</option>
                                        }
                                        <option>Sign Out</option>
                                    </select>
                                </div>
                                {/* <NavLink className={style.signInText} to={'/login'}>{userLoginData ? userLoginData?.first_name + " " + userLoginData?.last_name : "Sign In"}</NavLink> */}
                            </div>

                        </div>



                    </div>
                </nav>
            </div>
        </Fragment>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)