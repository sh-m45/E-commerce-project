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
import section2Img1 from '../../images/section2Img1.jpeg'
import section2Img2 from '../../images/section2Img2.jpeg'
import section2Img3 from '../../images/section2Img3.jpeg'
import section2Img4 from '../../images/section2Img4.jpeg'
import section2Img5 from '../../images/section1Img5.jpg'
import section2Img6 from '../../images/section2Img6.jpeg'
import section2Img7 from '../../images/section2Img7.jpeg'
import section2Img8 from '../../images/section2Img8.jpeg'
import section2Img9 from '../../images/section2Img9.jpg'
import section2Img10 from '../../images/section2Img10.jpeg'
import section2Img11 from '../../images/section2Img11.jpg'
import section2Img12 from '../../images/section2Img12.jpg'
import section2Img13 from '../../images/section2Img13.jpeg'
import section2Img14 from '../../images/section2Img14.jpeg'
import sectionLaptop1 from '../../images/laptop/sectionLaptop1.jpg'
import sectionLaptop2 from '../../images/laptop/sectionLaptop2.jpg'
import sectionLaptop3 from '../../images/laptop/sectionLaptop3.jpg'
import sectionLaptop4 from '../../images/laptop/sectionLaptop4.jpg'
import sectionLaptop5 from '../../images/laptop/sectionLaptop5.jpg'
import sectionLaptop7 from '../../images/laptop/sectionLaptop7.jpeg'
import sectionLaptop8 from '../../images/laptop/sectionLaptop8.jpg'
import sectionLaptop9 from '../../images/laptop/sectionLaptop9.jpg'
import sectionLaptop10 from '../../images/laptop/sectionLaptop10.jpeg'
import sectionLaptop71 from '../../images/laptop/sectionLaptop71.jpg'
import sectionHandfree1 from '../../images/handfree/sectionHandfree1.jpeg'
import sectionHandfree2 from '../../images/handfree/sectionHandfree2.jpeg'
import sectionHandfree3 from '../../images/handfree/sectionHandfree3.jpeg'
import sectionHandfree4 from '../../images/handfree/sectionHandfree4.jpeg'
import sectionHandfree5 from '../../images/handfree/sectionHandfree5.jpg'
import sectionHandfree6 from '../../images/handfree/sectionHandfree6.jpg'
import sectionHandfree7 from '../../images/handfree/sectionHandfree7.jpg'
import sectionHandfree8 from '../../images/handfree/sectionHandfree8.jpg'
import sectionHandfree9 from '../../images/handfree/sectionHandfree9.jpeg'
import sectionHandfree10 from '../../images/handfree/sectionHandfree10.jpg'
import style from './HomePage.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { incrementItem } from '../../redux/actions/carProcessing'
import { getAllProductsData, getCertainItem } from '../../redux/actions/carProcessing'
import axios from 'axios';
import CurrancyFormat from '../../sharedComponents/currancyFormat/CurrancyFormat';
import FiveStarRating from '../../sharedComponents/fiveStarRating/FiveStarRating';
import DescriptionItem from '../DescriptionItem/DescriptionItem'; 
function mapStateToProps(state) {
    return {
        getAllProducts: state.getAllProducts,
        getCertainData: state.getCertainData
    }
}


function mapDispatchToProps(dispatch) {
    return {
        cartItemsNav: (itemCart) => dispatch(incrementItem(itemCart)),
        getAllProductsData: () => dispatch(getAllProductsData()),
        getCertainItem: (id) => dispatch(getCertainItem(id)),
    }
}

function HomePage(props) {
    const numbers = [section1Img1, section1Img2, section1Img3, section1Img4];
    let [item, setItem] = useState(null);
    let [cartItem, setcartItem] = useState(0)
    let [laptops, setLaptops] = useState([]);
    let [dataProducts, setDataProducts] = useState([]);
    let carousel = useRef(null);
    let imgsDragging = useRef(null);
    let [isDragStart, setIsDragStart] = useState(false);
    let [prevPageX, setPrevPageX] = useState("");
    let [prevScrollLeft, setPrevScrollLeft] = useState("")
    let [allProducts, setAllProducts] = useState([]);

    useEffect(() => {

        getLaptopsData();
        catchData();


        // setAllProducts(props.getAllProductsData())

        // const allWithSelector = Array.from(
        //     imgsDragging
        // );
        // console.log(allWithSelector)

        // console.log(imgsDragging.current)

        getAllProducts()

        props.getCertainItem();

    }, []);

    async function getAllProducts() {
        // console.log("props.getAllProducts: ", props.getAllProductsData())
        // await props.getAllProductsData();
        let laptops = await props.getAllProducts
        console.log("data: ", laptops);
        setAllProducts(laptops);
        console.log("allProducts: ", allProducts)
    }

    function displayItem(id) {
        console.log("id: ", id);
        props.getCertainItem(id)
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
        setPrevScrollLeft(carousel.current.scrollLeft);

    }

    const dragging = (e) => {
        if (!isDragStart) return;
        e.preventDefault();
        // carousel.current.scrollLeft = e.pageX;

        let positionDiff = e.pageX - prevPageX;
        carousel.current.scrollLeft = prevScrollLeft - positionDiff;
    }

    const dragStop = () => {
        setIsDragStart(false);
    }

    const getLaptopsData = async () => {
        const result = await axios.get('http://localhost:3032/laptops');
        setLaptops(result.data)
    }
    const catchData = async () => {
        const { data } = await axios.get('http://localhost:3032/laptops');
        setDataProducts(data);
        console.log("result is :", dataProducts, "type of : ", typeof (data));
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
        props.cartItemsNav(cartItem);

        console.log(" Update the document ")
    }, [cartItem]);

    const plusItem = () => {
        setcartItem(++cartItem);
        console.log("cartItem is : ", cartItem)

    }



    return (
        <Fragment>
            <div className={style.layer}>
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

                <div>
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
                                        <img src={number} onClick={(e) => { getElement(e.target.id); }} id={index} className={style.section1imges} alt="..." />
                                    </div>
                                )
                            }
                        </div>
                    </div>
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




                <div className={style.bodyCarsoulProducts}>
                    <div className={style.wrapper}>
                        <div className={style.iconProductsDiv} >
                            <FontAwesomeIcon className={style.iconProducts} icon={faLessThan} />
                        </div>
                        <div ref={carousel} className={style.carousel}>
                            <div className='d-flex '>
                                {allProducts.map((product, id) => (
                                    <div key={id} className='col-lg-3 col-md-4 col-sm-6 px-2'>
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={require(`../../images/laptop/${product.img}`)} ref={imgsDragging} className={style.sectionTwoImgs} alt="img" />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>{product.discountPersentage}% OFF</p>
                                                <p className={style.titleDescription}>{product.description}</p>
                                                <FiveStarRating productRate={product.rate} />
                                                <p className={style.titlePrice}>AED <CurrancyFormat value={product.priceAfterDiscount}></CurrancyFormat> <span className={style.titlePriceSale}>AED <CurrancyFormat value={product.priceBeforeDiscount}></CurrancyFormat> </span></p>

                                            </div>
                                            <div className={style.addCarButton}>
                                                <button onClick={() => { displayItem(id) }} type="button" class="btn btn-primary w-100 ">
                                                    {/* <NavLink className={style.registerLinkPage} to={'/descriptionItem'}>
                                                        CREATE ACCOUNT
                                                    </NavLink> */}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    // <img src={require(`../../images/laptop/${product.src}`)} className={style.carouselImg}  alt="img" ref={imgsDragging} />

                                ))}
                            </div>
                        </div>
                        <div className={style.iconProductsDiv} >
                            <FontAwesomeIcon className={style.iconProducts} icon={faGreaterThan} />
                        </div>

                    </div>
                </div>
































                <div id="carouselExampleIndicatorsTwo" className="carousel slide " data-bs-ride="carousel">

                    <h3 className="container pt-5 mt-3 pb-3">Lowest Price Guarantee</h3>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className='container-fluid'>
                                <div className="row">
                                    <div className="col-md-1 col-sm-1">

                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={section2Img1} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <span className={style.ratingNumber}>4.8</span>
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100">ADD TO CART</button>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={section2Img2} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFFffff</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <span className={style.ratingNumber}>4.8</span>
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button onClick={plusItem} type="button" class="btn btn-info w-100 ">
                                                    {/* <NavLink className={style.registerLinkPage} to={'/descriptionItem'}>
                                                        CREATE ACCOUNT
                                                    </NavLink> */}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={section2Img3} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <span className={style.ratingNumber}>4.8</span>
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={section2Img4} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <span className={style.ratingNumber}>4.8</span>
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={section2Img5} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <span className={style.ratingNumber}>4.8</span>
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-1 col-sm-1">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='container-fluid'>
                                <div className="row">
                                    <div className="col-md-1 col-sm-1">

                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={section2Img6} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={section2Img7} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={section2Img8} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={section2Img9} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={section2Img10} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-1 col-sm-1">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='container-fluid'>
                                <div className="row">
                                    <div className="col-md-1 col-sm-1">

                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={section2Img11} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={section2Img12} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={section2Img13} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={section2Img14} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={section2Img3} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-1 col-sm-1">

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="pt-5">
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicatorsTwo" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon bg-secondary rounded-circle" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                    </div>
                    <div className="pt-3">
                        <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicatorsTwo" data-bs-slide="next">
                            <span className="carousel-control-next-icon bg-secondary rounded-circle " aria-hidden="true"></span>
                            <span className="visually-hidden ">Next</span>
                        </button>
                    </div>

                </div>

















                {/* 22222222222 */}

                <div id="carouselExampleIndicatorsThree" className="carousel slide mt-1" data-bs-ride="carousel">

                    <h3 className="container pt-4  pb-3">Laptops | Up to 30% Off</h3>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className='container-fluid'>
                                <div className="row">
                                    <div className="col-md-1 col-sm-1">

                                    </div>
                                    <div className="col-md-2 p-2 col-sm-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={sectionLaptop1} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <span className={style.ratingNumber}>4.8</span>
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={sectionLaptop2} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <span className={style.ratingNumber}>4.8</span>
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={sectionLaptop3} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <span className={style.ratingNumber}>4.8</span>
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={sectionLaptop4} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <span className={style.ratingNumber}>4.8</span>
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={sectionLaptop5} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <span className={style.ratingNumber}>4.8</span>
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-1 col-sm-1">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='container-fluid'>
                                <div className="row">
                                    <div className="col-md-1 col-sm-1">

                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={sectionLaptop71} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={sectionLaptop7} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={sectionLaptop8} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={sectionLaptop9} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={sectionLaptop10} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-1 col-sm-1">

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="pt-5">
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicatorsThree" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon bg-secondary rounded-circle" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                    </div>
                    <div className="pt-3">
                        <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicatorsThree" data-bs-slide="next">
                            <span className="carousel-control-next-icon bg-secondary rounded-circle " aria-hidden="true"></span>
                            <span className="visually-hidden ">Next</span>
                        </button>
                    </div>

                </div>



                {/* 333333333 */}

                <div id="carouselExampleIndicatorsFour" className="carousel slide mt-1" data-bs-ride="carousel">

                    <h3 className="container pt-4 pb-3">Laptops | Up to 30% Off</h3>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className='container-fluid'>
                                <div className="row">
                                    <div className="col-md-1 col-sm-1">

                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={sectionHandfree1} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <span className={style.ratingNumber}>4.8</span>
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={sectionHandfree2} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <span className={style.ratingNumber}>4.8</span>
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={sectionHandfree3} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <span className={style.ratingNumber}>4.8</span>
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={sectionHandfree4} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <span className={style.ratingNumber}>4.8</span>
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={sectionHandfree5} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <span className={style.ratingNumber}>4.8</span>
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-1 col-sm-1">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='container-fluid'>
                                <div className="row">
                                    <div className="col-md-1 col-sm-1">

                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={sectionHandfree6} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={sectionHandfree7} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={sectionHandfree8} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2 p-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={sectionHandfree9} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2">
                                        <div className={style.productsSectionTwoDiv}>
                                            <img src={sectionHandfree10} className={style.sectionTwoImgs} alt="..." />
                                            <div className={style.parentText}>
                                                <p className={style.titleDiscount}>31% OFF</p>
                                                <p className={style.titleDescription}>LG OLED TV 77 Inch C2 Series, Cinema Screen Design 4K</p>
                                                <p className={style.titleRating}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                </p>
                                                <p className={style.titlePrice}>AED 11,349.00 <span className={style.titlePriceSale}>AED 10,349.00</span></p>
                                            </div>
                                            <div className={style.addCarButton}>
                                                <button type="button" class="btn btn-primary w-100 ">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-1 col-sm-1">

                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className="pt-5">
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicatorsFour" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon bg-secondary rounded-circle" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                    </div>
                    <div className="pt-3">
                        <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicatorsFour" data-bs-slide="next">
                            <span className="carousel-control-next-icon bg-secondary rounded-circle " aria-hidden="true"></span>
                            <span className="visually-hidden ">Next</span>
                        </button>
                    </div>

                </div>

            </div>



        </Fragment>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)