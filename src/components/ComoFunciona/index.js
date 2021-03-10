import React from 'react';
import useStyles from './styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import card1 from '../../media/card1.png';
import card2 from '../../media/card2.png';
import card3 from '../../media/card3.png';
import card4 from '../../media/card4.png';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

export default function ComoFunciona() {
    const classes = useStyles();

    return(
        <>
        <div className={classes.root} id="ComoFunciona">
                <Box display="flex" justifyContent="center" width="100%">
                    <Typography>
                        <Box fontFamily="Monospace" fontSize={32} textAlign="center" flexWrap="wrap" width="100%" fontWeight="bold" paddingTop="10%" paddingBottom="3%">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh.
                        </Box>
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="space-around" flexWrap="wrap">
                    <Box>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <Box className={classes.cardImg}>
                                    <img src={card1} alt="card1"/>
                                </Box>
                                <CardContent>
                                <Typography >
                                    <Box fontFamily="Monospace" fontSize={32} fontWeight="bold" color="#DA2828">
                                        01
                                    </Box>
                                </Typography>
                                <Typography >
                                    <Box fontFamily="Monospace" fontSize={22} fontWeight="bold">
                                        Eu a magnis ut.
                                    </Box>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, urna elit sapien, tincidunt. Viverra.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                    <Box>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <Box className={classes.cardImg}>
                                    <img src={card2} alt="card2"/>
                                </Box>
                                <CardContent>
                                <Typography >
                                    <Box fontFamily="Monospace" fontSize={32} fontWeight="bold" color="#DA2828">
                                        02
                                    </Box>
                                </Typography>
                                <Typography >
                                    <Box fontFamily="Monospace" fontSize={22} fontWeight="bold">
                                        Diam donec nullam amet amet.
                                    </Box>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna gravida ac sed id viverra sit duis.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                    <Box>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <Box className={classes.cardImg}>
                                    <img src={card3} alt="card3"/>
                                </Box>
                                <CardContent>
                                <Typography >
                                    <Box fontFamily="Monospace" fontSize={32} fontWeight="bold" color="#DA2828">
                                        03
                                    </Box>
                                </Typography>
                                <Typography >
                                    <Box fontFamily="Monospace" fontSize={22} fontWeight="bold">
                                        Laoreet etiam quam pulvinar.
                                    </Box>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in magnis adipiscing
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                    <Box>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <Box className={classes.cardImg}>
                                    <img src={card4} alt="card4" />
                                </Box>
                                <CardContent>
                                <Typography >
                                    <Box fontFamily="Monospace" fontSize={32} fontWeight="bold" color="#DA2828">
                                        04
                                    </Box>
                                </Typography>
                                <Typography >
                                    <Box fontFamily="Monospace" fontSize={22} fontWeight="bold">
                                        Semper suspendisse vel dis.
                                    </Box>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.  non risus varius. Porta cras risus.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                </Box>
        </div>
        <div className={classes.root}>
            <Container display="flex" justifyContent="center">
                <Box display="flex" justifyContent="center" width="100%">
                    <Button variant="contained" className={classes.botao}>
                        Lorem ipsum sit
                    </Button>  
                </Box>
            </Container>
        </div>
        </>
    );
}