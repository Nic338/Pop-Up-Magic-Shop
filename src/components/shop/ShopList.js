import { useEffect, useState } from "react"
import { getMagicItems } from "../ApiManager"
import { Box, Button, Typography } from "@mui/material"
import { ShopItem } from "./ShopItem"

export const ShopList = ({ levelInfo, areaInfo, wealthInfo, magicItems, setMagicItems, limitedMagicItems, setLimitedMagicItems, setShowList }) => {

    //figure out params for two other choices
    
    
    //filter by rarity
    const levelChoice = () => {
        let myLeveledItems = []
        if (levelInfo.partyLevel >= 17 && levelInfo.partyLevel <= 20) {
            myLeveledItems = magicItems.filter((magicItem) => magicItem.rarity.includes("rare") || magicItem.rarity.includes("very rare") || magicItem.rarity.includes("legendary") || magicItem.rarity.includes("artifact"))
            return myLeveledItems
        } else if (levelInfo.partyLevel >= 13 && levelInfo.partyLevel <= 16) {
            myLeveledItems = magicItems.filter((magicItem) => magicItem.rarity.includes("very rare") || magicItem.rarity.includes("legendary") || magicItem.rarity.includes("artifact"))
            return myLeveledItems
        } else if (levelInfo.partyLevel >= 9 && levelInfo.partyLevel <= 12) {
            myLeveledItems = magicItems.filter((magicItem) => magicItem.rarity.includes("legendary") || magicItem.rarity.includes("artifact"))
            return myLeveledItems
        } else if (levelInfo.partyLevel >= 5 && levelInfo.partyLevel <= 8) {
            myLeveledItems = magicItems.filter((magicItem) => magicItem.rarity.includes("uncommon") || magicItem.rarity.includes("rare"))
            return myLeveledItems
        } else if (levelInfo.partyLevel <= 4) {
            myLeveledItems = magicItems.filter((magicItem) => magicItem.rarity.includes("uncommon") || magicItem.rarity.includes("common"))
            return myLeveledItems
        }
    }
    
    console.log(levelChoice())
    // fitler by price
    const wealthChoice = (leveledItems) => {
        let myPricedItems = []
        if (wealthInfo.shopWealth === 1) {
            myPricedItems = leveledItems.filter((magicItem) => magicItem.price <= 1500)
            return myPricedItems
        }
        else if (wealthInfo.shopWealth === 2) {
            myPricedItems = leveledItems.filter((magicItem) => magicItem.price <= 15000)
            return myPricedItems
        }
        else if (wealthInfo.shopWealth === 3) {
            myPricedItems = leveledItems.filter((magicItem) => magicItem.price <= 55000)
            return myPricedItems
        }
        else if (wealthInfo.shopWealth === 4) {
            myPricedItems = leveledItems.filter((magicItem) => magicItem.price <= 150000)
            return myPricedItems
        }
        else if (wealthInfo.shopWealth === 5) {
            myPricedItems = leveledItems.filter((magicItem) => magicItem.price <= 550000)
            
            return myPricedItems
        }
    }
    
    

    
    //level choice and wealth choice both added to a new array
    //new array and setMagicItems so that areaChoice will be the last thing to run
    
    const areaChoice = () => {
        let myLimitedItems = []
        const randomMagicItems = magicItems.map(x => {
            const rand = Math.floor(Math.random() * magicItems.length)
            return magicItems[rand]
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
    useEffect(() => {
        const leveledItems = levelChoice()
        setMagicItems(wealthChoice(leveledItems))
        setLimitedMagicItems(areaChoice())
    }, [])


    return (<>
        <Typography variant="h2" align="center" m={8} >Your Item Shop</Typography>
        <Box sx={{display: 'flex', flexDirection: 'column', wrap: 'wrap'}}>
            {
                limitedMagicItems?.map(
                    (magicItem) => <ShopItem key={`${magicItem.id}`} propItem={magicItem} />
                )
            }
        </Box>
        <Button variant="contained" onClick={() => setShowList(false)}>Generate a New Shop</Button>
    </>
    )
}
