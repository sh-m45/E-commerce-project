import React, { useEffect, useState } from 'react'
import { useRef } from "react"
import style from './DescriptionItem.module.css'
import { Fragment } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
import section2Img2 from '../../images/section2Img2.jpeg'
import item1 from '../../images/detailsImg/item1.jpeg'
import item2 from '../../images/detailsImg/item2.jpeg'
import item3 from '../../images/detailsImg/item3.jpeg'
import item4 from '../../images/detailsImg/item4.jpeg'
import item5 from '../../images/detailsImg/item5.jpeg'
import item6 from '../../images/detailsImg/item6.jpeg'
import item7 from '../../images/detailsImg/item7.jpeg'
import item8 from '../../images/detailsImg/item8.jpeg'
import { getCertainItem } from '../../redux/actions/carProcessing'
import * as ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import CurrancyFormat from '../../sharedComponents/currancyFormat/CurrancyFormat';
import FiveStarRating from '../../sharedComponents/fiveStarRating/FiveStarRating';

function mapStateToProps(state) {
    return {
        getCertainData: state.getCertainData
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

function DescriptionItem(props) {
    var ReactDOM = require('react-dom');
    let mouseOverlay = useRef(null);
    let overlay = useRef(null);
    let imgContainer = useRef(null);
    let productImg = useRef(null);
    let selectImg = useRef(null);
    let [deviceType, setDeviceType] = useState("");
    let [imgShow, setImageShow] = useState(null)
    // let [imgWidth, setImgWidth] = useState("") ;
    // let [imgHeight, setImgHeight] = useState("");
    let [productDispaly, setProductDispaly] = useState(null)

    let [events, setEvents] = useState({
        mouse: {
            move: "mousemove"
        },
        touch: {
            move: "touchmove"
        },
    });

    function isTouchDevice() {
        try {
            setDeviceType("touch");
            document.createEvent('TouchEvent')
            return true;
        }
        catch (e) {
            setDeviceType("mouse");
            return false;
        }
    }

    const hideElement = () => {
        overlay.current.style.display = "none";
        mouseOverlay.current.style.display = "none";
        // console.log(overlay.current.style.display)
    }

    const selectImgView = () => {
        console.log("item show :", selectImg.current.src);
        setImageShow(selectImg.current.src)
    }

    // useEffect(() => {

    // }, []);

    useEffect(() => {
        const saved = localStorage.getItem("dataKey");
        const productData = JSON.parse(saved);
        setProductDispaly(productData);
    }, [props.getCertainData]);

    useEffect(() => {
        hideElement()
        // console.log(productDispaly);
        document.body.addEventListener(events[deviceType]?.move ? events[deviceType]?.move : "mousemove", (e) => {
            try {
                var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
                var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
            }
            catch (e) { }
            let imgWidth = imgContainer.current?.offsetWidth;
            let imgHeight = imgContainer.current?.offsetHeight;

            if (imgWidth - (x - imgContainer.current?.offsetLeft + 45) < 50 ||
                x - (imgContainer.current?.offsetLeft + 35) < 50 ||
                imgHeight - (y - imgContainer.current?.offsetTop) < 15 ||
                y - (imgContainer.current?.offsetTop - 5) < 0) {
                hideElement()
            }
            else {
                overlay.current.style.display = "block";
                mouseOverlay.current.style.display = "inline-block";
                if (productDispaly) {
                    overlay.current.style.backgroundImage = `url(${productDispaly?.img})`
                }

            }

            var postX = ((x - imgContainer.current?.offsetLeft) / imgWidth).toFixed(4) * 100;
            var postY = ((y - imgContainer.current?.offsetTop) / imgHeight).toFixed(4) * 100;

            overlay.current.style.backgroundPosition = postX + "%" + postY + "%";
        });
    }, [productDispaly]);



    return (
        <Fragment>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-5">
                        <div ref={imgContainer} className={style.imgContainer}>
                            <img src={imgShow ? imgShow : productDispaly?.img} ref={productImg} className={style.itemIng} alt="img" />
                        </div>
                        <p className={style.CaptionImg}>Roll over image to zoom in </p>

                        <div id="carouselExampleIndicatorsTwo" className="carousel slide mt-4" data-bs-ride="carousel">
                            {productDispaly?.imgDetails ?
                                <>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-md-2"></div>
                                                    <div className="col-md-2">
                                                        <img ref={selectImg} onClick={selectImgView} src={productDispaly?.imgDetails.left} className={style.collectImg} alt="..." />
                                                    </div>
                                                    <div className="col-md-2">
                                                        <img ref={selectImg} onClick={selectImgView} src={productDispaly?.imgDetails.right} className={style.collectImg} alt="..." />
                                                    </div>
                                                    <div className="col-md-2">
                                                        <img src={productDispaly?.imgDetails.ahead} className={style.collectImg} alt="..." />
                                                    </div>
                                                    <div className="col-md-2">
                                                        <img src={productDispaly?.imgDetails.behind} className={style.collectImg} alt="..." />
                                                    </div>
                                                    <div className="col-md-2"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="carousel-item active">
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-md-2"></div>
                                                    <div className="col-md-2">
                                                        <img src={productDispaly?.imgDetails.all} className={style.collectImg} alt="..." />
                                                    </div>
                                                    <div className="col-md-2">
                                                        <img src={productDispaly?.imgDetails.up} className={style.collectImg} alt="..." />
                                                    </div>
                                                    <div className="col-md-2">
                                                        <img src={productDispaly?.imgDetails.bottom} className={style.collectImg} alt="..." />
                                                    </div>
                                                    <div className="col-md-2">
                                                        <img src={productDispaly?.imgDetails.information} className={style.collectImg} alt="..." />
                                                    </div>
                                                    <div className="col-md-2"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </> : ""}




                            <div className="">
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicatorsTwo" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon bg-secondary rounded-circle" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                            </div>
                            <div className="">
                                <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicatorsTwo" data-bs-slide="next">
                                    <span className="carousel-control-next-icon bg-secondary rounded-circle " aria-hidden="true"></span>
                                    <span className="visually-hidden ">Next</span>
                                </button>
                            </div>
                        </div>

                        <div className={style.mouseOverlay} id="mouse-overlay" ref={mouseOverlay}></div>
                        <div className={style.overlay} id="overlay" ref={overlay}></div>
                        {/* {`../../images/laptop/${productDispaly?.img}`} */}
                        {/* style={{backgroundImage: require(`../../images/laptop/${productDispaly?.img}`)}} */}

                    </div>
                    <div className="col-md-7">
                        <div className={style.FirstDivDescriptionItem}>
                            <h3 className={style.brandName}>{productDispaly?.name}</h3>
                            <h4 className={style.descriptionItem}>{productDispaly?.description}</h4>
                            <p className={style.itemPrice}> <CurrancyFormat value={productDispaly?.priceAfterDiscount}></CurrancyFormat> <span className={style.itemPriceDiscound}> <CurrancyFormat value={productDispaly?.priceBeforeDiscount}></CurrancyFormat></span></p>
                            <p className={style.descriptionPrice}>Inclusive of VAT</p>
                            <FiveStarRating productRate={productDispaly?.rate} />
                        </div>
                        <div className={style.SecondDivDescriptionItem}>
                            <h3 className={style.titleOffer}>OFFER DETAILS</h3>
                            <p className={style.descriptionOffer}>1 Year Warranty</p>
                        </div>
                        <div className={style.LastDivDescriptionItem}>
                            <p className={style.detailsOfItem}>Region : <span className={style.detailsOfItemSpan}>International Version</span></p>
                            <p className={style.detailsOfItem}>Internal Memory : <span className={style.detailsOfItemSpan}>1 TB</span></p>
                            <ul className={style.ListOfDetails}>
                                <li>6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel</li>
                                <li>Cinematic mode adds shallow depth of field and shifts focus automatically in your videos</li>
                                <li>Pro camera system with new 12MP Telephoto, Wide, and Ultra Wide cameras; LiDAR Scanner; 6x optical zoom range; macro photography; Photographic Styles, ProRes video, Smart HDR 4, Night mode, Apple ProRAW, 4K Dolby Vision HDR recording</li>
                                <li>12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording</li>
                                <li>A15 Bionic chip for lightning-fast performance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionItem)