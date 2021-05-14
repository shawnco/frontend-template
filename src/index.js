import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter history={history}>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));