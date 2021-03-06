import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
React, Enzyme
 */
import { Game } from './tic-tac-toe';
ReactDOM.render(
 <Game />
 , document.getElementById("root"));

/* 
React Intl
 */
//import OlympicGame from './olympicGame';
//
//import { IntlProvider, addLocaleData } from 'react-intl';
//import en from 'react-intl/locale-data/en';
//import enMessages from './translations/en';
//import zh from 'react-intl/locale-data/zh';
//import zhMessages from './translations/zh';
//addLocaleData([...en, ...zh]);
//const supportedMessageBundles = {
//  'en': enMessages,
//  'zh': zhMessages,
//};
//
//const mainLanguage = navigator.language.split(/[-_]/)[0];
////const mainLanguage = 'zh';
//
//ReactDOM.render(
//  <IntlProvider locale={mainLanguage} messages={supportedMessageBundles[mainLanguage]}>
//    <OlympicGame/>
//  </IntlProvider>
//  , document.getElementById('root'));




/*
HOC
 */
//import { OtakuGame } from './otakuGame';
//
//ReactDOM.render(
//  <OtakuGame/>
//  , document.getElementById('root'));