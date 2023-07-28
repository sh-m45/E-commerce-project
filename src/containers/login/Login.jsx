import React, { Fragment } from 'react'
import style from './Login.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom';
export default function Login() {
  return (
    <Fragment>
      <h3 className={style.titleLogin}>Welcome</h3>
      <div className="d-flex justify-content-center">
        <form className="d-flex justify-content-center">
          <div className={style.instedDivInputStyle}>
            <div className={style.containerDivInputStyle}>
              <label className={style.labelStyle} for="exampleInputEmail1">Email address</label>
              <input type="email" className={style.inputStyle} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className={style.containerDivInputStyle}>
              <label className={style.labelStyle}>Password</label>
              <input type="password" className={style.inputStyle} id="exampleInputPassword1" placeholder="Password" />

            </div>
            <div>
              <label className={style.fotgetPasswordText}>Forgot Password?</label>
            </div>
            <button type="submit" className={style.loginBtn}>LOGIN</button>

            <div className='row mt-4 pl-1 pr-1'>
              <div className='col-md-4 '>
                <div className={style.decorationDiv}></div>
              </div>
              <div className='col-md-4'>
                <p className={style.textLoginBtn}>OR LOG IN WITH</p>
              </div>
              <div className='col-md-4'>
                <div className={style.decorationDiv}></div>
              </div>
            </div>

            <div className='row mt-4 pl-1 pr-1'>
              <div className='col-md-4 '></div>
              <div className='col-md-4 d-flex justify-content-between px-4'>
                <FontAwesomeIcon icon={faFacebookF} className={style.soicalMediaFacebookIcon} />
                <FontAwesomeIcon icon={faGooglePlusG} className={style.soicalMediaGoogleIcon} />
              </div>
              <div className='col-md-4'></div>
            </div>

            <p className={style.LoginText}>By signing in, you agree to Sharaf DG's <span className={style.spanLoginStyle}>Terms and Conditions</span> and <span className={style.spanLoginStyle}>Privacy Policy</span></p>

            <div>
              <button type="submit" className={style.registerBtn}>
                <NavLink className={style.registerLinkPage} to={'/register'}>
                  CREATE ACCOUNT
                </NavLink>
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  )
}
