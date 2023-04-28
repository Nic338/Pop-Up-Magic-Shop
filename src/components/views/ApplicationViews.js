import { Route, Routes } from "react-router-dom"
import { HomePage } from "../HomePage"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
                
        </Routes>
    )
}