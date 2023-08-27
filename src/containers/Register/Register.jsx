import React, { Fragment, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faSpinner, faEye, faEyeSlash } from '@fortawesome/free-brands-svg-icons'
import { validation } from '../../services/validation.service';
import style from './RegisterStyle.module.css'
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {
    getUser,
    addNewUser
} from '../../redux/actions/carProcessing'
import { connect } from 'react-redux';

function mapDispatchToProps(state) {
    return {
        getAllDataUsers: state.getAllDataUsers,
    }
}

function mapStateToProps(dispatch) {
    return {
        getUser: () => dispatch(getUser()),
        addNewUser: (user) => dispatch(addNewUser(user))
    }
}


function Register(props, propsRoute) {
    let [errorFName, setErrorFName] = useState('');
    let [errorLName, setErrorLName] = useState('');
    let [errorPhoneNumber, setErrorPhoneNumber] = useState('');
    let [errorEmail, setErrorEmail] = useState('');
    let [errorPassword, setErrorPassword] = useState('');
    let [errorComfirmPassword, setErrorComfirmPassword] = useState('');
    let [showPassword, setShowPassword] = useState(false);
    let [showComfirmPassword, setShowComfirmPassword] = useState(false);
    let [checkAllVariable, setCheckAllVariable] = useState(true);
    const { history } = props;
    
    let [user, setUser] = useState({
        email: "",
        first_name: "",
        last_name: "",
        mobile_number: "",
        password: "",
        comfirmPassword: "",
    })

    const getUserData = (e) => {
        let myUser = { ...user }
        myUser[e.target.name] = e.target.value;
        setUser(myUser);
        validationForm(e);
        // console.log(user)
    }

    const catchData = async () => {
        await props.getUser();
        let userData = await props.getAllDataUsers;
        console.log("userData is ", userData);
    }

    useEffect(() => {
        catchData()
    }, [])

    useEffect(() => {
        checkValidations()
    }, [user])

    const submitData = async (e) => {
        e.preventDefault();
        // await checkValidations();
        if (checkAllVariable) {
            props.addNewUser(user);
            if(history) history.push('/home');
            console.log('props.history is', history)
        }

    }

    const validationForm = (e) => {
        let Name = e.target.name;
        let value = e.target.value;

        if (Name === "first_name") {
            setErrorFName(validation.validationName(value, Name));
        }

        if (Name === "last_name") {
            setErrorLName(validation.validationName(value, Name));
        }

        if (Name === "mobile_number") {
            setErrorPhoneNumber(validation.validationPhoneNumber(value, Name));
        }

        if (Name === "email") {
            setErrorEmail(validation.validationEmail(value, Name));
        }

        if (Name === "password") {
            setErrorPassword(validation.validationPassword(value, Name));
        }

        if (Name === "comfirmPassword") {
            setErrorComfirmPassword(validation.validationComfirmPassword(value, Name, user.password));
        }
    }

    function handleClickShowPassword() {
        if (showPassword == false) {
            setShowPassword(true);
        }
        else if (showPassword == true) {
            setShowPassword(false);
        }
    }

    function handleClickShowComfirmPassword() {
        if (showComfirmPassword == false) {
            setShowComfirmPassword(true);
        }
        else if (showComfirmPassword == true) {
            setShowComfirmPassword(false);
        }
    }

    function checkValidations() {

        if (errorFName != '' || errorLName != '' || errorPhoneNumber != '' || errorEmail != '' || errorPassword != '' || errorComfirmPassword != '') {   // not correct data formats
            setCheckAllVariable(false);
        }
        else {
            setCheckAllVariable(true);
        }

    }

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
                <form onSubmit={submitData} className="d-flex justify-content-center w-50">
                    <div className={style.instedDivInputStyle}>
                        <div className={errorEmail == "" ? style.containerDivInputStyle : style.containerDivInputStyleError}>
                            <label className={style.labelStyle} >Email address *</label>
                            <input onChange={(e) => getUserData(e)} type="email" className={errorEmail == "" ? style.inputStyle : style.inputStyleError} name='email' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" />
                            <div>{errorEmail == '' ? "" : (<span className={style.styleError}>{errorEmail}</span>)}</div>
                        </div>
                        <div className={errorFName == "" ? style.containerDivInputStyle : style.containerDivInputStyleError}>
                            <label className={style.labelStyle}>First Name *</label>
                            <input onChange={(e) => getUserData(e)} type="text" className={errorFName == "" ? style.inputStyle : style.inputStyleError} name='first_name' placeholder="First Name" />
                            <div>{errorFName == '' ? "" : (<span className={style.styleError}>{errorFName}</span>)}</div>

                        </div>
                        <div className={errorLName == "" ? style.containerDivInputStyle : style.containerDivInputStyleError}>
                            <label className={style.labelStyle}>Last Name *</label>
                            <input onChange={(e) => getUserData(e)} type="text" className={errorLName == "" ? style.inputStyle : style.inputStyleError} name='last_name' placeholder="Second Name" />
                            <div>{errorLName == '' ? "" : (<span className={style.styleError}>{errorLName}</span>)}</div>

                        </div>
                        <div className={errorLName == "" ? style.containerDivInputStyle : style.containerDivInputStyleError}>
                            <label className={style.labelStyle}>Mobile Number *</label>
                            <input onChange={(e) => getUserData(e)} type="text" className={errorPhoneNumber == "" ? style.inputStyle : style.inputStyleError} name='mobile_number' placeholder="Mobile Number" />
                            <div>{errorPhoneNumber == '' ? "" : (<span className={style.styleError}>{errorPhoneNumber}</span>)}</div>

                        </div>
                        <div className={errorPassword == "" ? style.containerDivInputStyle : style.containerDivInputStyleError}>
                            <label className={style.labelStyle}>Password *</label>
                            <input onChange={(e) => getUserData(e)} type="password" className={errorPassword == "" ? style.inputStyle : style.inputStyleError} name='password' placeholder="Password" />
                            <div>{errorPassword == '' ? "" : (<span className={style.styleError}>{errorPassword}</span>)}</div>
                        </div>

                        <div className={errorComfirmPassword == "" ? style.containerDivInputStyle : style.containerDivInputStyleError}>
                            <label className={style.labelStyle}>Comfirm Passsword *</label>
                            <input onChange={(e) => getUserData(e)} type={showComfirmPassword ? "text" : "password"} className={errorComfirmPassword == "" ? style.inputStyle : style.inputStyleError} name='comfirmPassword' placeholder="Repeat Password"

                            // { showComfirmPassword ?
                            //     <FontAwesomeIcon className={style.eyeIcon} icon={faEye} onClick={handleClickShowComfirmPassword} />
                            //     :
                            //     <FontAwesomeIcon className={style.eyeIcon} icon={faEyeSlash} onClick={handleClickShowComfirmPassword} />}

                            />

                            <div>{errorComfirmPassword == '' ? "" : (<span className={style.styleError}>{errorComfirmPassword}</span>)}</div>
                        </div>


                        <div className="form-check mt-3">
                            <input onChange={(e) => getUserData(e)} className="form-check-input" type="checkbox" name='conditions' value="" id="flexCheckDefault" />
                            <label className={style.labelCheckbox}>
                                I’ve read and accept the <span className={style.spanLoginStyle}>terms & conditions</span>
                            </label>
                        </div>
                        {/* <NavLink to={ '/login' }> */}
                            <button type="submit" onSubmit={submitData} className={style.loginBtn} >REGISTER</button>
                        {/* </NavLink> */}


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

export default connect(mapDispatchToProps, mapStateToProps)(Register);
