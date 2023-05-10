import { Route, Routes } from "react-router-dom"
import { ShopContainer } from "../ShopContainer"
import { Orders } from "../checkout/OrderList"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={<ShopContainer />} />
            <Route path="orders" element={<Orders />} />
        </Routes>
    )
}