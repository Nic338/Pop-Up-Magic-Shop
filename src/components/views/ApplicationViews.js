import { Route, Routes } from "react-router-dom"
import { HomePage } from "../homePage/HomePage"
import { ShopList } from "../shop/ShopList"
import { ShopContainer } from "../ShopContainer"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={<ShopContainer />} />
            <Route path="/shop" element={<ShopList/>} /> 
        </Routes>
    )
}