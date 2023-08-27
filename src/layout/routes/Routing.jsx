import React, { Fragment } from 'react'
import { Route, Routes} from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Login from '../../containers/login/Login'
import HomePage from '../../containers/HomePage/HomePage'
import Register from '../../containers/Register/Register'
import DescriptionItem from '../../containers/DescriptionItem/DescriptionItem'
import FiveStarRating from '../../sharedComponents/fiveStarRating/FiveStarRating'
import DisplayItem from '../../containers/displayItem/DisplayItem'
import CartPage from '../../containers/CartPage/CartPage'
// import ReduxFile from './ReduxFile'

export default function Routing() {
    return (
        <Fragment>
            <div >
                <Header/>
                <Routes>
                    <Route path="/" exact element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register  />} />
                    <Route path="/descriptionItem" element={<DescriptionItem />} />
                    <Route path="/cartPage" element={<CartPage />} />
                    <Route path='/fiveStar' element={<FiveStarRating />} />
                    {/* <Route path="/reduxFile" element={<ReduxFile />} /> */}
                    {/* <Route path="*" element={<NOTFOUND />} /> */}
                </Routes>
                <Footer />
            </div>
        </Fragment>
    )
}
