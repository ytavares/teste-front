import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './styles';
import { Box, Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

export default function PerguntasFrequentes() {
    const classes = useStyles();
  
    return (
    <>
        <div className={classes.root}>
            <Container display="flex" justifyContent="center">
                <Box display="flex" justifyContent="center" width="100%">
                    <Typography>
                        <Box fontFamily="Monospace" fontSize={32} textAlign="center" flexWrap="wrap" width="100%" fontWeight="bold" paddingTop="40%" paddingBottom="3%">
                            Perguntas Frequentes
                        </Box>
                        <Box fontFamily="Monospace" fontSize={16} textAlign="center" flexWrap="wrap" width="100%" paddingBottom="10%">
                            Tire suas dúvidas aqui!
                        </Box>
                    </Typography>
                </Box>
            </Container>
        </div>
        <div className={classes.root} id="PerguntasFrequentes">
            <Container className={classes.bg}>
                <Paper className={classes.paper}>
                    <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Tenho desconto se pagar a última parcela antecipadamente?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Sim. O pagamento da última parcela de forma antecipada faz com que o juros seja reduzido gerando um desconto.
                        </Typography>
                    </AccordionDetails>
                    </Accordion>
                    <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>Preciso ir até uma concessionária ou loja para contratar o financiamento?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                    </Accordion>
                    <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>Posso financiar um veículo se estiver com nome registrado nos órgãos de proteção ao crédito?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                    </Accordion>
                    <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>Como é realizado o pagamento ao vendedor do veículo?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                    </Accordion>
                    <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>Como posso comprovar minha renda?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                    </Accordion>
                    <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>Ganhei uma grana extra e quero quitar o veículo. Tenho desconto?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                    </Accordion>
                </Paper>
            </Container>
        </div>
    </>
    );
  }
  