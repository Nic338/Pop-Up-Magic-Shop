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
        <Select
        id="wealth-select"
        label="Financial Status of Shop"
        displayEmpty
        value={wealthInfo.shopWealth}
        onChange={event => setWealthSelect(event)}>
            {
                shopWealths.map((shopWealth) => {
                 return <MenuItem key={shopWealth.id} value={shopWealth.id}>
                  {shopWealth.wealth}
                  </MenuItem>  
                })
            }           
        </Select>
        </>
    )
}
            // <select
            //     label="Shop Wealthiness"
            //     value={wealthInfo.shopWealth}
            //     onChange={event => setWealthSelect(event)}
            //     required>
            //        <option value="">Financial Status of Shop</option>
            //         {
            //             shopWealths.map(shopWealth => {
            //                 return <option key={shopWealth.id} value={shopWealth.id}>
            //                     {shopWealth.wealth}
            //                 </option>
            //             })
            //         }
                    
            //     </select>      