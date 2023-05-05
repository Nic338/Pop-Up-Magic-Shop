import { MenuItem, Select, ThemeProvider } from "@mui/material"
import { useEffect, useState } from "react"
import { getPartyLevel } from "../ApiManager"
import { selectTheme } from "../styles"

export const Levels = ({levelInfo, setLevelSelect}) => {
   
 const [partyLevels, setPartyLevel] = useState([])

    useEffect(
        () => {
            getPartyLevel()
            .then(data => {
                setPartyLevel(data)
            })
        },[]
    )

    return (
        <>
        <ThemeProvider theme={selectTheme}>
        <Select
            id="level-select"
            label='Average Party Level'
            displayEmpty
            value={levelInfo.partyLevel}
            onChange={event => setLevelSelect(event)}>
            {
                partyLevels.map((partyLevel) => {
                    return <MenuItem key={partyLevel.id} value={partyLevel.id}>
                  {partyLevel.level}
                  </MenuItem>  
                })
            }           
            </Select>
        </ThemeProvider>
        </>
    )
}