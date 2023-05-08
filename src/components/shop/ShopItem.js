import * as React from 'react';
import { ThemeProvider, styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReactMarkdown from 'react-markdown'
import { Box, Button, Grid } from '@mui/material';
import { createNewOrderData } from '../ApiManager';
import { modalStyle, selectTheme } from '../styles';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


export const ShopItem = ({ propItem }) => {
    const [expanded, setExpanded] = React.useState(false)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // const [magicItemIds, updateMagicItemIds] = React.useState([])

    
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    const magicItemsArray = []
    const handleAddItemToOrder = (evt) => {
        evt.preventDefault()
        const itemToSendToAPI = {
            magicItemId: propItem.id
        }
     magicItemsArray.push(itemToSendToAPI)
     
    }
    console.log(magicItemsArray)
    

    return (
        <Grid>
            <Card sx={{ maxWidth: 290, padding: 1, bgcolor: '#716969', color: "white", marginBottom: 3, marginLeft: 1, }} key={propItem.id}>
                <CardHeader title="" />
                <CardContent>
                    <Typography variant='body'>
                        {propItem.name}
                    </Typography>
                    <Typography variant='body2'>
                        {propItem.price}gp
                    </Typography>
                    <ThemeProvider theme={selectTheme}>
                        <Button variant='text' size='small' onClick={
                            () => handleAddItemToOrder((evt) => evt.target.value)}>Add to Order</Button>
                    </ThemeProvider>
                </CardContent>
                <CardActions>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more">
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit color='white'>
                    <CardContent>
                        <Typography variant='h6'>
                            {propItem.type}
                        </Typography>
                        <Typography variant='h6'>
                            {propItem.rarity.charAt(0).toUpperCase() + propItem.rarity.slice(1)}
                        </Typography>
                        <Typography paragraph>
                            <ReactMarkdown>
                                {propItem.desc}
                            </ReactMarkdown>
                        </Typography>
                        <Typography paragraph>
                            {propItem.requires_attunement.charAt(0).toUpperCase() + propItem.requires_attunement.slice(1)}
                        </Typography>
                    </CardContent>
                </Collapse>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 100,
                        },
                    }}
                >
                    <Fade in={open}>
                        <Box sx={modalStyle}>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                            </Typography>
                            <Typography id="transition-modal-description" sx={{ display: 'flex', justifyContent: 'center' }}>
                                Added {propItem.name} to order!
                            </Typography>
                        </Box>
                    </Fade>
                </Modal>
            </Card>
        </Grid>
    )
}

{/* <>
        <section key={propItem.id}>
        <header>{propItem.name}</header>
        </section>
    </> */}