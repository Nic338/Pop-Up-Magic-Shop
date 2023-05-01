import { MenuItem, Select } from "@mui/material"
import { useEffect, useState } from "react"
import { getShopArea } from "../ApiManager"

export const Areas = ({areaInfo, setAreaSelect}) => {

const [shopAreas, setShopArea] = useState([])

useEffect(
    () => {
        getShopArea()
        .then(data => {
            setShopArea(data)
        })
    },[]
)

    return (
        <>
            <select
                label="Shop Area"
                value={areaInfo.shopArea}
                onChange={event => setAreaSelect(event)}
                required>
                   <option value="">Where is this shop located?</option>
                    {
                        shopAreas.map(shopArea => {
                            return <option key={shopArea.id} value={shopArea.id}>
                                {shopArea.area}
                            </option>
                        })
                    }
                    
                </select>      
        </>
    )
}