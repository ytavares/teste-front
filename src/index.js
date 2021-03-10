import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ButtonAppBar from './components/Header';
import Simulator from './components/Simulator';
import Dialog from './components/Dialog';
import ComoFunciona from './components/ComoFunciona';
import Depoimentos from './components/Depoimentos';
import PerguntasFrequentes from './components/PerguntasFrequentes';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
        <ButtonAppBar />
        <Simulator />
        <Dialog />
        <ComoFunciona />
        <Depoimentos />
        <PerguntasFrequentes />
        <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
