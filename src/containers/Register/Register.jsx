import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import style from './RegisterStyle.module.css'
import { NavLink } from 'react-router-dom';
export default function Register() {
    return (
        <Fragment>
            <h2 className={style.titleRegister}>New to Sharaf DG?</h2>
            <p className={style.secondTitleRegister}>LOG IN WITH</p>


            <div className="d-flex justify-content-center">
                <div className="w-50 d-flex justify-content-center">
                    <div className={style.instedDivInputStyle}>
                        <div className='row mt-4 pl-1 pr-1'>
                            <div className='col-md-4 '></div>
                            <div className='col-md-4 d-flex justify-content-between px-2'>
                                <FontAwesomeIcon icon={faFacebookF} className={style.soicalMediaFacebookIcon} />
                                <FontAwesomeIcon icon={faGooglePlusG} className={style.soicalMediaGoogleIcon} />
                            </div>
                            <div className='col-md-4'></div>
                        </div>

                        <div className='row mt-4 pl-1 pr-1'>
                            <div className='col-md-5 '>
                                <div className={style.decorationDiv}></div>
                            </div>
                            <div className='col-md-2'>
                                <p className={style.textLoginBtn}>OR </p>
                            </div>
                            <div className='col-md-5'>
                                <div className={style.decorationDiv}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-center'>
                <form className="d-flex justify-content-center w-50">
                    <div className={style.instedDivInputStyle}>
                        <div className={style.containerDivInputStyle}>
                            <label className={style.labelStyle} for="exampleInputEmail1">Email address</label>
                            <input type="email" className={style.inputStyle} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className={style.containerDivInputStyle}>
                            <label className={style.labelStyle}>Password</label>
                            <input type="password" className={style.inputStyle} id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className={style.containerDivInputStyle}>
                            <label className={style.labelStyle}>First Name</label>
                            <input type="text" className={style.inputStyle} placeholder="First Name" />

                        </div>
                        <div className={style.containerDivInputStyle}>
                            <label className={style.labelStyle}>Last Name</label>
                            <input type="text" className={style.inputStyle} placeholder="Second Name" />

                        </div>
                        <div className={style.containerDivInputStyle}>
                            <label className={style.labelStyle}>Mobile Number</label>
                            <input type="text" className={style.inputStyle} placeholder="Mobile Number" />

                        </div>
                        <div class="form-check mt-3">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class={style.labelCheckbox}>
                                I’ve read and accept the <span className={style.spanLoginStyle}>terms & conditions</span>
                            </label>
                        </div>
                        <button type="submit" className={style.loginBtn}>REGISTER</button>
                        <p className={style.LoginText}>Aleady have an account?</p>
                        <div>
                            <button type="submit" className={style.registerBtn}>
                                <NavLink className={style.registerLinkPage} to={'/login'}>
                                    LOGIN
                                </NavLink>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </Fragment>
    )
}
