import { makeStyles } from '@material-ui/core/styles';
import BG2 from '../../media/BG2.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#E5E5E5',
        display: 'flex',
        justifyContent: 'center',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: "bold",
    },
    bg: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${BG2})`,
        paddingBottom: '4%',
    },
    paper: {
        width: '65%',
        justifyContent: 'center',
    },
}));

export default useStyles;