import { MenuItem, Select, ThemeProvider } from "@mui/material"
import { useEffect, useState } from "react"
import { getShopWealth } from "../ApiManager"
import { selectTheme } from "../styles"

export const Wealths = ({ wealthInfo, setWealthSelect }) => {

    const [shopWealths, setShopWealth] = useState([])

    useEffect(
        () => {
            getShopWealth()
                .then(data => {
                    setShopWealth(data)
                })
        }, []
    )

    return (
        <>
            <ThemeProvider theme={selectTheme}>
                <Select
                    id="wealth-select"
                    label=" Financial Status of Shop "
                    displayEmpty
                    value={wealthInfo.shopWealth}
                    onChange={event => setWealthSelect(event)}
                    sx={{background: '#414535', color: 'fbfbfb'}}>
                    {
                        shopWealths.map((shopWealth) => {
                            return <MenuItem key={shopWealth.id} value={shopWealth.id} sx={{background: '#414535', color: '#fbfbfb'}}>
                                {shopWealth.wealth}
                            </MenuItem>
                        })
                    }
                </Select>
            </ThemeProvider>
        </>
    )
}