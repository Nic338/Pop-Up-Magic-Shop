import { Box, TextField, Typography } from "@mui/material"
import { useState } from "react"

export const DiscountForm = ({ orderPrice }) => {
    const [discount, setDiscount] = useState(0)
    const [finalPrice, setFinalPrice] = useState(0)


    const handleDiscount = (event) => {
        const discountValue = event.target.value
        setDiscount(discountValue)
        const discountedPrice = orderPrice * (1 - (discountValue / 100))
        setFinalPrice(discountedPrice)
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
            <Typography variant="h5" m={2}>
                Initial Price: {orderPrice}gp
            </Typography>
            <TextField
                name="discount"
                id="outlined-discount-percentage"
                label="Discount Percentage"
                variant="outlined"
                value={discount}
                type="number"
                onChange={handleDiscount} />
            <Typography variant="h5" m={2}>Final Price: {finalPrice.toFixed(0)}gp</Typography>
        </Box>
    )
}