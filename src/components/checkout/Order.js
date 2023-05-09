import { Button, TableCell, TableRow, ThemeProvider } from "@mui/material"
import React, { useState } from "react"
import { editItem, getMagicItems } from "../ApiManager"
import { Container, TextField } from "@mui/material"
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { bodyTheme, modalStyle, selectTheme, theme } from '../styles';

export const Order = ({ propOrderItem, setMagicItems }) => {

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
    const saveItem = { ...itemInfo }
    editItem(saveItem)
      .then(() => getMagicItems())
      .then((updatedItem) => setMagicItems(updatedItem))
      .then(window.location.reload(false))
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Dice Roller
  const dTwenty = {
    sides: 20,
    roll: function () {
      const randomNumber = Math.floor(Math.random() * dTwenty.sides) + 1;
      return randomNumber;
    }
  }

  return (
    <TableRow key={propOrderItem.magicItem?.name}>
      <TableCell sx={{ fontSize: 'large' }}>{propOrderItem.magicItem?.name}</TableCell>
      <TableCell>
        <ThemeProvider theme={theme}>
          <Button variant="contained" size="small" onClick={() => handleOpen()}>
            Haggle Price?
          </Button>
        </ThemeProvider>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}>
          <Fade in={open}>
            <Box sx={modalStyle}>
              <ThemeProvider theme={selectTheme}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                  Set New Price
                </Typography>
                <Container sx={{ display: "flex" }}>
                  <TextField
                    required
                    id="item-price-edit"
                    label="Required"
                    defaultValue={itemInfo.price}
                    onChange={(event) => {
                      const copy = { ...itemInfo }
                      copy.price = parseInt(event.target.value)
                      updateItemInfo(copy)
                    }} />
                  <ThemeProvider theme={theme}>
                    <Button variant="contained" size="small" onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}>Save Edit</Button>
                  </ThemeProvider>
                </Container>
              </ThemeProvider>
            </Box>
          </Fade>
        </Modal>
      </TableCell>
      <TableCell align="right" sx={{ fontSize: 'large' }}>{propOrderItem.magicItem?.type}</TableCell>
      <TableCell align="right" sx={{ fontSize: 'large' }}>{propOrderItem.magicItem?.rarity.charAt(0).toUpperCase() + propOrderItem.magicItem?.rarity.slice(1)}</TableCell>
      <TableCell align="right" sx={{ fontSize: 'large' }}>{propOrderItem.magicItem?.price}gp</TableCell>
    </TableRow>
  )
}