import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles ((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#E5E5E5',
        paddingBottom: '5%',
        
    },
    card: {
        maxWidth: 345,
        maxHeight: '100%',
        height: '100%',
    },
    media: {
    height: 300,
    },
    cardImg: {
        flexGrow: 1,
        width: '100%',
        height: '100%',
        paddingTop: '10%',
        display: 'flex',
        justifyContent: 'center',
    },
    botao: {
        backgroundColor: '#DA2828',
        color: '#FFFFFF',
        width:"20%",
        height: 50,
        display: 'flex',
        alignSelf: 'center',
    },
}));

export default useStyles;