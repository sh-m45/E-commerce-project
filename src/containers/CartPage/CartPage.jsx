import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getProductsCart, deleteCertainCartItem, getProductsCartLaptops , getProductsCartTablets} from '../../redux/actions/carProcessing'
import section2Img13 from "../../images/section2Img13.jpeg"
import style from './CartPage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faCartPlus, faExclamation } from '@fortawesome/free-solid-svg-icons';
import CurrancyFormat from '../../sharedComponents/currancyFormat/CurrancyFormat'
import { NavLink } from 'react-router-dom'
import { type } from '@testing-library/user-event/dist/type'
function mapStateToProps(state) {
  return {
    getAllDataCart: state.getAllDataCart,
    getAllDataCartLaptops: state.getAllDataCartLaptops,
    getAllDataCartTablets: state.getAllDataCartTablets,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getProductsCart: () => dispatch(getProductsCart()),
    getProductsCartLaptops: () => dispatch(getProductsCartLaptops()),
    getProductsCartTablets: () => dispatch(getProductsCartTablets()),
    deleteCertainCartItem: (id, name) => dispatch(deleteCertainCartItem(id, name))
  }
}

function CartPage(props) {
  let [totalPrices, setTotalPrices] = useState(0);
  const allDataCart = props.getAllDataCart;
  const allDataCartLaptops = props.getAllDataCartLaptops
  const allDataCartTablets = props.getAllDataCartTablets

  useEffect(() => {

    props.getProductsCart();
    props.getProductsCartLaptops();
    props.getProductsCartTablets();
    totalPrice();
  }, [allDataCart, allDataCartLaptops, allDataCartTablets]);

  
  const totalPrice = () => {
    let sumNumbers = 0;
    allDataCart.map((productPrice) => {
      sumNumbers = sumNumbers + productPrice.priceAfterDiscount;
    })
    allDataCartLaptops.map((productPrice) => {
      sumNumbers = sumNumbers + productPrice.priceAfterDiscount;
    })
    allDataCartTablets.map((productPrice) => {
      sumNumbers = sumNumbers + productPrice.priceAfterDiscount;
    })
    setTotalPrices(sumNumbers)
  }

  const removeProductPrice = (productPriceRemove, id , name) => {
    setTotalPrices(totalPrices - productPriceRemove);
   
      props.deleteCertainCartItem(id, name);
      
   
    // console.log("name is :", name)
  }
  return (
    <Fragment>
      <div className="container mt-5 pt-5">
        <p className="text-md text-gray-500">Online Shopping / <span className=" text-blue-700">Cart</span> </p>
        <p className='text-4xl'>Cart  <span className='text-gray-500'>{"("}{(allDataCart.length - 1) + (allDataCartLaptops.length - 1) + (allDataCartTablets.length - 1)}{")"}</span></p>
        <div className="my-2">
          {
            allDataCart.length == 1 && allDataCartLaptops.length == 1 ?
              <div className='flex justify-center mb-5 mt-5'>
                <div>
                  <div className={style.emptyCart}>
                    <FontAwesomeIcon icon={faCartPlus} />
                  </div>
                  <h5 className='text-center'>Your cart is empty.</h5>
                  <NavLink to={'/'}>
                    <button
                      className="tracking-widest rounded-lg bg-tahiti-500 mt-2 mb-4 py-3 px-14 text-xs font-bold uppercase text-white shadow-md transition-all hover:bg-tahiti-600 "
                      data-ripple-light="true"
                    >
                      CONTINUE SHOPPING
                    </button>
                  </NavLink>

                </div>

              </div>
              :
              <div className="row">
                <div className="col-md-8">
                  {
                    allDataCart.map((product, key) =>
                      key == 0 ? "" :
                        <div className="container mx-auto bg-gray-100 rounded-xl shadow border p-6 m-2">
                          <p className="text-sm px-3"> Sold by <span className="font-semibold text-blue-700"> Sharaf DG</span></p>
                          <hr />
                          <div className="flex justify-around">
                            <div className={style.divImgProduct}>
                              <img src={product?.img} className={style.imgProduct} alt="img" />
                            </div>

                            <div className={style.divDescribeProduct}>
                              <p className='text-sm '>{product.description}</p>

                              <p className='text-sm '>Unit Price <span className='text-sm  font-bold'> <CurrancyFormat value={product.priceAfterDiscount}></CurrancyFormat></span></p>
                            </div>

                            <div className={style.divPriceProcess}>
                              <div className='pr-2'>
                                <div className={style.RemoveBtn}>
                                  <button onClick={(productPriceRemove, id, name) => { removeProductPrice(product.priceAfterDiscount, product.id, "phones") }} type="button" className=''>Remove</button>
                                </div>
                                <p className="text-xl text-black font-bold"><CurrancyFormat value={product.priceAfterDiscount}></CurrancyFormat></p>
                                <div className={style.counterItem}>
                                  <p className={style.counterMinus}>
                                    <FontAwesomeIcon icon={faMinus} />
                                  </p>
                                  <p className={style.counterNum}>1</p>
                                  <p className={style.counterPlus}>
                                    <FontAwesomeIcon icon={faPlus} />
                                  </p>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>



                    )
                  }

                  {
                    allDataCartLaptops.map((productLaptop, key) =>
                    key == 0 ? "" :
                      <div className="container mx-auto bg-gray-100 rounded-xl shadow border p-6 m-2">
                        <p className="text-sm px-3"> Sold by <span className="font-semibold text-blue-700"> Sharaf DG</span></p>
                        <hr />
                        <div className="flex justify-around">
                          <div className={style.divImgProduct}>
                            <img src={productLaptop?.img} className={style.imgProduct} alt="img" />
                          </div>

                          <div className={style.divDescribeProduct}>
                            <p className='text-sm '>{productLaptop.description}</p>

                            <p className='text-sm '>Unit Price <span className='text-sm  font-bold'> <CurrancyFormat value={productLaptop.priceAfterDiscount}></CurrancyFormat></span></p>
                          </div>

                          <div className={style.divPriceProcess}>
                            <div className='pr-2'>
                              <div className={style.RemoveBtn}>
                                <button onClick={(productPriceRemove, id, name) => { removeProductPrice(productLaptop.priceAfterDiscount, productLaptop.id, "laptops") }} type="button" className=''>Remove</button>
                              </div>
                              <p className="text-xl text-black font-bold"><CurrancyFormat value={productLaptop.priceAfterDiscount}></CurrancyFormat></p>
                              <div className={style.counterItem}>
                                <p className={style.counterMinus}>
                                  <FontAwesomeIcon icon={faMinus} />
                                </p>
                                <p className={style.counterNum}>1</p>
                                <p className={style.counterPlus}>
                                  <FontAwesomeIcon icon={faPlus} />
                                </p>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                  )
                  }

                  {
                    allDataCartTablets.map((productLaptop, key) =>
                    key == 0 ? "" :
                      <div className="container mx-auto bg-gray-100 rounded-xl shadow border p-6 m-2">
                        <p className="text-sm px-3"> Sold by <span className="font-semibold text-blue-700"> Sharaf DG</span></p>
                        <hr />
                        <div className="flex justify-around">
                          <div className={style.divImgProduct}>
                            <img src={productLaptop?.img} className={style.imgProduct} alt="img" />
                          </div>

                          <div className={style.divDescribeProduct}>
                            <p className='text-sm '>{productLaptop.description}</p>

                            <p className='text-sm '>Unit Price <span className='text-sm  font-bold'> <CurrancyFormat value={productLaptop.priceAfterDiscount}></CurrancyFormat></span></p>
                          </div>

                          <div className={style.divPriceProcess}>
                            <div className='pr-2'>
                              <div className={style.RemoveBtn}>
                                <button onClick={(productPriceRemove, id, name) => { removeProductPrice(productLaptop.priceAfterDiscount, productLaptop.id, "tablets") }} type="button" className=''>Remove</button>
                              </div>
                              <p className="text-xl text-black font-bold"><CurrancyFormat value={productLaptop.priceAfterDiscount}></CurrancyFormat></p>
                              <div className={style.counterItem}>
                                <p className={style.counterMinus}>
                                  <FontAwesomeIcon icon={faMinus} />
                                </p>
                                <p className={style.counterNum}>1</p>
                                <p className={style.counterPlus}>
                                  <FontAwesomeIcon icon={faPlus} />
                                </p>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                  )
                  }
                </div>

                <div className="col-md-4">
                  <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-6 m-6">

                    <h4 className="font-normal pb-3 px-2">Cart Summary</h4>
                    <div className="d-flex justify-content-between px-2">
                      <h3 className='text-sm font-bold '>Total</h3>
                      <p className="text-xl text-black font-bold"><CurrancyFormat value={totalPrices}></CurrancyFormat></p>
                    </div>
                    <button
                      className="tracking-widest w-full rounded-lg bg-tahiti-500 mt-2 py-3 px-2 text-xs font-bold uppercase text-white shadow-md transition-all hover:bg-tahiti-600 "
                      data-ripple-light="true"
                    >
                      Proceed to checkout
                    </button>
                  </div>

                </div>
              </div>
          }

        </div>





      </div>
    </Fragment>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)