import { Box, Button, CssBaseline, Grid, ThemeProvider, Typography } from "@mui/material"
import { ShopItem } from "./ShopItem"
import { bodyTheme, theme } from "../styles"

export const ShopList = ({ levelInfo, areaInfo, wealthInfo, magicItems }) => {

    // Three functions, each one using the array from the previous. 
    // First choice uses the prop of magicItems as it's starting point
    //Average Party Level
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

    // Financial Status of the Shop
    // filter leveledItems by different values of price
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

    //Randomize pricedItems array
    //myRandomizedItems needs to live in global scope otherwise it keeps being replaced inside the loop
    let myRandomizedItems = []
    const randomMagicItems = (pricedItems) => {
        // Loop through the pricedItems array
        pricedItems.forEach(pricedItem => {
            //create a variable to get a random index of priced items
            let random = Math.floor(Math.random() * pricedItems.length);
            const randomItem = pricedItems[random]
            //if the random item is not included in myRandomizedItems, add it
            if (!myRandomizedItems.includes(randomItem)) {
                myRandomizedItems.push(randomItem);
            } else {
                //keep looping until we are all out of duplicates
                if (myRandomizedItems.length < pricedItems.length) {
                    randomMagicItems(pricedItems);
                } else {
                    //stop looping for the love of god
                    return false;
                }
            }

        })
        return myRandomizedItems
    }

    //Shop Location
    //slice the randomizedItems based on what I chose for this select
    const areaChoice = (myRandomizedItems) => {
        let myLimitedItems = []
        if (areaInfo.shopArea === 1) {
            myLimitedItems = myRandomizedItems.slice(0, 3)
            return myLimitedItems
        } else if (areaInfo.shopArea === 2) {
            myLimitedItems = myRandomizedItems.slice(0, 5)
            return myLimitedItems
        } else if (areaInfo.shopArea === 3) {
            myLimitedItems = myRandomizedItems.slice(0, 8)
            return myLimitedItems
        } else if (areaInfo.shopArea === 4) {
            myLimitedItems = myRandomizedItems.slice(0, 11)
            return myLimitedItems
        } else if (areaInfo.shopArea === 5) {
            myLimitedItems = myRandomizedItems.slice(0, 14)
            return myLimitedItems
        }

    }

    const itemsToShow = () => {
        const leveledItems = levelChoice()
        const pricedItems = wealthChoice(leveledItems)
        const randomedItems = randomMagicItems(pricedItems)
        const areaItems = areaChoice(randomedItems)

        return areaItems
    }


    const reloadPage = () => {
        window.location.reload(false);
    }

    return (
        <>
            <ThemeProvider theme={bodyTheme}>
                <CssBaseline>
                    <Typography variant="h1" align="center" mt={8} mb={4} >Your Item Shop</Typography>

                    <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                        {
                            itemsToShow().map(
                                (magicItem) => <ShopItem key={`${magicItem.id}`} propItem={magicItem} />
                            )
                        }
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3, marginBottom: 2 }}>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" onClick={() => reloadPage()}>Generate a New Shop</Button>
                            <Button variant="contained" href="/orders" sx={{ marginLeft: 3 }}> Go to my order</Button>
                        </ThemeProvider>
                    </Box>
                </CssBaseline>
            </ThemeProvider>
        </>
    )
}
