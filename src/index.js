import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/initStore';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import './index.css';

import { default as Router } from './router/index';

import * as serviceWorker from './serviceWorker';

const MUITheme = createMuiTheme({ palette: { type: 'dark' } });

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={MUITheme}>
            <Router />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
