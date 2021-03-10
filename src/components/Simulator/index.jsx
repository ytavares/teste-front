import React,{useState} from 'react';
import useStyles from './styles';
import Box from '@material-ui/core/Box';
import BG from '../../media/BG.png'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Slider from '../Slider/index';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';

export default function Simulator() {
    const classes = useStyles();

    const [valueSlider, setValueSlider] = useState(0);
    const handleChange = (event, newValue) => {
        setValueSlider(newValue);
    };

    const [valueParcela, setValueParcela] = useState(6);
    const handleChangeParcela = (newValueParcela) => {
        setValueParcela(newValueParcela);
    } 

    let TotParcela = valueSlider/valueParcela;

    return (
        <div className={classes.root} id="Simulator">
            <Container maxWidth="sm">
                <Box display="flex" alignItems="center" flexDirection="column" width="100%" flexWrap="wrap">
                    <Box display="flex" width="100%">
                        <Box alignSelf="center">
                            <Typography variant="h1" component="h2" className={classes.title}>
                                <Box fontFamily="Monospace" fontSize={48} m={3}>
                                    Lorem ipsum sit amet dolor lorem ipsum sit amet...
                                </Box>                    
                            </Typography>
                            <Typography className={classes.text}>
                                <Box fontFamily="Monospace" fontSize={18} m={3}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum ut.
                                </Box>  
                            </Typography>
                            <Link href="#" color="textPrimary" className={classes.link} >
                                <Box fontFamily="Monospace" fontSize={16} m={3}>
                                    Saiba mais...
                                </Box>
                            </Link>
                        </Box>
                        <Box className={classes.simulador}>
                            <Paper elevation={3}>
                                <Typography className={classes.sliderTitle}>
                                    <Box fontFamily="Monospace" fontSize={20} m={1}>
                                        Ornare ante sapien risus nulla.
                                    </Box>                    
                                </Typography>
                                <Box className={classes.slider}>
                                    <Slider getValueSlider={valueSlider}
                                            setHandleChange={handleChange}/>
                                </Box>
                                <Box display="flex" justifyContent="space-around" paddingTop="10">
                                    <Box  fontFamily="Monospace" fontSize={16} m={1}  marginRight="20%">
                                        R$ 3.500
                                    </Box>  
                                    <Box  fontFamily="Monospace" fontSize={16} m={1}>
                                        R$ 40.000
                                    </Box>                     
                                </Box>
                                <Typography className={classes.sliderTitle2}>
                                    <Box fontFamily="Monospace" fontSize={14} m={1} fontWeight="bold">
                                        Lorem ipsum sit amet
                                    </Box>                    
                                </Typography>
                                <Box display="flex" alignItems="center" flexDirection="column" width="100%">
                                    <Box display="flex">
                                        <Button className={classes.botao} onClick={() => handleChangeParcela(6) }>
                                            6
                                        </Button>
                                        <Button className={classes.botao} onClick={() => handleChangeParcela(12)}>
                                            12
                                        </Button>
                                        <Button className={classes.botao} onClick={() => handleChangeParcela(18)}>
                                            18
                                        </Button>
                                        <Button className={classes.botao} onClick={() => handleChangeParcela(24)}>
                                            24
                                        </Button>
                                        <Button className={classes.botao} onClick={() => handleChangeParcela(36)}>
                                            36
                                        </Button>
                                        <Button className={classes.botao} onClick={() => handleChangeParcela(48)}>
                                            48
                                        </Button>
                                    </Box>
                                </Box>
                                <Typography className={classes.sliderTitle2}>
                                    <Box  fontFamily="Monospace" fontSize={14} m={1}>
                                        Lorem ipsum sit amet
                                    </Box>                    
                                </Typography>
                                <Typography className={classes.sliderTitle2}>
                                    <Box  fontFamily="Monospace" fontSize={30} m={1}>
                                        {Intl.NumberFormat('br-BR', { style: 'currency', currency: 'BRL' }).format(TotParcela)}
                                    </Box>                    
                                </Typography>
                                <Box display="flex" alignItems="center" flexDirection="column" width="100%">
                                    <Button className={classes.botao2}>
                                        Lorem ipsum sit amet
                                    </Button>
                                </Box>
                                <Box display="flex" alignItems="center" flexDirection="column" width="100%">
                                    <Typography className={classes.text2}>
                                        <Box fontFamily="Monospace" fontSize={13} m={1}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque facilisis id pulvinar eu mi id. Euismod.
                                        </Box>                    
                                    </Typography>
                                </Box>
                            </Paper>
                        </Box>
                        <Box className={classes.bg}>
                            <img src={BG} alt="BG" />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}