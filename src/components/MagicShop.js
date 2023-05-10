import { Route, Routes } from "react-router-dom"
import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./nav/NavBar"

export const MagicShop = () => {
    return (
        <Routes>
            <Route path="*" element={
                <>
                    <NavBar />
                    <ApplicationViews />
                </>
            } />
        </Routes>
    )
}