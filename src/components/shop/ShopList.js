import { useEffect, useState } from "react"
import { getMagicItems } from "../ApiManager"
import { Typography } from "@mui/material"
import { ShopItem } from "./ShopItem"
import { HomePage } from "../homePage/HomePage"

export const ShopList = () => {

    const [magicItems, setMagicItems] = useState([])
    const [limitedMagicItems, setLimitedMagicItems] = useState([])

useEffect(() => {
     getMagicItems()
    .then((itemsArray) => setMagicItems(itemsArray))
 },[])


const handleGenerateItems = async () => {
    const items = await getMagicItems();
    const randomIndex = Math.floor(Math.random() * magicItems.length);
    const randomItem = items[randomIndex];
    setMagicItems(randomItem)
}

useEffect(() => {
    const myLimitedItems = magicItems.slice(0, 10)
    setLimitedMagicItems(myLimitedItems)
},[magicItems])

    return ( <>
        <Typography variant="h2" align="center" m={8} >Your Item Shop</Typography>
        <article>
            {
                limitedMagicItems.map(
                    (magicItem) => <ShopItem key={`${magicItem.id}`} propItem={magicItem} handleGenerateItems={handleGenerateItems} />
                )
            }
        </article>
    </>
    )
}