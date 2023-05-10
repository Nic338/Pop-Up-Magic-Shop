import { createTheme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
//Styles page to have themes for MUI to use throughout my app
export const useStyles = makeStyles(() => ({
    shopSelector: {
        minWidth: 300,
        marginLeft: 33,
        marginTop: 100
    }
}));

export const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#716969',
    color: '#fpfpfp',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const theme = createTheme({
    palette: {
        primary: {
            main: '#6d1a36'
        }
    }
})
export const bodyTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: `url("https://cdnb.artstation.com/p/assets/images/images/000/234/511/large/wiebke-scholz-sts-between-worlds-bg01.jpg?1412414034")`,
                    backgroundSize: 'fill',
                    color: '#fbfbfb',
                    textShadow: '2px 2px black'
                }
            }
        }
    }
})
export const selectTheme = createTheme({
    palette: {
        primary: {
            main: '#fpfpfp'
        }
    }
})