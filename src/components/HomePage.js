import { CssBaseline, FormControl, InputLabel, OutlinedInput, Select, Typography } from "@mui/material"
import { useStyles } from "./styles"

export const HomePage = () => {
    const classes = useStyles()
    return(
        <>
    <CssBaseline>
        <Typography variant="h2" align="center" mt={8}>
            Welcome to the Pop Up Magic Shop!
        </Typography>
        <FormControl className={classes.shopSelector} sx={{minWidth: 300}} >
            <InputLabel id="party-level-select">Average Party Level</InputLabel>
                <Select
                label="Average Party Level"
                value={''}>
                </Select>
        </FormControl>
        <FormControl className={classes.shopSelector}sx={{minWidth: 300,}}>
            <InputLabel id="shop-area-select">Where is this shop located?</InputLabel>
                <Select 
                label="shop-location"
                value={''}>
                </Select>
        </FormControl>
        <FormControl className={classes.shopSelector}sx={{minWidth: 300,}}>
        <InputLabel id="shop-wealth">Financial Status of Shop</InputLabel>
                <Select 
                label="shop-wealth"
                value={''}>
                </Select>
        </FormControl>
    </CssBaseline> 
        </>
    )
}