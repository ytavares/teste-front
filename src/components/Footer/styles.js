import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#2B2626',
        width: '100%',
        zIndex: 2,
        paddingTop: '1%',
        paddingBottom: '1%',
    },
    title: {
        fontWeight: 'bold',
        color: '#FFFFFF',
        textTransform: 'uppercase',
        marginTop: '1%',
    },
}));

export default useStyles;