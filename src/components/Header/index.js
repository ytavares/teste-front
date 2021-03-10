import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './styles';
import Box from '@material-ui/core/Box';
import phone from '../../media/icon.png';
import Link from '@material-ui/core/Link';

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secundary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color={classes.palette} aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Box fontFamily="Monospace" fontSize={20} m={1}>
                Test front
            </Box>  
          </Typography>
            <Typography variant="h6" className={classes.link}>
                <Box display="flex" justifyContent="space-between">
                    <Box p={1}>
                        <Link href="#ComoFunciona" color="textPrimary" className={classes.hover} to="first" style={{ textDecoration: 'none' }}>
                            Como funciona
                        </Link>
                    </Box>
                    <Box p={1}>
                        <Link href="#Dialog" color="textPrimary" className={classes.hover} to="first" style={{ textDecoration: 'none' }}>
                            Vantagens
                        </Link>
                    </Box>
                    <Box p={1}>
                        <Link href="#Depoimentos" color="textPrimary" className={classes.hover} to="first" style={{ textDecoration: 'none' }}>
                            Depoimentos
                        </Link>
                    </Box>
                    <Box p={1}>
                        <Link href="#PerguntasFrequentes" color="textPrimary" className={classes.hover} to="first" style={{ textDecoration: 'none' }}>
                            Dúvidas
                        </Link>
                    </Box>
                    <Box p={1}>
                        <img src={phone} alt="phone" />
                    </Box>
                    <Box p={1}>
                        <Link href="#FaleConosco" color="textPrimary" className={classes.hover} to="first" style={{ textDecoration: 'none' }}>
                            99 9999-9999
                        </Link>
                    </Box>
                    <Box p={1}>
                        <Link href="#Simulator" color="textPrimary" className={classes.hover} to="first" style={{ textDecoration: 'none' }}>
                            Lorem Ipsum
                        </Link>
                    </Box>
                </Box>
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}