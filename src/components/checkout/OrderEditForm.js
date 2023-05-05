// import * as React from 'react';
// import { useState } from "react"
// import { editItem, getMagicItems } from "../ApiManager"
// import { Container, TextField } from "@mui/material"
// import { useNavigate } from "react-router-dom"
// import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { modalStyle } from '../styles';


// export const OrderEditForm = ({propOrderItem, setMagicItems, setShowEdit, open, setOpen}) => {

//     const [itemInfo, updateItemInfo] = useState({
//         slug: propOrderItem.magicItem?.slug,
//         name: propOrderItem.magicItem?.name,
//         type: propOrderItem.magicItem?.type,
//         desc: propOrderItem.magicItem?.desc,
//         rarity: propOrderItem.magicItem?.rarity,
//         requires_attunement: propOrderItem.magicItem?.requires_attunement,
//         document__slug: propOrderItem.magicItem?.document__slug,
//         document__title: propOrderItem.magicItem?.document__title,
//         id: propOrderItem.magicItem?.id,
//         price: propOrderItem.magicItem?.price
//     })

//     const handleSaveButtonClick = (e) => {
//         e.preventDefault()
//     const saveItem = {...itemInfo}
//     editItem(saveItem)
//     .then(() => getMagicItems())
//     .then((updatedItem) => setMagicItems(updatedItem))
//     .then(() => setShowEdit(false))
//     .then(window.location.reload(false))
//     }


//     const handleClose = () => setOpen(false);


//  return (
//     <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         slots={{ backdrop: Backdrop }}
//         slotProps={{
//           backdrop: {
//             timeout: 500,
//           },
//         }}
//       >
//         <Fade in={open}>
//           <Box sx={modalStyle}>
//             <Typography id="transition-modal-title" variant="h6" component="h2">
//               Text in a modal
//             </Typography>
//              <Container>
//                  <TextField 
//                    required
//                  id="item-price-edit"
//                  label="Required"
//                  defaultValue={itemInfo.price}
//                  onChange={(event) => {
//                          const copy = {...itemInfo}
//                          copy.price = parseInt(event.target.value)
//                          updateItemInfo(copy)
//                  }}/>
//         <Button variant="contained" size="small" onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}>Save Edit</Button>
//         </Container>
//           </Box>
//         </Fade>
//       </Modal>
//      )
// }
