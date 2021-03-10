import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#E5E5E5',
        width: '100%',
        height: '50%',
    },
    dialog: {
        flexGrow: 1,
        display: 'flex',
        height: '200%',
        width: '200%',
        alignItems: 'center',
    },
    title: {
        flexGrow: 1,
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '300%',
        color: '#2B2626',
        flexWrap: 'wrap',
        top: '90%',
        width: '80%',
    },
    text: {
        flexGrow: 1,
        color: '#2B2626',
        flexWrap: 'wrap',
    },
    info: {
        width: '50%',
    },
    botao: {
        backgroundColor: '#DA2828',
        color: '#FFFFFF',
        width:"50%",
        display: 'flex',
        alignSelf: 'center',
    },
}));

export default useStyles;