import { useEffect, useState } from "react"
import { getMagicItems } from "../ApiManager"
import { Button, Typography } from "@mui/material"
import { ShopItem } from "./ShopItem"

export const ShopList = ({levelInfo, areaInfo, wealthInfo, magicItems, setMagicItems, limitedMagicItems, setLimitedMagicItems, setShowList}) => {

//figure out params for two other choices



const areaChoice = () => {
    let myLimitedItems = []
    const randomMagicItems = magicItems.map(x => {
        const rand = Math.floor(Math.random()*magicItems.length)
        return magicItems[rand]
    })
    if(areaInfo.shopArea === 1){
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
} else if(areaInfo.shopArea === 5) {
myLimitedItems = randomMagicItems.slice(0, 14)
return myLimitedItems
}
    
}

useEffect(() => {
   setLimitedMagicItems(areaChoice())
},[magicItems])


    return ( <>
        <Typography variant="h2" align="center" m={8} >Your Item Shop</Typography>
        <article>
            {
                limitedMagicItems?.map(
                    (magicItem) => <ShopItem key={`${magicItem.id}`} propItem={magicItem}/>
                )
            }
        </article>
        <Button variant="contained" onClick={() => setShowList(false)}>Generate a New Shop</Button>
    </>
    )
}
