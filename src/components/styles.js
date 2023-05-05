import { createTheme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

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
    bgcolor: 'background.paper',
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
                    backgroundColor: '#f2e3bc',
                    color: '#414535'
                }
            }
        }
    }
})
export const selectTheme = createTheme({
    palette: {
        primary: {
            main: '#53917e'
        }
    }
})