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