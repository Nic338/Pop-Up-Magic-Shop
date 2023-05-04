import { Button, TableCell, TableRow } from "@mui/material"
import { useState } from "react"
import { OrderEditForm } from "./OrderEditForm"

export const Order = ({propOrderItem, setMagicItems}) => {

const [showEdit, setShowEdit] = useState(false)

return (
!showEdit ?
    <>
<TableRow key={propOrderItem.magicItem?.name}>
              <TableCell>{propOrderItem.magicItem?.name}</TableCell>
              <TableCell>
                <Button variant="contained" size="small" onClick={() => setShowEdit(true)}>Haggle Price?</Button>
              </TableCell>
              <TableCell align="right">{propOrderItem.magicItem?.type}</TableCell>
              <TableCell align="right">{propOrderItem.magicItem?.rarity.charAt(0).toUpperCase() + propOrderItem.magicItem?.rarity.slice(1)}</TableCell>
              <TableCell align="right">{propOrderItem.magicItem?.price}gp</TableCell>
            </TableRow>
</>
:
<OrderEditForm propOrderItem={propOrderItem} setShowEdit={setShowEdit} setMagicItems={setMagicItems}/>
)
}