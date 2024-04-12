import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Languages // 
import {IntlProvider} from 'react-intl';
import Portuguese from './lang/pt.json'
import English from './lang/en-us.json'

const userLanguage  = navigator.language || 'pt-BR';

let lang;
if (userLanguage  === "pt-BR") {
   lang = Portuguese;
} else {
  lang = English;
}

console.log(userLanguage);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
      <IntlProvider locale={userLanguage} messages={lang}>
        <App />
      </IntlProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
