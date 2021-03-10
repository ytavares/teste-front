import React from 'react';
import useStyles from './styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Conversation from '../../media/Conversation.png'
import Button from '@material-ui/core/Button';
import Check from '../../media/check.png';
import Container from '@material-ui/core/Container';

export default function Dialog() {
    const classes = useStyles();

    return(
        <div className={classes.root} id="Dialog">
            <Container>
            <Box display="flex" alignItems="center" flexDirection="column" width="100%" flexWrap="wrap">
                <Box display="flex" width="100%">
                    <Box alignSelf="center">
                        <Typography variant="h1" component="h2" className={classes.title}>
                            <Box fontFamily="Monospace" fontSize={32} m={2} >
                                Urna bibendum posuere urna eu curabitur rhoncus.
                            </Box>   
                        <Typography variant="h1" component="h2" className={classes.text}>
                            <Box fontFamily="Monospace" fontSize={16} m={2}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae cursus at bibendum mi mi turpis viverra rhoncus.
                            </Box>    
                        </Typography> 
                        <Typography variant="h1" component="h2" >
                            <Box fontFamily="Monospace" fontSize={16} m={2} fontWeight="bold">
                                <img src={Check} alt="check" />
                                Lorem ipsum dolor sit amet, consectetur
                            </Box>    
                        </Typography> 
                        <Typography variant="h1" component="h2" >
                            <Box fontFamily="Monospace" fontSize={16} m={2} fontWeight="bold">
                                <img src={Check} alt="check" />
                                adipiscing elit. Proin pellentesque facilisis
                            </Box>    
                        </Typography>
                        <Typography variant="h1" component="h2" >
                            <Box fontFamily="Monospace" fontSize={16} m={2} fontWeight="bold">
                                <img src={Check} alt="check" />
                                id pulvinar eu mi id. Euismod.
                            </Box>    
                        </Typography>
                        <Typography variant="h1" component="h2" className={classes.text}>   
                            <Box fontFamily="Monospace" fontSize={16} m={2}>  
                                <Button variant="contained" className={classes.botao}>
                                    id pulvinar eu mi id
                                </Button>  
                            </Box>
                        </Typography>        
                        </Typography>
                    </Box>
                    <Box >
                        <img src={Conversation} alt="Conversation"/>
                    </Box>
                </Box>
            </Box>
            </Container>
        </div>
    );
}