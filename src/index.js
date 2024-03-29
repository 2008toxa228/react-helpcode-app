import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {createStore/*, compose, applyMiddleware*/} from "redux";
import rootReducer from "./redux/rootReducer";
import {Provider} from "react-redux";
// import thunk from 'redux-thunk';

// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//     }) : compose;

const store = createStore(
  rootReducer,
  // composeEnhancers(
  //   applyMiddleware(thunk)
  // )
);

const application = (
  <Provider store={store}>
    <BrowserRouter forceRefresh>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  application,
  document.getElementById('root')
);
