import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const NavBar = () => {
    
    
    return(
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                   <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Pop Up Magic Shop
                    </Typography>
                    <Button color="inherit">Home Page</Button> 
                </Toolbar>
            </AppBar>
        </Box>
    )
}