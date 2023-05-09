import { Box, Button, CssBaseline, FormControl, InputLabel, ThemeProvider, Typography } from "@mui/material"
import { bodyTheme, selectTheme, theme, useStyles } from "../styles"
import { Levels } from "./partyLevelSelect"
import { Areas } from "./shopAreaSelect"
import { Wealths } from "./shopWealthSelect"
import { useNavigate } from "react-router-dom"


export const HomePage = ({ levelInfo, setLevelInfo, levelSelectList, areaInfo, setAreaInfo, shopAreaList, wealthInfo, setWealthInfo, shopWealthList, handleGenerateItems, setShowList }) => {
    const classes = useStyles()
    const navigate = useNavigate()

    return (
        <>
            <ThemeProvider theme={bodyTheme}>
                <CssBaseline>
                    <Typography variant="h1" align="center" mt={8} mb={8}>
                        Welcome to the Pop Up Magic Shop!
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        <FormControl className={classes.shopSelector} sx={{ minWidth: 300, marginLeft: 33 }} >
                            <ThemeProvider theme={selectTheme}>
                                <InputLabel id="party-level-select">Average Party Level</InputLabel>
                            </ThemeProvider>
                            <Levels setLevelInfo={setLevelInfo}
                                levelInfo={levelInfo}
                                setLevelSelect={levelSelectList} />
                        </FormControl>
                        <FormControl className={classes.shopSelector} sx={{ minWidth: 300, marginLeft: 33 }}>
                            <ThemeProvider theme={selectTheme}>
                                <InputLabel id="shop-area-select">Shop Location</InputLabel>
                            </ThemeProvider>
                            <Areas setAreaInfo={setAreaInfo}
                                areaInfo={areaInfo}
                                setAreaSelect={shopAreaList} />
                        </FormControl>

                        <FormControl className={classes.shopSelector} sx={{ minWidth: 300, marginLeft: 33 }}>
                            <ThemeProvider theme={selectTheme}>
                                <InputLabel id="shop-wealth">Financial Status of Shop</InputLabel>
                            </ThemeProvider>
                            <Wealths setWealthInfo={setWealthInfo}
                                wealthInfo={wealthInfo}
                                setWealthSelect={shopWealthList} />
                        </FormControl>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'right' }} >
                        <ThemeProvider theme={theme}>
                            <Button onClick={() => setShowList(true)} sx={{ marginTop: 8, marginRight: 8 }} variant="contained">Generate My Shop!</Button>
                        </ThemeProvider>
                    </Box>
                </CssBaseline>
            </ThemeProvider>

        </>
    )
}