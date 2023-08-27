import React, { Fragment, useEffect, useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faGreaterThan, faLessThan, faXmark } from '@fortawesome/free-solid-svg-icons';
import cover1 from '../../images/cover1.jpg'
import cover2 from '../../images/cover2.jpg'
import cover3 from '../../images/cover3.jpg'
import cover4 from '../../images/cover4.jpg'
import cover5 from '../../images/cover5.jpg'
import section1Img1 from '../../images/section1Img1.jpg'
import section1Img2 from '../../images/section1Img2.png'
import section1Img3 from '../../images/section1Img3.jpg'
import section1Img4 from '../../images/section1Img4.jpg'
import layer1 from '../../images/layer1.2.jpg'
import labtop from '../../images/labtop.jpg'
import tablets from '../../images/tablets.jpg'
import televasions from '../../images/televasions.jpg'
import iphones from '../../images/iphones.jpg'
import kitchen from '../../images/kitchen.jpg'
import smartSwitch from '../../images/switch.jpg'
import sports from '../../images/sports.jpg'
import headphones from '../../images/headphones.jpg'
import delivery from '../../images/delivery.gif'
import ecessiores from '../../images/ecessiores.jpg'
import offers from '../../images/offers.jpg'
import play from '../../images/play.jpg'
import style from './HomePage.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { incrementItem } from '../../redux/actions/carProcessing'
import {
    getAllProductsData,
    getCertainItem,
    getDataPhones,
    getDataTablets,
    getProductsCart,
    getProductsCartLaptops,
    getProductsCartTablets
} from '../../redux/actions/carProcessing'
import axios from 'axios';
import CurrancyFormat from '../../sharedComponents/currancyFormat/CurrancyFormat';
import FiveStarRating from '../../sharedComponents/fiveStarRating/FiveStarRating';
import DescriptionItem from '../DescriptionItem/DescriptionItem';
function mapStateToProps(state) {
    return {
        getAllProducts: state.getAllProducts,
        getCertainData: state.getCertainData,
        getAllDataPhones: state.getAllDataPhones,
        getAllDataTablets: state.getAllDataTablets,
        cartItemsNavs: state.cartItemsNavs,
        getAllDataCart: state.getAllDataCart,
    }
}


function mapDispatchToProps(dispatch) {
    return {
        cartItemsNav: (cartItem, product, name) => dispatch(incrementItem(cartItem, product, name)),
        getAllProductsData: () => dispatch(getAllProductsData()),
        getDataPhones: () => dispatch(getDataPhones()),
        getDataTablets: () => dispatch(getDataTablets()),
        getCertainItem: (id, name) => dispatch(getCertainItem(id, name)),
        getProductsCart: () => dispatch(getProductsCart()),
        getProductsCartLaptops: () => dispatch(getProductsCartLaptops()),
        getProductsCartTablets: () => dispatch(getProductsCartTablets()),

    }
}

function HomePage(props) {
    const numbers = [section1Img1, section1Img2, section1Img3, section1Img4];
    let [item, setItem] = useState(null);
    let [cartItem, setcartItem] = useState(0)
    let [laptops, setLaptops] = useState([]);
    let [dataProducts, setDataProducts] = useState([]);
    let carousel = useRef(null);
    let carouselLaptopsDiv = useRef(null);
    let carouselPhonesDiv = useRef(null);
    let imgsDragging = useRef(null);
    let imgsDraggingLaptopsDiv = useRef(null);
    let imgsDraggingPhonesDiv = useRef(null);
    let [isDragStart, setIsDragStart] = useState(false);
    let [prevPageX, setPrevPageX] = useState("");
    let [carouselPrevScrollLeft, setCarouselPrevScrollLeft] = useState("");
    let [carouselLaptopsPrevScrollLeft, setCarouselLaptopsPrevScrollLeft] = useState("")
    let [carouselPhonesPrevScrollLeft, setCarouselPhonesPrevScrollLeft] = useState("")
    // let [allProducts, setAllProducts] = useState([]);
    const allProducts = props.getAllProducts;
    const allProductPhones = props.getAllDataPhones;
    const allProductTables = props.getAllDataTablets;

    useEffect(() => {

        props.getAllProductsData();
        props.getDataPhones();
        props.getDataTablets();
        // console.log("allProductPhones :", allProductPhones)
        // const dataState = props.cartItemsNav;
        // const allWithSelector = Array.from(
        //     imgsDragging
        // );
        // console.log(allWithSelector)

        // console.log(imgsDragging.current)

        props.getProductsCart()
        props.getCertainItem();
        props.getProductsCartLaptops();
        props.getProductsCartTablets();

    }, []);


    function displayItem(id, name) {
        props.getCertainItem(id, name)
    }

    useEffect(() => {
        document.body.addEventListener("mousedown", dragStart);
        document.body.addEventListener("mouseup", dragStop);
        document.body.addEventListener("mousemove", dragging);
        return () => {
            document.body.removeEventListener("mousemove", dragging);
            document.body.removeEventListener("mousedown", dragStart);
            document.body.removeEventListener("mouseup", dragStop);
        }

    }, [isDragStart]);

    const dragStart = (e) => {
        setIsDragStart(true);
        setPrevPageX(e.pageX);
        setCarouselPrevScrollLeft(carousel.current.scrollLeft);
        setCarouselLaptopsPrevScrollLeft(carouselLaptopsDiv.current.scrollLeft);
        setCarouselPhonesPrevScrollLeft(carouselPhonesDiv.current.scrollLeft);


    }

    const dragging = (e) => {
        if (!isDragStart) return;
        e.preventDefault();
        let positionDiff = e.pageX - prevPageX;
        carousel.current.scrollLeft = carouselPrevScrollLeft - positionDiff;
        carouselLaptopsDiv.current.scrollLeft = carouselLaptopsPrevScrollLeft - positionDiff;
        carouselPhonesDiv.current.scrollLeft = carouselPhonesPrevScrollLeft - positionDiff;
    }

    const dragStop = () => {
        setIsDragStart(false);
    }

    function getElement(e) {
        setItem(e);
    }

    function nextImg() {
        setItem(parseInt(item) + 1);
        if (parseInt(item) == numbers.length - 1) {
            setItem(parseInt(item) - (numbers.length - 1));
        }
    }

    function prevImg() {
        setItem(parseInt(item) - 1);
        if (parseInt(item) == 0) {
            setItem(parseInt(item) + (numbers.length - 1));
        }
    }

    useEffect(() => {
        props.getProductsCart()
        props.getProductsCartLaptops()
        props.getProductsCartTablets()
    }, [props.getAllDataCart]);

    const plusItem = async (id, name) => {
        setcartItem(++cartItem);
        await axios.get(`http://localhost:3032/${name}/${id}`).then((response) => {
            const product = response.data;
            props.getProductsCart()
            props.cartItemsNav(cartItem, product, name);
        }).catch((error) => console.log(error))

    }



    return (
        <Fragment>
            <div className={style.layer}>
                
                <div className="mt-20">
                    <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
                        <div className="carousel-indicators ">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" style={{ backgroundColor: "gray", width: "45px" }} className="active " aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className={style.carouselIndicators} aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className={style.carouselIndicators} aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className={style.carouselIndicators} aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" className={style.carouselIndicators} aria-label="Slide 5"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={cover1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={cover2} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={cover3} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={cover4} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={cover5} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <div className="pt-5">
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon bg-secondary rounded-circle" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                        </div>
                        <div className="pt-3">
                            <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon bg-secondary rounded-circle " aria-hidden="true"></span>
                                <span className="visually-hidden ">Next</span>
                            </button>
                        </div>

                    </div>
                </div>

                <div >
                    <div className="container">
                        <div className='row pt-5'>
                            {
                                numbers.map((number, index) =>
                                    <div className="col-md-3 col-sm-12 mb-1">
                                        <img src={number} key={index} onClick={(e) => { getElement(e.target.id); }} id={index} className={style.section1imges} alt="..." />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

                <div>
                    {
                        item == "0" || item ?
                            <div className={style.layerSection1}>
                                <div className={style.productsLayer1}>
                                    <div className={style.productsClose}>
                                        <FontAwesomeIcon onClick={(e) => { setItem(null) }} icon={faXmark} className='px-1' />
                                    </div>
                                    <div className={style.productsPrev}>
                                        <FontAwesomeIcon onClick={prevImg} className='px-1' icon={faLessThan} />
                                    </div>
                                    <img src={numbers[item]} id={item} className={style.productsImgLayer1} alt="..." />
                                    <div className={style.productsNext}>
                                        <FontAwesomeIcon onClick={nextImg} className='px-1' icon={faGreaterThan} />
                                    </div>
                                </div>

                            </div> : ""
                    }
                </div>

                <div className="container pt-3">
                    <img src={layer1} className={style.layer1} alt="..." />
                </div>

                <div className="pt-5">
                    <div className="container px-4">
                        <div className="row">
                            <div className="col-md-1 col-sm-2">
                                <div className={style.productsDivParent}>
                                    <img src={labtop} className={style.productsStyle} alt="..." />
                                    <p className={style.titleProducts}>Laptops</p>
                                </div>
                            </div>
                            <div className="col-md-1 col-sm-2">
                                <div className={style.productsDivParent}>
                                    <img src={tablets} className={style.productsStyle} alt="..." />
                                    <p className={style.titleProducts}> Tablets</p>
                                </div>
                            </div>
                            <div className="col-md-1 col-sm-2">
                                <div className={style.productsDivParent}>
                                    <img src={televasions} className={style.productsStyle} alt="..." />
                                    <p className={style.titleProducts}>Televisions</p>
                                </div>
                            </div>
                            <div className="col-md-1 col-sm-2">
                                <div className={style.productsDivParent}>
                                    <img src={iphones} className={style.productsStyle} alt="..." />
                                    <p className={style.titleProducts}>Buy Iphone</p>
                                </div>
                            </div>
                            <div className="col-md-1 col-sm-2">
                                <div className={style.productsDivParent}>
                                    <img src={kitchen} className={style.productsStyle} alt="..." />
                                    <p className={style.titleProducts}>Kitchen Applications</p>
                                </div>
                            </div>
                            <div className="col-md-1 col-sm-2">
                                <div className={style.productsDivParent}>
                                    <img src={smartSwitch} className={style.productsStyle} alt="..." />
                                    <p className={style.titleProducts}>Smart Watches</p>
                                </div>
                            </div>
                            <div className="col-md-1 col-sm-2">
                                <div className={style.productsDivParent}>
                                    <img src={sports} className={style.productsStyle} alt="..." />
                                    <p className={style.titleProducts}>Sports</p>
                                </div>
                            </div>
                            <div className="col-md-1 col-sm-2">
                                <div className={style.productsDivParent}>
                                    <img src={headphones} className={style.productsStyle} alt="..." />
                                    <p className={style.titleProducts}>Audio</p>
                                </div>
                            </div>
                            <div className="col-md-1 col-sm-2">
                                <div className={style.productsDivParent}>
                                    <img src={ecessiores} className={style.productsStyle} alt="..." />
                                    <p className={style.titleProducts}>Personal Care</p>
                                </div>
                            </div>
                            <div className="col-md-1 col-sm-2">
                                <div className={style.productsDivParent}>
                                    <img src={delivery} className={style.productsStyle} alt="..." />
                                    <p className={style.titleProducts}>Delivery</p>
                                </div>
                            </div>
                            <div className="col-md-1 col-sm-2">
                                <div className={style.productsDivParent}>
                                    <img src={play} className={style.productsStyle} alt="..." />
                                    <p className={style.titleProducts}>Play More</p>
                                </div>
                            </div>
                            <div className="col-md-1 col-sm-2">
                                <div className={style.productsDivParent}>
                                    <img src={offers} className={style.productsStyle} alt="..." />
                                    <p className={style.titleProducts}>Great Discounts</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                <div id="carouselExampleIndicatorsTwo" className="carousel slide my-4" >
                    <h3 className="container pt-5 mt-3 pb-3">Lowest Price Guarantee</h3>
                    <div className={style.wrapper}>
                        <div className={style.iconProductsDiv} >
                            <FontAwesomeIcon className={style.iconProducts} icon={faLessThan} />
                        </div>
                        <div ref={carouselPhonesDiv} className={style.carousel}>
                            <div className='d-flex '>
                                {allProductPhones?.map((product, id) => (
                                    <div key={id} className='col-lg-3 col-md-4 col-sm-6 px-2 '>
                                        <div className={style.productsSectionTwoDiv}>
                                            <NavLink className={style.registerLinkPage} to={'/descriptionItem'}>
                                                <div onClick={() => { displayItem(id, "phones") }}>
                                                    <img src={product?.img} ref={imgsDraggingPhonesDiv} className={style.sectionTwoImgs} alt="img" />
                                                    <div className={style.parentText}>
                                                        <p className={style.titleDiscount}>{product.discountPersentage}% OFF</p>
                                                        <p className={style.titleDescription}>{product.description}</p>
                                                        <FiveStarRating productRate={product.rate} />
                                                        <p className={style.titlePrice}><CurrancyFormat value={product.priceAfterDiscount}></CurrancyFormat> <span className={style.titlePriceSale}>AED <CurrancyFormat value={product.priceBeforeDiscount}></CurrancyFormat> </span></p>

                                                    </div>
                                                </div>
                                            </NavLink>
                                            <div className={style.addCarButton}>
                                                <button onClick={() => { plusItem(id, "phones") }} type="button" className="btn btn-primary w-100 ">
                                                    ADD PRODUCT
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={style.iconProductsDiv} >
                            <FontAwesomeIcon className={style.iconProducts} icon={faGreaterThan} />
                        </div>
                    </div>
                </div>



                {/* 22222222222 */}

                <div className="carousel slide mt-1" >
                    <h3 className="container pt-4 pb-3">Laptops | Up to 30% Off</h3>
                    <div className={style.wrapper}>
                        <div className={style.iconProductsDiv} >
                            <FontAwesomeIcon className={style.iconProducts} icon={faLessThan} />
                        </div>
                        <div ref={carouselLaptopsDiv} className={style.carousel}>
                            <div className='d-flex '>
                                {allProducts?.map((product, id) => (
                                    <div key={id} className='col-lg-3 col-md-4 col-sm-6 px-2'>
                                        <div className={style.productsSectionTwoDiv}>
                                            <NavLink className={style.registerLinkPage} to={'/descriptionItem'}>
                                                <div onClick={() => { displayItem(id, "laptops") }}>
                                                    <img src={product?.img} ref={imgsDraggingLaptopsDiv} className={style.sectionTwoImgs} alt="img" />
                                                    <div className={style.parentText}>
                                                        <p className={style.titleDiscount}>{product.discountPersentage}% OFF</p>
                                                        <p className={style.titleDescription}>{product.description}</p>
                                                        <FiveStarRating productRate={product.rate} />
                                                        <p className={style.titlePrice}> <CurrancyFormat value={product.priceAfterDiscount}></CurrancyFormat> <span className={style.titlePriceSale}> <CurrancyFormat value={product.priceBeforeDiscount}></CurrancyFormat> </span></p>

                                                    </div>
                                                </div>
                                            </NavLink>
                                            <div className={style.addCarButton}>
                                                <button onClick={() => { plusItem(id, "laptops") }} type="button" className="btn btn-primary w-100 ">
                                                    ADD PRODUCT
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={style.iconProductsDiv} >
                            <FontAwesomeIcon className={style.iconProducts} icon={faGreaterThan} />
                        </div>
                    </div>
                </div>



                {/* 333333333 */}

                <div id="carouselExampleIndicatorsFour" className="carousel slide my-5" >
                    <h3 className="container pt-4  pb-3">Laptops | Up to 30% Off</h3>
                    <div className={style.wrapper}>
                        <div className={style.iconProductsDiv} >
                            <FontAwesomeIcon className={style.iconProducts} icon={faLessThan} />
                        </div>
                        <div ref={carousel} className={style.carousel}>
                            <div className='d-flex '>
                                {allProductTables?.map((product, id) => (
                                    <div key={id} className='col-lg-3 col-md-4 col-sm-6 px-2'>
                                        <div className={style.productsSectionTwoDiv}>
                                            <NavLink className={style.registerLinkPage} to={'/descriptionItem'}>
                                                <div onClick={() => { displayItem(id, "tablets") }}>
                                                    <img src={product?.img} ref={imgsDragging} className={style.sectionTwoImgs} alt="img" />
                                                    <div className={style.parentText}>
                                                        <p className={style.titleDiscount}>{product.discountPersentage}% OFF</p>
                                                        <p className={style.titleDescription}>{product.description}</p>
                                                        <FiveStarRating productRate={product.rate} />
                                                        <p className={style.titlePrice}>AED <CurrancyFormat value={product.priceAfterDiscount}></CurrancyFormat> <span className={style.titlePriceSale}>AED <CurrancyFormat value={product.priceBeforeDiscount}></CurrancyFormat> </span></p>

                                                    </div>
                                                </div>
                                            </NavLink>
                                            <div className={style.addCarButton}>
                                                <button onClick={() => { plusItem(id, "tablets") }} type="button" className="btn btn-primary w-100 ">
                                                    ADD PRODUCT
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={style.iconProductsDiv} >
                            <FontAwesomeIcon className={style.iconProducts} icon={faGreaterThan} />
                        </div>
                    </div>
                </div>

            </div>



        </Fragment>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)