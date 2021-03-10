import { makeStyles } from "@material-ui/core/styles";
import BG from '../../media/BG.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        position: 'absolute',
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        fontSize: '300%',
        color: '#2B2626',
        flexWrap: 'wrap',
        top: '15%',
        left: '4%',
        width: '28%',
    },
    text: {
        flexGrow: 1,
        position: 'absolute',
        alignSelf: 'flex-start',
        fontSize: '150%',
        color: '#2B2626',
        flexWrap: 'wrap',
        top: '35%',
        left: '4%',
        width: '25%',
    },
    bg: {
        width: '100%',
        height: '100%',
        display: 'flex',
        top: 0,
        justifyContent: 'center',
        backgroundImage: `url(${BG})`,
    },
    
    simulador: {
        position: 'absolute',
        top: '10%',
        right: '5%',
        '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(56),
        height: theme.spacing(75),
        },
    },

    link: {
        flexGrow: 1,
        position: 'absolute',
        alignSelf: 'flex-start',
        fontStyle: 'normal',
        fontSize: '150%',
        flexWrap: 'wrap',
        color: 'red',
        top: '42%',
        left: '4%',
        width: '25%',
        fontWeight: 'bold',
    },

    slider: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '10%',
    },

    sliderTitle: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '10%',
        fontWeight: 'bold',
    },

    botao: {
        color: '#2B2626',
        backgroundColor: '#ECECEC',
        margin: "0px 2px",
        borderRadius: "10px",
        padding: "8px ",
        '&:active': {
            backgroundColor: '#DA2828',
        },
    },
    sliderTitle2: {
        flexGrow: 1,
        display: 'flex',
        marginBottom: '2%',
        marginTop: '4%',
        justifyContent: 'center',
        fontWeight: 'bold',
    },
    rangeBotao: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
    },
    botao2: {
            backgroundColor: '#DA2828',
            color: '#FFFFFF',
            width:"90%",
            height: 50,
            display: 'flex',
            alignSelf: 'center',
    },
    text2: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '2%',
        color: '#898989',
        width: '91%',
    },
   
  }));

  export default useStyles;