import React from 'react';
import useStyles from './styles';
import Box from '@material-ui/core/Box';
import redesSociais from '../../media/redesSociais.png';

export default function Footer() {
    const classes = useStyles();

    return(
        <div className={classes.root} id="FaleConosco">
                <Box display="flex" justifyContent="space-around" alignItems="stretch">
                    <Box fontFamily="Monospace" fontSize={22} m={1} className={classes.title}>
                        Test front
                    </Box>  
                    <Box fontFamily="Monospace" fontSize={18} m={1} color="#FFFFFF" marginTop="1%" marginLeft="11%" marginRight="8%">
                        Lorem ipsum sit amet
                    </Box>
                    <Box >
                        <Box fontFamily="Monospace" fontSize={12} m={1} color="#898989">
                            Fale conosco
                        </Box>
                        <Box fontFamily="Monospace" fontSize={16} m={1} color="#FFFFFF" >
                            99 9999-9999
                        </Box>
                    </Box>
                </Box>
                <hr width="80%" size="1"/>
                <Box display="flex" justifyContent="space-around">
                    <Box fontFamily="Monospace" fontSize={12} m={1} color="#898989" marginTop="1%">
                        Teste front @ 2020 | Todos os direitos reservados
                    </Box>  
                    <Box marginTop="1%">
                        <img src={redesSociais} alt="redesSociais"/>
                    </Box>
                    <Box fontFamily="Monospace" fontSize={12} m={1} color="#898989" marginTop="1%">
                        Política de privacidade | Termos de uso
                    </Box>
                </Box>
        </div>
    );
}