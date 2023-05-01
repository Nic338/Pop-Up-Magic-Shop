import { Route, Routes } from "react-router-dom"
import { HomePage } from "../homePage/HomePage"
import { ShopList } from "../shop/ShopList"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/shop" element={<ShopList/>} /> 
        </Routes>
    )
}