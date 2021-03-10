import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#E5E5E5',
      },
      paper: {
        height: '100%',
        padding: '5%',
        width: 350,
      },
      control: {
        padding: theme.spacing(2),
      },
}));

export default useStyles;