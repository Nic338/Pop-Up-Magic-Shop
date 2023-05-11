import { MenuItem, Select, ThemeProvider } from "@mui/material"
import { useEffect, useState } from "react"
import { getPartyLevel } from "../ApiManager"
import { selectTheme, useStyles } from "../styles"



export const Levels = ({ levelInfo, setLevelSelect }) => {
    const classes = useStyles()
    const [partyLevels, setPartyLevel] = useState([])

    useEffect(
        () => {
            getPartyLevel()
                .then(data => {
                    setPartyLevel(data)
                })
        }, []
    )

    return (
        <>
            <ThemeProvider theme={selectTheme}>
                <Select
                    id="level-select"
                    label=' Average Party Level '
                    displayEmpty
                    value={levelInfo.partyLevel}
                    onChange={event => setLevelSelect(event)}
                    sx={{
                        background: '#414535',
                        color: 'fbfbfb',
                        '& .MuiOutlinedInput-input': {
                            color: '#fbfbfb'
                        }
                    }}
                    className={classes.shopSelector}>
                    {
                        partyLevels.map((partyLevel) => {
                            return <MenuItem key={partyLevel.id} value={partyLevel.id} sx={{
                                background: '#414535', color: 'white'
                            }}>
                                {partyLevel.level}
                            </MenuItem>
                        })
                    }
                </Select>
            </ThemeProvider>
        </>
    )
}