import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import Reducer from './_reducers'
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

ReactDOM.render(
  <Provider
    store = {createStoreWithMiddleware(Reducer, 
      window.__REDUX_DEVTOOLS_EXTENSION__&&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
    <Router>
      <App />
    </Router>
  </Provider>
 ,
  document.getElementById('root')
);

reportWebVitals();
