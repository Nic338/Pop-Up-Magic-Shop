import { useState } from "react"
import { editItem, getMagicItems } from "../ApiManager"
import { Button, Container, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const OrderEditForm = ({propOrderItem, setMagicItems, setShowEdit}) => {
    const [itemInfo, updateItemInfo] = useState({
        slug: propOrderItem.magicItem?.slug,
        name: propOrderItem.magicItem?.name,
        type: propOrderItem.magicItem?.type,
        desc: propOrderItem.magicItem?.desc,
        rarity: propOrderItem.magicItem?.rarity,
        requires_attunement: propOrderItem.magicItem?.requires_attunement,
        document__slug: propOrderItem.magicItem?.document__slug,
        document__title: propOrderItem.magicItem?.document__title,
        id: propOrderItem.magicItem?.id,
        price: propOrderItem.magicItem?.price
    })


    const handleSaveButtonClick = (e) => {
        e.preventDefault()
    const saveItem = {...itemInfo}
    editItem(saveItem)
    .then(() => getMagicItems())
    .then((updatedItem) => setMagicItems(updatedItem))
    .then(() => setShowEdit(false))
    .then(window.location.reload(false))
    }
 return (
     <div>
        <Container>
        <TextField 
        required
        id="item-price-edit"
        label="Required"
        defaultValue={itemInfo.price}
        onChange={(event) => {
            const copy = {...itemInfo}
            copy.price = parseInt(event.target.value)
            updateItemInfo(copy)
        }}/>
        <Button variant="contained" size="small" onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}>Save Edit</Button>
        </Container>
     </div>
     )
}