import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: 82,
        width: '100%',
        position: 'sticky',
        top: 0,
        zIndex: 999,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#2B2626',
        textTransform: 'uppercase',
      },
      palette: {
        primary: '#FFFFFF',
        secondary: '#DA2828'
      },
      links: {
        flexGrow: 1,
        fontFamily: ['Montserrat'].join(','),
        fontStyle: 'normal',
        fontSize: 13,
        fontWeight: 600,
        textAlign: 'right',
        color: '#2B2626',
        textDecoration: 'none',
      },
      hover: {
        '&:hover': {
            flexGrow: 1,
            display: 'block',
            background: '#DA2828',
            color: '#FFFFFF',
            padding: 5,
            borderRadius: 4, 
            textDecoration: 'none',
        },
      }
      
  }));

  export default useStyles;