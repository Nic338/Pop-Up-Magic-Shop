import { Box, Button, Grid, Typography } from "@mui/material"
import { ShopItem } from "./ShopItem"

export const ShopList = ({ levelInfo, areaInfo, wealthInfo, magicItems}) => {


    //figure out params for two other choices
    
    
    //filter by rarity
    const levelChoice = () => {
        let myLeveledItems = []
        if (levelInfo.partyLevel >= 17 && levelInfo.partyLevel <= 20) {
            myLeveledItems = magicItems.filter((magicItem) => magicItem.rarity === "rare" || magicItem.rarity === "very rare" || magicItem.rarity === "legendary" || magicItem.rarity === "artifact")
            return myLeveledItems
        } else if (levelInfo.partyLevel >= 13 && levelInfo.partyLevel <= 16) {
            myLeveledItems = magicItems.filter((magicItem) => magicItem.rarity === "rare" || magicItem.rarity === "very rare" || magicItem.rarity === "legendary")
            return myLeveledItems
        } else if (levelInfo.partyLevel >= 9 && levelInfo.partyLevel <= 12) {
            myLeveledItems = magicItems.filter((magicItem) => magicItem.rarity === "rare" || magicItem.rarity === "very rare")
            return myLeveledItems
        } else if (levelInfo.partyLevel >= 5 && levelInfo.partyLevel <= 8) {
            myLeveledItems = magicItems.filter((magicItem) => magicItem.rarity === "uncommon" || magicItem.rarity === "rare" || magicItem.rarity === "common")
            return myLeveledItems
        } else if (levelInfo.partyLevel <= 4) {
            myLeveledItems = magicItems.filter((magicItem) => magicItem.rarity === "common" || magicItem.rarity === "uncommon")
            return myLeveledItems
        }
    }
    
    // console.log(levelChoice())
    // fitler by price
    const wealthChoice = (leveledItems) => {
        let myPricedItems = []
        if (wealthInfo.shopWealth === 1) {
            myPricedItems = leveledItems.filter(magicItem => magicItem.price <= 1500)
            return myPricedItems
        }
        else if (wealthInfo.shopWealth === 2) {
            myPricedItems = leveledItems.filter(magicItem => magicItem.price <= 15000)
            return myPricedItems
        }
        else if (wealthInfo.shopWealth === 3) {
            myPricedItems = leveledItems.filter(magicItem => magicItem.price <= 55000)
            return myPricedItems
        }
        else if (wealthInfo.shopWealth === 4) {
            myPricedItems = leveledItems.filter(magicItem => magicItem.price <= 150000)
            return myPricedItems
        }
        else if (wealthInfo.shopWealth === 5) {
            myPricedItems = leveledItems.filter(magicItem => magicItem.price <= 550000)
            return myPricedItems
        }
    }
    

    
    //level choice and wealth choice both added to a new array
    //new array and setMagicItems so that areaChoice will be the last thing to run
    
    const areaChoice = (pricedItems) => {
        let myLimitedItems = []
        const randomMagicItems = pricedItems.map(x => {
            const rand = Math.floor(Math.random() * pricedItems.length)
            return pricedItems[rand]
        })
        if (areaInfo.shopArea === 1) {
            myLimitedItems = randomMagicItems.slice(0, 3)
            return myLimitedItems
        } else if (areaInfo.shopArea === 2) {
            myLimitedItems = randomMagicItems.slice(0, 5)
            return myLimitedItems
        } else if (areaInfo.shopArea === 3) {
            myLimitedItems = randomMagicItems.slice(0, 8)
            return myLimitedItems
        } else if (areaInfo.shopArea === 4) {
            myLimitedItems = randomMagicItems.slice(0, 11)
            return myLimitedItems
        } else if (areaInfo.shopArea === 5) {
            myLimitedItems = randomMagicItems.slice(0, 14)
            return myLimitedItems
        }

    }
    //    setLimitedMagicItems(levelChoice())
    //    .then(setLimitedMagicItems(areaChoice()))
    // console.log(leveledItems)
    
const itemsToShow = () => {
    const leveledItems = levelChoice()
    const pricedItems = wealthChoice(leveledItems)
    const areaItems = areaChoice(pricedItems)
    
    return areaItems
}


    const reloadPage = () => {
        window.location.reload(false);
    }

    return (
    
        <>
        <Typography variant="h2" align="center" m={8} >Your Item Shop</Typography>
        <Grid container>
        <Box sx={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
            {
                itemsToShow().map(
                    (magicItem) => <ShopItem key={`${magicItem.id}`} propItem={magicItem} />
                    )
                }
        </Box>
        </Grid>
        <Box sx={{display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" onClick={() => reloadPage()}>Generate a New Shop</Button>
        </Box>
    </>
    )
}
