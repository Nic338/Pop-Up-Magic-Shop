import { useEffect, useState } from "react"
import { deleteAllOrders, getMagicItems, getOrdersWithDetails } from "../ApiManager"
import { Box, Button, CssBaseline, ThemeProvider, Typography } from "@mui/material"
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
import { bodyTheme, selectTheme, theme } from "../styles";
import { DiscountForm } from "./DiscountForm";

export const Orders = () => {

  const [orders, setOrders] = useState([])
  const [magicItems, setMagicItems] = useState([])

  useEffect(() => {
    getOrdersWithDetails()
      .then((ordersArray) => setOrders(ordersArray))
  }, [])

  useEffect(() => {
    getMagicItems()
      .then((itemsArray) => setMagicItems(itemsArray))
  }, [])

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
  }, 0)

  // Recursive function that deletes each order at [0] until the array is empty again
  const clearAllOrders = () => {
    if (orders.length > 0) {
      deleteAllOrders(orders[0].id)
        .then(() => {
          const newArray = orders.shift()
          setOrders(newArray)

          clearAllOrders()
        })
    }
    navigate("/")
  }


  return (
    <>
      <ThemeProvider theme={bodyTheme}>
        <CssBaseline>
          <Typography variant="h2" align="center" mt={3} mb={4}>Checkout</Typography>
          <TableContainer component={Paper} sx={{ bgcolor: '#818a69' }}>
            <Table sx={{ minWidth: 700, bottomMargin: 8 }} aria-label="spanning table" mb={2}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontSize: "large", color: '#fbfbfb', bgcolor: '#414535' }}>Name</TableCell>
                  <TableCell sx={{ fontSize: "large", color: '#fbfbfb', bgcolor: '#414535' }}>Edit Item</TableCell>
                  <TableCell align="right" sx={{ fontSize: "large", color: '#fbfbfb', bgcolor: '#414535' }}>Item Type</TableCell>
                  <TableCell align="right" sx={{ fontSize: "large", color: '#fbfbfb', bgcolor: '#414535' }}>Rarity</TableCell>
                  <TableCell align="right" sx={{ fontSize: "large", color: '#fbfbfb', bgcolor: '#414535' }}>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map(
                  (order) => <Order key={`${order.id}`} propOrderItem={order} setMagicItems={setMagicItems} />
                )}
                <TableRow>
                  <TableCell align="right" colSpan={5} sx={{ fontSize: 'larger', color: '#fbfbfb', justifyContent: 'right' }}>Total: <span style={{ color: '#f7d865' }}>{(totalPrice)}</span>gp</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ display: 'flex', justifyContent: 'center', topMargin: 5, paddingTop: 6 }}>
            <ThemeProvider theme={theme}>
              <Button variant='contained' onClick={(event) => {
                event.preventDefault()
                clearAllOrders()
              }} sx={{ topMargin: 5 }}>Remove Orders</Button>
            </ThemeProvider>
          </Box>
        </CssBaseline>
      </ThemeProvider>
      <Box>
        <DiscountForm orderPrice={totalPrice} />
      </Box>
    </>
  )
}