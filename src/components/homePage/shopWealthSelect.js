import { MenuItem, Select } from "@mui/material"
import { useEffect, useState } from "react"
import { getShopWealth } from "../ApiManager"

export const Wealths = ({wealthInfo, setWealthSelect}) => {

    const [shopWealths, setShopWealth] = useState([])

useEffect(
        () => {
            getShopWealth()
            .then(data => {
                setShopWealth(data)
            })
        },[]
    )
    
    return (
        <>
            <select
                label="Shop Wealthiness"
                value={wealthInfo.shopWealth}
                onChange={event => setWealthSelect(event)}
                required>
                   <option value="">Financial Status of Shop</option>
                    {
                        shopWealths.map(shopWealth => {
                            return <option key={shopWealth.id} value={shopWealth.id}>
                                {shopWealth.wealth}
                            </option>
                        })
                    }
                    
                </select>      
        </>
    )
}