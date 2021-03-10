import React from 'react';
import useStyles from './styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Aspas from '../../media/aspas.png';
import Avatar from '@material-ui/core/Avatar';
import avatar1 from '../../media/avatar1.jpg';
import avatar2 from '../../media/avatar2.jpg';
import avatar3 from '../../media/avatar3.jpg';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export default function Depoimentos() {
  const classes = useStyles();

  return (
    <>
    <div className={classes.root} id="Depoimentos">
            <Container display="flex" justifyContent="center">
                <Box display="flex" justifyContent="center" width="100%">
                    <Typography>
                        <Box fontFamily="Monospace" fontSize={48} textAlign="center" flexWrap="wrap" width="100%" fontWeight="bold"paddingBottom="3%">
                          Congue viverra quam dui.
                        </Box>
                        <Box fontFamily="Monospace" fontSize={16} textAlign="center" flexWrap="wrap" width="100%" paddingBottom="10%">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nunc.
                        </Box>
                    </Typography>
                </Box>
            </Container>
    </div>
    <div>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={8}>
              <Grid item display="flex" justifyContent="center">
                <Paper className={classes.paper}>
                  <Box display="flex" alignItems="center" flexDirection="column" width="100%">
                    <Box marginBottom="10%" marginTop="10%">
                      <img src={Aspas} alt="Aspas"/>
                    </Box>
                    <Box flexWrap="wrap" marginBottom="10%" marginLeft="10%" marginRight="10%">
                      <center>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem purus bibendum rhoncus ut tortor etiam turpis. Vitae varius nunc, pulvinar elementum. Sed sit euismod dui id velit eu amet accumsan blandit. Posuere ac sed gravida nibh tristique elit volutpat ac. Vulputate mauris hac eget ipsum. In id gravida laoreet in aliquet. </center>
                    </Box>
                    <Avatar alt="Remy Sharp" src={avatar1} />
                    <Box>
                      Thiago França
                    </Box>
                    <Box>
                      Jac J3 2013
                    </Box>
                  </Box>
                </Paper>
              </Grid>
              <Grid item display="flex" justifyContent="center">
                <Paper className={classes.paper}>
                  <Box display="flex" alignItems="center" flexDirection="column" width="100%">
                    <Box marginBottom="10%" marginTop="10%">
                      <img src={Aspas} alt="Aspas"/>
                    </Box>
                    <Box flexWrap="wrap" marginBottom="15%" marginLeft="10%" marginRight="10%">
                      <center>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis egestas aliquam sed gravida eget sit cursus. Nec mi vestibulum et, velit, interdum vitae. Nec non tellus et scelerisque donec. Faucibus volutpat suscipit consectetur quam egestas in posuere leo nibh. Metus malesuada.</center>
                    </Box>
                    <Avatar alt="Remy Sharp" src={avatar2} />
                    <Box>
                      André Miranda Souza
                    </Box>
                    <Box>
                      Corsa 1999 e Fox 2008
                    </Box>
                  </Box>
                </Paper>
              </Grid>
              <Grid item display="flex" justifyContent="center">
                <Paper className={classes.paper}>
                  <Box display="flex" alignItems="center" flexDirection="column" width="100%">
                    <Box marginBottom="10%" marginTop="10%">
                      <img src={Aspas} alt="Aspas"/>
                    </Box>
                    <Box flexWrap="wrap" marginBottom="15%" marginLeft="10%" marginRight="10%">
                      <center>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel est, neque, facilisis et et diam sit. Scelerisque diam lorem consectetur elementum. Facilisis id massa aliquam vulputate accumsan massa. Quam diam malesuada quam non commodo risus. Praesent condimentum nec rhoncus id.</center>
                    </Box>
                    <Avatar alt="Remy Sharp" src={avatar3} />
                    <Box>
                      Paula Fernandes
                    </Box>
                    <Box>
                      Celta 2011
                    </Box>
                  </Box>
                </Paper>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
    </>
  );
}
