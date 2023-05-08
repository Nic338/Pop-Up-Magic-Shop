import { Box, TextField } from "@mui/material"
import { useState } from "react"

export const DiscountForm = ({orderPrice}) => {
    const [discount, setDiscount] = useState({
        price: orderPrice,
        discount: 0,
        total: 0,
        finalPrice: 0

    })


const handleDiscount = () => {
    setDiscount({
        total: discount.totalDiscount(),
        finalPrice: discount.getFinalPrice()
    })
}

const totalDiscount = () => {
    return Math.abs((((1-(discount.discount/100)))-1)*100)
}

const getFinalPrice = () => {
    return discount.price-(discount.price * discount.totalDiscount()/100)
}


    return (
        <Box sx={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
            <TextField 
            id="outlined-read-only-price-input" 
            label="Initial Price" 
            variant="outlined" 
            defaultValue={discount.price}
            InputProps={{
                readOnly: true,
            }}/>
            <TextField 
            id="outlined-discount-percentage"
            label="Discount Percentage"
            variant="outlined"
            value={discount.discount}
            onChange={() => handleDiscount()}/>
            <TextField 
            id="outlined-total-price"
            label="Total Price"
            variant="outlined"
            defaultValue={discount.finalPrice}
            inputProps={{
                readOnly: true
            }}/>
        </Box>
    )
}