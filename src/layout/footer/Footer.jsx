import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faComments } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faInstagramSquare, faTwitter, faApple, faPinterest, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import style from './Footer.module.css';
import visa from '../../images/paymentMethod/visa.jpeg'
import masterCard from '../../images/paymentMethod/masterCard.jpg'
import payOn from '../../images/paymentMethod/payOn.jpg'
import pay from '../../images/paymentMethod/pay.jpg'
import payPal from '../../images/paymentMethod/payPal.jpg'
import logo from '../../images/paymentMethod/logo.jpg'
import navLogo from '../../images/paymentMethod/navLogo.jpg'
export default function Footer() {
  return (
    <Fragment>
      <div className={style.firstSectionFooter} >
        <div className="container d-flex ml-4">
          <div className="row w-100 ">
            <div className="col-md-3 col-sm-12">
              <div className={style.textDivFooter}>
                <h6>Need help?</h6>
                <p className={style.textFooterP}><span className={style.spanTextFooter}>Reach out to us</span> on any of the support channel</p>
              </div>
            </div>

            <div className="col-md-3 col-sm-4">
              <div className="d-flex">
                <div className={style.IconsFooter}><FontAwesomeIcon icon={faLocationDot} /></div>
                <div className={style.textDivFooter}>
                  <h6>Store Locator</h6>
                  <p className={style.textFooterP}>Find a store nearby</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-4">
              <div className="d-flex">
                <div className={style.IconsFooter}><FontAwesomeIcon icon={faComments} /></div>
                <div className={style.textDivFooter}>
                  <h6>Feedback</h6>
                  <p className={style.textFooterP}>Send us your feedback</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-4">
              <div className="d-flex">
                <div className={style.IconsFooter}><FontAwesomeIcon icon={faPhone} /></div>
                <div className={style.textDivFooter}>
                  <h6>Get in Touch</h6>
                  <p className={style.textFooterP}>600502034</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-4">
        <div className="row w-100">
          <div className="col-md-2 col-sm-6">
            <div className={style.textDivFooter}>
              <h6 className='pb-3'>Company</h6>
              <p className={style.textFooterP}>About Sharaf DG</p>
              <p className={style.textFooterP}>About Sharaf Group</p>
              <p className={style.textFooterP}>DG Help – Authorised Service</p>
              <p className={style.textFooterP}>Techbench</p>
              <p className={style.textFooterP}>DG+ | Home Theatres & Audio</p>
              <p className={style.textFooterP}>DG Member</p>
              <p className={style.textFooterP}>Brand Promise</p>
              <p className={style.textFooterP}>Best Price Guarantee (BPG)</p>
              <p className={style.textFooterP}>Solution Bar</p>
              <p className={style.textFooterP}>Careers</p>
              <p className={style.textFooterP}>Terms and Conditions</p>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className={style.textDivFooter}>
              <h6 className='pb-3'>Assistance</h6>
              <p className={style.textFooterP}>Check warranty status</p>
              <p className={style.textFooterP}>Sell at SharafDG</p>
              <p className={style.textFooterP}>Store Locator</p>
              <p className={style.textFooterP}>DG Shield Premium</p>
              <p className={style.textFooterP}>DG Shield+</p>
              <p className={style.textFooterP}>DG Shield</p>
              <p className={style.textFooterP}>Extended Warranty</p>
              <p className={style.textFooterP}>FlexiPay Installment Plans</p>
              <p className={style.textFooterP}>Easy Payment Plan</p>
              <p className={style.textFooterP}>Disclaimer Policy</p>
              <p className={style.textFooterP}>Return & Exchange Policy</p>
              <p className={style.textFooterP}>Bulk Orders & Enquiries</p>
              <p className={style.textFooterP}>F.A.Qs</p>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className={style.textDivFooter}>
              <h6 className='pb-3'>Publications</h6>
              <p className={style.textFooterP}>Latest Catalogue</p>
              <p className={style.textFooterP}>Newsletter</p>
              <p className={style.textFooterP}>Blog</p>
              <p className={style.textFooterP}>Become an Affiliate</p>
              <p className={style.textFooterP}>WhatsApp Us</p>
              <p className={style.textFooterP}>Tell us more</p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div >
              <h6 className='pb-3'>Payment Method</h6>
              <div className='container-fluid'>
                <div className='row '>
                  <div className='col-md-4 col-sm-4 pb-1'>
                    <img src={visa} className='w-100 ' alt="..." />
                  </div>
                  <div className='col-md-4 col-sm-4 pb-1'>
                    <img src={masterCard} className="w-100" alt="..." />
                  </div>
                  <div className='col-md-4 col-sm-4 pb-1'>
                    <img src={payOn} className="w-100" alt="..." />
                  </div>
                  <div className='col-md-4 col-sm-4 pb-1'>
                    <img src={pay} className="w-100" alt="..." />
                  </div>
                  <div className='col-md-4 col-sm-4 pb-1'>
                    <img src={payPal} className="w-100" alt="..." />
                  </div>
                  <div className='col-md-4 col-sm-4 pb-1'>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-12 ">
            <div className={style.textDivFooter}>

              <div className='container-fluid pt-4'>
                <div className='row d-flex align-items-end'>
                  <div className='col-md-7 col-sm-7 '>
                    <div className='row '>
                      <div className='col-md-3 col-sm-3 pt-1'>
                        <FontAwesomeIcon icon={faFacebookF} className={style.soicalMediaIcons} />
                      </div>
                      <div className='col-md-3 col-sm-3 pt-1'>
                        <FontAwesomeIcon icon={faInstagramSquare} className={style.soicalMediaIcons} />
                      </div>
                      <div className='col-md-3 col-sm-3 pt-1'>
                        <FontAwesomeIcon icon={faTwitter} className={style.soicalMediaIcons} />
                      </div>
                      <div className='col-md-3 col-sm-3 pt-1'>
                        <FontAwesomeIcon icon={faPinterest} className={style.soicalMediaIcons} />
                      </div>
                      <div className='col-md-3 col-sm-3 pt-1'>
                        <FontAwesomeIcon icon={faApple} className={style.soicalMediaIcons} />
                      </div>
                      <div className='col-md-3 col-sm-3 pt-1'>
                        <FontAwesomeIcon icon={faGooglePlay} className={style.soicalMediaIcons} />
                      </div>
                      <div className='col-md-3 col-sm-3 pt-1'>

                      </div>
                      <div className='col-md-3 col-sm-3 pt-1'>

                      </div>


                    </div>

                  </div>
                  <div className='col-md-5 col-sm-5'>
                    <img src={logo} className="w-100" alt="..." />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=' bg-dark mt-3'>
        <div className='container py-4'>
          <div className='row'>
            <div className='col-md-4 col-sm-4'>
              <img className='w-25' src={navLogo} />
            </div>
            <div className='col-md-4 col-sm-4 text-center d-flex align-items-center'>
              <p className={style.copyRight}>COPYRIGHT © 2023 SHARAF DG LLC. ALL RIGHTS RESERVED</p>
            </div>
            <div className='col-md-4 col-sm-4 d-flex align-items-center justify-content-end'>
              <p className={style.copyRighttextP}>Terms and conditions | Privacy policy & Cookies </p>
              
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
