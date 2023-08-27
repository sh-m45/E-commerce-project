import React, { Fragment, useEffect, useState } from 'react'
import style from './Login.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getUser
} from '../../redux/actions/carProcessing'
import { validation } from '../../services/validation.service';

function mapStateToProps(state) {
  return {
    getAllDataUsers: state.getAllDataUsers,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getUser: () => dispatch(getUser()),
  }
}

function Login(props) {
  let [users, setUsers] = useState([]);
  let [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  })
  let [errorEmail, setErrorEmail] = useState('');
  let [errorPassword, setErrorPassword] = useState('');
  let [checkAllVariable, setCheckAllVariable] = useState(true);
  const getUserData = (e) => {
    let myUser = { ...userLogin }
    myUser[e.target.name] = e.target.value;
    setUserLogin(myUser);
    validationForm(e);
    // console.log(user)
  }
  const validationForm = (e) => {
    let Name = e.target.name;
    let value = e.target.value;

    if (Name === "email") {
      setErrorEmail(validation.validationEmail(value, Name));
    }

    if (Name === "password") {
      setErrorPassword(validation.validationPassword(value, Name));
    }

  }

  const submitData = async (e) => {
    e.preventDefault();
    acceptUserLogin()

  }

  const acceptUserLogin = () => {
    users?.map((user) => {
      if (user.email == userLogin.email && user.password == userLogin.password) {
        localStorage.setItem('userLogin', JSON.stringify(user));
        setCheckAllVariable(true);

      }
      else {
        setCheckAllVariable(false);
      }
    })

  }

  useEffect(() => {
    props.getUser()
  }, [])

  useEffect(() => {
    setUsers(props.getAllDataUsers);
    acceptUserLogin()
  }, [props.getAllDataUsers, userLogin])



  return (
    <Fragment>
      <h3 className={style.titleLogin}>Welcome</h3>
      <div className="d-flex justify-content-center">
        <form onSubmit={submitData} className="d-flex justify-content-center">
          <div className={style.instedDivInputStyle}>
            <div className={errorEmail == "" ? style.containerDivInputStyle : style.containerDivInputStyleError}>
              <label className={style.labelStyle} for="exampleInputEmail1">Email address</label>
              <input onChange={(e) => getUserData(e)} type="email" className={errorEmail == "" ? style.inputStyle : style.inputStyleError} name='email' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" />
              <div>{errorEmail == '' ? "" : (<span className={style.styleError}>{errorEmail}</span>)}</div>
            </div>
            <div className={errorEmail == "" ? style.containerDivInputStyle : style.containerDivInputStyleError}>
              <label className={style.labelStyle}>Password *</label>
              <input onChange={(e) => getUserData(e)} type="password" className={errorPassword == "" ? style.inputStyle : style.inputStyleError} name='password' placeholder="Password" />
              <div>{errorPassword == '' ? "" : (<span className={style.styleError}>{errorPassword}</span>)}</div>
            </div>
            <div>
              <label className={style.fotgetPasswordText}>Forgot Password?</label>
            </div>
            <NavLink to={'/home'}><button type="submit" onSubmit={submitData} className={style.loginBtn}>LOGIN</button> </NavLink>

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

              <NavLink className={style.registerLinkPage} to={'/register'}>
                <button type="submit" className={style.registerBtn}>
                  CREATE ACCOUNT
                </button>
              </NavLink>

            </div>
          </div>
        </form>
      </div>
    </Fragment>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)