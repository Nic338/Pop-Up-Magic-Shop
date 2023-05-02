import { Button, CssBaseline, FormControl, InputLabel, OutlinedInput, Select, Typography } from "@mui/material"
import { useStyles } from "../styles"
import { useEffect, useState } from "react"
import { Levels } from "./partyLevelSelect"
import { Areas } from "./shopAreaSelect"
import { Wealths } from "./shopWealthSelect"
import { useNavigate } from "react-router-dom"



export const HomePage = ({levelInfo, setLevelInfo, levelSelectList, areaInfo, setAreaInfo, shopAreaList, wealthInfo, setWealthInfo, shopWealthList, handleGenerateItems, setShowList}) => {
    const classes = useStyles()
    const navigate = useNavigate()

const handleGenerateClick = () => {
navigate("/shop")
}
    return(  
            <>
    <CssBaseline>
        <Typography variant="h2" align="center" mt={8}>
            Welcome to the Pop Up Magic Shop!
        </Typography>
        <FormControl className={classes.shopSelector} sx={{minWidth: 300, marginLeft: 33}} >
            <InputLabel id="party-level-select"></InputLabel>
                <Levels setLevelInfo={setLevelInfo} 
                        levelInfo={levelInfo}
                        setLevelSelect={levelSelectList}/>
        </FormControl>

        <FormControl className={classes.shopSelector}sx={{minWidth: 300, marginLeft: 33}}>
            <InputLabel id="shop-area-select"></InputLabel>
                <Areas  setAreaInfo={setAreaInfo} 
                        areaInfo={areaInfo}
                        setAreaSelect={shopAreaList}/>
        </FormControl>

        <FormControl className={classes.shopSelector}sx={{minWidth: 300, marginLeft: 33}}>
            <InputLabel id="shop-wealth"></InputLabel>
                <Wealths setWealthInfo={setWealthInfo} 
                         wealthInfo={wealthInfo}
                         setWealthSelect={shopWealthList}/>
        </FormControl>
        <Button onClick={() => setShowList(true)} variant="contained">Generate My Shop!</Button>
    </CssBaseline> 
    
        </>
    )
}