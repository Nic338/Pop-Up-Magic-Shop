import { AppBar, Box, Button, ThemeProvider, Toolbar, Typography } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import { theme } from "../styles"
export const NavBar = () => {

    const navigate = useNavigate()

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Pop Up Magic Shop
                        </Typography>
                        <Button color="inherit" href="/">Home Page</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    )
}