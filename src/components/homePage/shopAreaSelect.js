import { MenuItem, Select, ThemeProvider } from "@mui/material"
import { useEffect, useState } from "react"
import { getShopArea } from "../ApiManager"
import { selectTheme } from "../styles"

export const Areas = ({ areaInfo, setAreaSelect }) => {

    const [shopAreas, setShopArea] = useState([])

    useEffect(
        () => {
            getShopArea()
                .then(data => {
                    setShopArea(data)
                })
        }, []
    )

    return (
        <>
            <ThemeProvider theme={selectTheme}>
                <Select
                    id="area-select"
                    label=' Shop Location '
                    displayEmpty
                    value={areaInfo.shopArea}
                    onChange={event => setAreaSelect(event)}>
                    {
                        shopAreas.map((shopArea) => {
                            return <MenuItem key={shopArea.id} value={shopArea.id}>
                                {shopArea.area}
                            </MenuItem>
                        })
                    }
                </Select>
            </ThemeProvider>
        </>
    )
}