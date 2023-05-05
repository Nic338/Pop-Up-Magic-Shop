import { useEffect, useState } from "react"
import { deleteAllOrders, getMagicItems, getOrdersWithDetails } from "../ApiManager"
import { Box, Button, Typography } from "@mui/material"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import { Order } from "./Order";

export const Orders = () => {

const [orders, setOrders] = useState([])
const [magicItems, setMagicItems] = useState([])

useEffect(() => {
    getOrdersWithDetails()
    .then((ordersArray) => setOrders(ordersArray))
},[])

useEffect(() => {
    getMagicItems()
    .then((itemsArray) => setMagicItems(itemsArray))
},[])
const prices = () => {
    let prices = []
    orders.map((order) => {
        prices.push(order.magicItem?.price)
    })
    return prices
}
const navigate = useNavigate()
const itemPrices = prices()

const totalPrice = itemPrices.reduce((a, b) => {
    return a + b;
},0)

const clearAllOrders = () => {
    orders.forEach((order) => {deleteAllOrders(order)})
    navigate("/")
}


return (
    <>
<Typography variant="h2" align="center" mt={1}>Checkout</Typography>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700, bottomMargin: 8 }} aria-label="spanning table" mb={2}>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={4} sx={{fontSize: "larger"}}>
              Details
            </TableCell>
            <TableCell align="right" sx={{fontSize: "larger"}}>Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{fontSize: "large"}}>Name</TableCell>
            <TableCell sx={{fontSize: "large"}}>Edit Item</TableCell>
            <TableCell align="right" sx={{fontSize: "large"}}>Item Type</TableCell>
            <TableCell align="right" sx={{fontSize: "large"}}>Rarity</TableCell>
            <TableCell align="right" sx={{fontSize: "large"}}>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map(
            (order) => <Order key={`${order.id}`} propOrderItem={order} setMagicItems={setMagicItems}/>
          )}
       
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell align="right">{(totalPrice)}gp</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <Box sx={{display: 'flex', justifyContent: 'center', topMargin: 5 }}>
        <Button variant='contained' onClick={(event) => clearAllOrders(event)} sx={{topMargin: 5}}>Remove Orders</Button>
    </Box>
</>
)
}