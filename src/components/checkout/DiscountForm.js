import { Box, TextField, Typography } from "@mui/material"
import { useState } from "react"

export const DiscountForm = ({ orderPrice }) => {
    const [discount, setDiscount] = useState(0)
    const [finalPrice, setFinalPrice] = useState(0)

    //Field that allows the user to discount the order by the % that they choose, and recieve a new price 
    const handleDiscount = (event) => {
        const discountValue = event.target.value
        setDiscount(discountValue)
        const discountedPrice = orderPrice * (1 - (discountValue / 100))
        setFinalPrice(discountedPrice)
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 4,
            marginBottom: 4,
            color: '#fbfbfb'
        }}>
            <Typography variant="h5" m={2}>
                Initial Price:<span style={{ color: '#f7d865' }}>{orderPrice}</span>gp
            </Typography>
            <TextField
                name="discount"
                id="filled-discount-percentage"
                label="Discount Percentage"
                variant="filled"
                value={discount}
                type="number"
                onChange={handleDiscount}
                sx={{
                    color: '#fbfbfb', '& .Mui-focused': {
                        color: '#fbfbfb'
                    }, '& .MuiFilledInput-input': {
                        color: '#fbfbfb'
                    }, '& .MuiInputBase-input': {
                        color: '#fbfbfb'
                    }, '& .MuiInputLabel-root': {
                        color: '#fbfbfb'
                    }, '& .MuiFormControl-root': {
                        color: '#fbfbfb'
                    }
                }} />
            <Typography variant="h5" m={2}>Final Price: <span style={{ color: '#f7d865' }}>{finalPrice.toFixed(0)}</span>gp</Typography>
        </Box>
    )
}